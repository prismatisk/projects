const BASE = "https://www.e-control.at/o/rc-public-rest";

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
          smartMeterSearch: false, loadProfileUpload: false,
          consumptionType: null, calculatedValues: null,
          detailedValues: null, lastUploadDate: null,
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
      p.productProperties.some((pp) => pp.propName === "CERTIFIED_GREEN_POWER") &&
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
  return produkte.slice(0, 10).map((p) => {
    const ec = p.calculatedProductEnergyCosts;
    const tax = 1 + ec.taxRate;

    const ct = p.contractTermInfo;
    let garantie = null;
    if (ct?.priceGuaranteeType === "GUARANTEE") {
      garantie = ct.priceGuaranteeMonths
        ? `${ct.priceGuaranteeMonths} Monate`
        : ct.priceGuaranteeUntil
        ? `bis ${new Date(ct.priceGuaranteeUntil).toLocaleDateString("de-AT")}`
        : "Ja";
    } else if (ct?.priceGuaranteeType === "ADJUSTING") {
      garantie = ct.priceAdjustment?.defaultPropName
        ? `Anpassung ${ct.priceAdjustment.defaultPropName}`
        : "variabel";
    }

    return {
      anbieter: p.brandName,
      produkt: p.productName,
      arbeitspreisCtKwh: Math.round((ec.energyRateTotal * tax) / consumption * 100) / 100,
      grundpreisMonat: Math.round((ec.baseRate * tax) / 100 / 12 * 100) / 100,
      energieJahr: Math.round(ec.totalGrossSum / 100 * 100) / 100,
      gesamtJahr: Math.round(p.annualGrossRate / 100 * 100) / 100,
      garantie,
      link: p.changeLink?.link || null,
    };
  });
}

const ALLE_PLZ = [
  "1010", "3100", "4020", "5020", "6020", "6900", "7000", "8010", "9020",
];

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const { zipCode, consumption = 3500, gesamt = false } = await req.json();

  try {
    if (gesamt) {
      // Ganz Österreich
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
        if (!map.has(key) || p.calculatedProductEnergyCosts.energyRateTotal < map.get(key).calculatedProductEnergyCosts.energyRateTotal) {
          map.set(key, p);
        }
      }

      const dedupliziert = [...map.values()];
      dedupliziert.sort((a, b) =>
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
      // Einzelne PLZ
      if (!/^\d{4}$/.test(String(zipCode))) {
        return Response.json({ error: "Ungültige Postleitzahl." }, { status: 400 });
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
