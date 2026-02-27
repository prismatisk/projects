import { useState } from 'react'
import { CheckCircle, ChevronRight, Zap, TrendingDown, Shield, Star } from 'lucide-react'

const Card = ({ children, style = {} }) => (
  <div style={{ background: '#fff', borderRadius: '26px', padding: '20px', ...style }}>
    {children}
  </div>
)

const steps = ['Vertrag', 'Verbrauch', 'Ergebnis']

export default function CheckScreen() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1)
    else setDone(true)
  }

  if (done) {
    return (
      <div className="screen-enter" style={{ padding: '0 16px 16px' }}>
        <div style={{ padding: '56px 0 24px' }}>
          <p style={{ fontSize: '13px', color: '#888', marginBottom: '2px', fontWeight: 500 }}>Dein Ergebnis</p>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1d1d1b' }}>Alles gut! ✓</h1>
        </div>

        <Card style={{ background: '#a8d3af', marginBottom: '12px' }}>
          <CheckCircle size={32} color="#1d1d1b" style={{ marginBottom: '12px' }} />
          <p style={{ fontSize: '20px', fontWeight: 800, color: '#1d1d1b', marginBottom: '6px', lineHeight: 1.2 }}>
            Du bist optimal aufgestellt
          </p>
          <p style={{ fontSize: '13px', color: '#1d1d1b99', lineHeight: 1.5 }}>
            Dein aktueller Tarif passt perfekt zu deinem Verbrauch von 4.400 kWh/Jahr.
          </p>
        </Card>

        {[
          { Icon: Zap, label: 'Tarif', value: 'MAXstrom Flex', ok: true },
          { Icon: TrendingDown, label: 'Verbrauch', value: '4.280 kWh (−3%)', ok: true },
          { Icon: Shield, label: 'Vertragslaufzeit', value: 'Ohne Bindung', ok: true },
          { Icon: Star, label: 'MAX+ Status', value: 'Gold ab 160 Pkt', ok: true },
        ].map(({ Icon, label, value, ok }) => (
          <Card key={label} style={{ marginBottom: '10px', padding: '14px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '12px',
                  background: '#f1efe8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color="#1d1d1b" />
                </div>
                <div>
                  <p style={{ fontSize: '11px', color: '#888', fontWeight: 500 }}>{label}</p>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#1d1d1b' }}>{value}</p>
                </div>
              </div>
              <CheckCircle size={20} color="#2d7d4f" fill="#a8d3af" />
            </div>
          </Card>
        ))}

        <button
          onClick={() => { setStep(0); setDone(false) }}
          style={{
            width: '100%', marginTop: '4px',
            background: '#f1efe8', border: 'none', borderRadius: '16px', padding: '14px',
            fontSize: '13px', fontWeight: 600, color: '#888',
            cursor: 'pointer', fontFamily: 'Montserrat, sans-serif',
          }}>
          Erneut prüfen
        </button>
      </div>
    )
  }

  return (
    <div className="screen-enter" style={{ padding: '0 16px 16px' }}>
      <div style={{ padding: '56px 0 24px' }}>
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '2px', fontWeight: 500 }}>Dein persönlicher</p>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1d1d1b' }}>Tarif-Check</h1>
      </div>

      {/* Progress */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
        {steps.map((s, i) => (
          <div key={s} style={{ flex: 1 }}>
            <div style={{
              height: '4px', borderRadius: '99px',
              background: i <= step ? '#ec6726' : '#e5e5e5',
              transition: 'background 0.4s ease',
            }} />
            <p style={{
              fontSize: '10px', marginTop: '5px', fontWeight: 600,
              color: i <= step ? '#ec6726' : '#aaa',
              textAlign: 'center',
            }}>{s}</p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      {step === 0 && (
        <Card style={{ marginBottom: '12px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#1d1d1b', marginBottom: '4px' }}>
            Dein aktueller Vertrag
          </p>
          <p style={{ fontSize: '12px', color: '#888', marginBottom: '16px' }}>
            Wir haben deine Daten automatisch ausgelesen.
          </p>
          {[
            { label: 'Tarif', value: 'MAXstrom Komfort' },
            { label: 'Grundpreis', value: '€ 7,50 / Monat' },
            { label: 'Arbeitspreis', value: '29,8 ct / kWh' },
            { label: 'Laufzeit', value: 'Ohne Bindung' },
            { label: 'Seit', value: 'März 2024' },
          ].map(({ label, value }) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '10px 0', borderBottom: '1px solid #f5f5f5',
            }}>
              <span style={{ fontSize: '13px', color: '#888', fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#1d1d1b' }}>{value}</span>
            </div>
          ))}
        </Card>
      )}

      {step === 1 && (
        <Card style={{ marginBottom: '12px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#1d1d1b', marginBottom: '4px' }}>
            Dein Verbrauchsprofil
          </p>
          <p style={{ fontSize: '12px', color: '#888', marginBottom: '16px' }}>
            Basierend auf deinen Smart Meter Daten.
          </p>
          {[
            { label: 'Jahresverbrauch', value: '4.280 kWh' },
            { label: 'Tagesprofil', value: 'Abendlastig' },
            { label: 'Wochenend-Verbrauch', value: '−22% vs. Werktag' },
            { label: 'Peak-Zeit', value: 'Di 18–21 Uhr' },
            { label: 'Sparpotenzial', value: 'Mittel (ca. €68/J.)' },
          ].map(({ label, value }) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '10px 0', borderBottom: '1px solid #f5f5f5',
            }}>
              <span style={{ fontSize: '13px', color: '#888', fontWeight: 500 }}>{label}</span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#1d1d1b' }}>{value}</span>
            </div>
          ))}
        </Card>
      )}

      {step === 2 && (
        <Card style={{ background: '#f1ea75', marginBottom: '12px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#1d1d1b88', marginBottom: '8px' }}>
            EMPFEHLUNG
          </p>
          <p style={{ fontSize: '20px', fontWeight: 800, color: '#1d1d1b', marginBottom: '8px', lineHeight: 1.2 }}>
            Wechsle jetzt zum Flextarif
          </p>
          <p style={{ fontSize: '13px', color: '#1d1d1b99', lineHeight: 1.5, marginBottom: '14px' }}>
            Dein Verbrauchsprofil ist ideal für dynamische Preise.
            Ab Oktober 2026 kannst du bis zu <strong>€ 68/Jahr</strong> sparen.
          </p>
          <div style={{
            background: '#fff', borderRadius: '14px', padding: '12px 16px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span style={{ fontSize: '12px', color: '#888', fontWeight: 500 }}>Jetzt vormerken</span>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#ec6726' }}>Gratis & unverbindlich</span>
          </div>
        </Card>
      )}

      <button
        onClick={handleNext}
        style={{
          width: '100%',
          background: step === steps.length - 1 ? '#ec6726' : '#1d1d1b',
          border: 'none',
          borderRadius: '16px', padding: '16px',
          fontSize: '15px', fontWeight: 700, color: '#fff',
          cursor: 'pointer', fontFamily: 'Montserrat, sans-serif',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          transition: 'all 0.3s ease',
          boxShadow: step === steps.length - 1 ? '0 4px 24px rgba(236,103,38,0.45)' : 'none',
          transform: step === steps.length - 1 ? 'scale(1.02)' : 'scale(1)',
        }}>
        {step < steps.length - 1 ? 'Weiter' : '✓ Ergebnis anzeigen'}
        <ChevronRight size={18} />
      </button>
      {step === steps.length - 1 && (
        <p style={{
          textAlign: 'center', fontSize: '11px', color: '#aaa',
          marginTop: '10px', fontWeight: 500,
          animation: 'fadeIn 0.4s ease both',
        }}>
          Deine Analyse ist fertig
        </p>
      )}
    </div>
  )
}
