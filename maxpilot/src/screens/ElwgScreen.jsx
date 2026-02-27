import { useState } from 'react'
import { Zap, Users, ToggleLeft, ToggleRight, ChevronRight, CheckCircle, Info } from 'lucide-react'

const Card = ({ children, style = {} }) => (
  <div style={{ background: '#fff', borderRadius: '26px', padding: '20px', ...style }}>
    {children}
  </div>
)

const features = [
  {
    id: 'flex',
    icon: Zap,
    title: 'Flextarif',
    subtitle: 'Pflicht ab Oktober 2026',
    desc: 'Dein Strompreis passt sich stündlich dem Markt an. An günstigen Stunden sparst du bis zu 40%.',
    saving: '~€ 68/Jahr',
    color: '#f1ea75',
    badge: 'PFLICHT',
    badgeColor: '#ec6726',
  },
  {
    id: 'gea',
    icon: Users,
    title: 'Energiegemeinschaft',
    subtitle: 'Neu ab Oktober 2026',
    desc: 'Teile Strom mit Nachbarn, die PV-Anlagen haben. Günstiger, grüner, gemeinsam.',
    saving: '~€ 120/Jahr',
    color: '#a8d3af',
    badge: 'NEU',
    badgeColor: '#2d7d4f',
  },
]

export default function ElwgScreen({ onNavigate }) {
  const [flexActive, setFlexActive] = useState(false)
  const [activeFeature, setActiveFeature] = useState('flex')

  return (
    <div className="screen-enter" style={{ padding: '0 16px 16px' }}>
      <div style={{ padding: '56px 0 20px' }}>
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '2px', fontWeight: 500 }}>Elektrizitätswirtschaftsgesetz</p>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1d1d1b', lineHeight: 1.2 }}>
          Deine neuen<br />Möglichkeiten
        </h1>
      </div>

      {/* Timeline Badge */}
      <div style={{
        background: '#ec6726', borderRadius: '16px',
        padding: '14px 18px', marginBottom: '16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <p style={{ fontSize: '12px', color: '#ffffff99', marginBottom: '2px', fontWeight: 500 }}>In Kraft ab</p>
          <p style={{ fontSize: '20px', fontWeight: 800, color: '#fff' }}>Oktober 2026</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', color: '#ffffff99', marginBottom: '2px', fontWeight: 500 }}>Noch</p>
          <p style={{ fontSize: '20px', fontWeight: 800, color: '#fff' }}>~8 Monate</p>
        </div>
      </div>

      {/* Feature Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        {features.map(({ id, title, color }) => (
          <button
            key={id}
            onClick={() => setActiveFeature(id)}
            style={{
              flex: 1, border: 'none', borderRadius: '16px', padding: '10px',
              background: activeFeature === id ? '#1d1d1b' : '#fff',
              color: activeFeature === id ? '#fff' : '#888',
              fontSize: '13px', fontWeight: 700,
              cursor: 'pointer', fontFamily: 'Montserrat, sans-serif',
              transition: 'all 0.2s',
            }}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Feature Detail */}
      {features.filter(f => f.id === activeFeature).map(({ id, icon: Icon, title, subtitle, desc, saving, color, badge, badgeColor }) => (
        <Card key={id} style={{ background: color, marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '14px',
              background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={22} color="#1d1d1b" />
            </div>
            <span style={{
              background: badgeColor, color: '#fff',
              borderRadius: '99px', padding: '4px 10px',
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em',
            }}>
              {badge}
            </span>
          </div>
          <p style={{ fontSize: '11px', color: '#1d1d1b88', fontWeight: 600, marginBottom: '4px' }}>{subtitle}</p>
          <p style={{ fontSize: '18px', fontWeight: 800, color: '#1d1d1b', marginBottom: '8px' }}>{title}</p>
          <p style={{ fontSize: '13px', color: '#1d1d1b99', lineHeight: 1.5, marginBottom: '14px' }}>{desc}</p>
          <div style={{
            background: '#fff', borderRadius: '14px', padding: '10px 14px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#888' }}>Dein Sparpotenzial</span>
            <span style={{ fontSize: '16px', fontWeight: 800, color: '#1d1d1b' }}>{saving}</span>
          </div>
        </Card>
      ))}

      {/* Flextarif Opt-in */}
      {activeFeature === 'flex' && (
        <Card>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#1d1d1b', marginBottom: '4px' }}>
            Flextarif aktivieren
          </p>
          <p style={{ fontSize: '12px', color: '#888', marginBottom: '16px', lineHeight: 1.5 }}>
            Ab Oktober verfügbar. Jetzt vormerken und als Erster profitieren.
          </p>

          {/* Simulation */}
          <div style={{ background: '#f1efe8', borderRadius: '16px', padding: '14px', marginBottom: '16px' }}>
            <p style={{ fontSize: '11px', color: '#888', fontWeight: 600, marginBottom: '8px' }}>
              SIMULATION LETZTER MONAT
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '11px', color: '#888' }}>Normaltarif</p>
                <p style={{ fontSize: '18px', fontWeight: 800, color: '#1d1d1b' }}>€ 48,20</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '11px', color: '#888' }}>&nbsp;</p>
                <p style={{ fontSize: '24px', color: '#888' }}>→</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '11px', color: '#2d7d4f', fontWeight: 600 }}>Flextarif</p>
                <p style={{ fontSize: '18px', fontWeight: 800, color: '#2d7d4f' }}>€ 39,40</p>
              </div>
            </div>
            <div style={{
              marginTop: '8px', background: '#a8d3af',
              borderRadius: '10px', padding: '6px 12px', textAlign: 'center',
            }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1d1d1b' }}>
                Du hättest € 8,80 gespart (−18%)
              </span>
            </div>
          </div>

          <button
            onClick={() => setFlexActive(!flexActive)}
            style={{
              width: '100%',
              border: flexActive ? 'none' : '2px solid #ec672644',
              cursor: 'pointer',
              borderRadius: '16px', padding: '16px',
              background: flexActive ? '#1d1d1b' : '#fff',
              transition: 'all 0.3s ease',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontFamily: 'Montserrat, sans-serif',
              boxShadow: flexActive ? 'none' : '0 2px 12px rgba(236,103,38,0.12)',
            }}>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '15px', fontWeight: 700, color: flexActive ? '#fff' : '#ec6726', transition: 'color 0.3s' }}>
                {flexActive ? '✓ Vorgemerkt!' : 'Jetzt vormerken →'}
              </p>
              <p style={{ fontSize: '11px', color: flexActive ? '#ffffff88' : '#ec672299', transition: 'color 0.3s', marginTop: '2px' }}>
                {flexActive ? 'Wir melden uns im September' : 'Gratis & unverbindlich · Ab Oktober aktiv'}
              </p>
            </div>
            <div style={{
              width: '52px', height: '30px', borderRadius: '99px',
              background: flexActive ? '#ec6726' : '#f1efe8',
              position: 'relative', transition: 'background 0.3s ease',
              flexShrink: 0,
              border: flexActive ? 'none' : '2px solid #ec672633',
            }}>
              <div style={{
                position: 'absolute', top: '3px',
                left: flexActive ? '23px' : '3px',
                width: '24px', height: '24px', borderRadius: '50%',
                background: flexActive ? '#fff' : '#ec6726',
                transition: 'left 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s',
                boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
              }} />
            </div>
          </button>
        </Card>
      )}

      {/* GEA Map Placeholder */}
      {activeFeature === 'gea' && (
        <Card>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#1d1d1b', marginBottom: '14px' }}>
            Energiegemeinschaften in deiner Nähe
          </p>
          <div style={{
            background: '#d6eceb', borderRadius: '18px',
            height: '160px', marginBottom: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '8px',
          }}>
            <div style={{ fontSize: '32px' }}>🗺️</div>
            <p style={{ fontSize: '12px', color: '#888', fontWeight: 500 }}>Karte · Graz & Umgebung</p>
            <div style={{
              background: '#ec6726', borderRadius: '99px',
              padding: '4px 12px',
            }}>
              <span style={{ fontSize: '11px', color: '#fff', fontWeight: 700 }}>
                3 Gemeinschaften in 2 km
              </span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('check')}
            style={{
              width: '100%', background: '#1d1d1b', border: 'none',
              borderRadius: '16px', padding: '14px',
              fontSize: '14px', fontWeight: 700, color: '#fff',
              cursor: 'pointer', fontFamily: 'Montserrat, sans-serif',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}>
            Jetzt beitreten
            <ChevronRight size={16} />
          </button>
        </Card>
      )}
    </div>
  )
}
