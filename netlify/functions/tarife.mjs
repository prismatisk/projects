const BASE = "https://www.e-control.at/o/rc-public-rest";

// Typical annual consumption per person (kWh)
const CONSUMPTION_PER_PERSON = {
  1: 1500,
  2: 2500,
  3: 3500,
  4: 4500,
  5: 5500,
};

// Additional consumption for appliances (kWh/year)
const APPLIANCE_CONSUMPTION = {
  waermepumpe: 4000,
  heisswasser: 1800,
  stromheizung: 5000,
  gas: -500, // gas heating reduces electricity need
};

function calculateConsumption({ consumption, persons, appliances }) {
  let base = consumption;
  if (!base && persons) {
    base = CONSUMPTION_PER_PERSON[Math.min(persons, 5)] || 3500;
  }
  if (!base) base = 3500;

  if (appliances && typeof appliances === "object") {
    for (const [key, active] of Object.entries(appliances)) {
      if (active && APPLIANCE_CONSUMPTION[key]) {
        base += APPLIANCE_CONSUMPTION[key];
      }
    }
  }

  return Math.max(base, 500); // minimum 500 kWh
}

async function econtrolFetch(urlPath, method = "GET", body = null) {
  const options = { method, headers: { "Content-Type": "application/json" } };
  if (body) options.body = JSON.stringify(body);
  const res = await fetch(`${BASE}${urlPath}`, options);
  return res.json();
}

async function tarifeAbfrage(zipCode, consumption) {
  const gridData = await econtrolFetch(
    `/rate-calculator/grid-operators?locale=de&zipCode=${zipCode}&energyType=POWER`
  );

  if (!gridData.isZipCodeValid || !gridData.gridOperators?.length) {
    throw new Error("Ungültige Postleitzahl.");
  }

  const grid = gridData.gridOperators[0];

  const rateData = await econtrolFetch(
    "/rate-calculator/energy-type/POWER/rate?locale=de&isSmartMeter=false",
    "POST",
    {
      customerGroup: "HOME",
      energyType: "POWER",
      zipCode: parseInt(zipCode),
      gridOperatorId: grid.id,
      gridAreaId: grid.gridAreaId,
      moveHome: true,
      includeSwitchingDiscounts: false,
      firstMeterOptions: {
        standardConsumption: consumption,
        smartMeterRequestOptions: {
          smartMeterSearch: false,
          loadProfileUpload: false,
          consumptionType: null,
          calculatedValues: null,
          detailedValues: null,
          lastUploadDate: null,
        },
      },
      membership: null,
      requirements: [],
      priceView: "EUR_PER_YEAR",
      referencePeriod: "ONE_YEAR",
      searchPriceModel: "CLASSIC",
    }
  );

  const oeko = rateData.ratedProducts.filter(
    (p) =>
      p.productProperties.some(
        (pp) => pp.propName === "CERTIFIED_GREEN_POWER"
      ) &&
      p.calculatedProductEnergyCosts.energyRateTotal > 0 &&
      !p.calculatedProductEnergyCosts.complexPrice
  );

  oeko.sort(
    (a, b) =>
      a.calculatedProductEnergyCosts.energyRateTotal -
      b.calculatedProductEnergyCosts.energyRateTotal
  );

  return { grid, oeko };
}

function aufbereiten(produkte, consumption) {
  return produkte.slice(0, 15).map((p) => {
    const ec = p.calculatedProductEnergyCosts;
    const tax = 1 + ec.taxRate;

    const ct = p.contractTermInfo;
    let garantie = null;
    let garantieMonate = null;
    let preisStabil = false; // true if price guaranteed >= 12 months

    if (ct?.priceGuaranteeType === "GUARANTEE") {
      if (ct.priceGuaranteeMonths) {
        garantieMonate = ct.priceGuaranteeMonths;
        garantie = `${ct.priceGuaranteeMonths} Monate`;
        preisStabil = ct.priceGuaranteeMonths >= 12;
      } else if (ct.priceGuaranteeUntil) {
        const bis = new Date(ct.priceGuaranteeUntil);
        const jetzt = new Date();
        const monate = Math.round(
          (bis - jetzt) / (1000 * 60 * 60 * 24 * 30)
        );
        garantieMonate = monate;
        garantie = `bis ${bis.toLocaleDateString("de-AT")}`;
        preisStabil = monate >= 12;
      } else {
        garantie = "Ja";
        preisStabil = true;
      }
    } else if (ct?.priceGuaranteeType === "ADJUSTING") {
      garantie = ct.priceAdjustment?.defaultPropName
        ? `Anpassung ${ct.priceAdjustment.defaultPropName}`
        : "variabel";
      preisStabil = false;
    }

    const arbeitspreisCtKwh =
      Math.round(((ec.energyRateTotal * tax) / consumption) * 100) / 100;

    return {
      anbieter: p.brandName,
      produkt: p.productName,
      arbeitspreisCtKwh,
      grundpreisMonat:
        Math.round(((ec.baseRate * tax) / 100 / 12) * 100) / 100,
      energieJahr: Math.round((ec.totalGrossSum / 100) * 100) / 100,
      gesamtJahr: Math.round((p.annualGrossRate / 100) * 100) / 100,
      garantie,
      garantieMonate,
      preisStabil, // guaranteed for at least 12 months
      link: p.changeLink?.link || null,
    };
  });
}

const ALLE_PLZ = [
  "1010",
  "3100",
  "4020",
  "5020",
  "6020",
  "6900",
  "7000",
  "8010",
  "9020",
];

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body = await req.json();
  const {
    zipCode,
    consumption: rawConsumption,
    persons,
    appliances,
    gesamt = false,
  } = body;

  const consumption = calculateConsumption({
    consumption: rawConsumption,
    persons,
    appliances,
  });

  try {
    if (gesamt) {
      const ergebnisse = await Promise.allSettled(
        ALLE_PLZ.map((plz) => tarifeAbfrage(plz, consumption))
      );

      const alle = [];
      for (const r of ergebnisse) {
        if (r.status === "fulfilled") {
          for (const p of r.value.oeko) alle.push(p);
        }
      }

      const map = new Map();
      for (const p of alle) {
        const key = `${p.brandName}|||${p.productName}`;
        if (
          !map.has(key) ||
          p.calculatedProductEnergyCosts.energyRateTotal <
            map.get(key).calculatedProductEnergyCosts.energyRateTotal
        ) {
          map.set(key, p);
        }
      }

      const dedupliziert = [...map.values()];
      dedupliziert.sort(
        (a, b) =>
          a.calculatedProductEnergyCosts.energyRateTotal -
          b.calculatedProductEnergyCosts.energyRateTotal
      );

      return Response.json({
        netzbetreiber: "Ganz Österreich (alle Netzgebiete)",
        verbrauch: consumption,
        anzahlGesamt: dedupliziert.length,
        products: aufbereiten(dedupliziert, consumption),
      });
    } else {
      if (!/^\d{4}$/.test(String(zipCode))) {
        return Response.json(
          { error: "Ungültige Postleitzahl." },
          { status: 400 }
        );
      }

      const { grid, oeko } = await tarifeAbfrage(String(zipCode), consumption);

      return Response.json({
        netzbetreiber: grid.name,
        verbrauch: consumption,
        anzahlGesamt: oeko.length,
        products: aufbereiten(oeko, consumption),
      });
    }
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
};

export const config = { path: "/api/tarife" };
