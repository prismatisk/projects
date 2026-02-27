import { Gift, Star, ChevronRight, Coffee, ShoppingBag, Smartphone, Shield } from 'lucide-react'

const Card = ({ children, style = {} }) => (
  <div style={{ background: '#fff', borderRadius: '26px', padding: '20px', ...style }}>
    {children}
  </div>
)

const partners = [
  { name: 'Billa', category: 'Supermarkt', points: '200 Pkt = €2', Icon: ShoppingBag, color: '#f39b8c' },
  { name: 'A1', category: 'Mobilfunk', points: '500 Pkt = €5', Icon: Smartphone, color: '#d6eceb' },
  { name: 'Uniqa', category: 'Versicherung', points: '1000 Pkt = €10', Icon: Shield, color: '#a8d3af' },
  { name: 'Starbucks', category: 'Kaffee & Mehr', points: '150 Pkt = 1 Kaffee', Icon: Coffee, color: '#f1ea75' },
]

const milestones = [
  { label: 'Bronze', points: 500, done: true },
  { label: 'Silber', points: 1000, done: true },
  { label: 'Gold', points: 2000, done: false, current: true },
  { label: 'Platin', points: 5000, done: false },
]

export default function LoyaltyScreen() {
  const currentPoints = 1840
  const nextMilestone = 2000
  const progress = (currentPoints / nextMilestone) * 100

  return (
    <div className="screen-enter" style={{ padding: '0 16px 16px' }}>
      {/* Header */}
      <div style={{ padding: '56px 0 24px' }}>
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '4px', fontWeight: 500 }}>Dein Vorteilsprogramm</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#1d1d1b', letterSpacing: '-0.5px' }}>
            MAX<span style={{ color: '#ec6726' }}>+</span>
          </h1>
          <span style={{
            background: '#f1ea75', borderRadius: '99px',
            padding: '3px 10px',
            fontSize: '11px', fontWeight: 700, color: '#1d1d1b',
            letterSpacing: '0.04em',
          }}>SILBER</span>
        </div>
      </div>

      {/* Punkte-Karte */}
      <Card style={{ background: 'linear-gradient(145deg, #2a2a28 0%, #1d1d1b 100%)', marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#888', marginBottom: '4px', fontWeight: 500 }}>Deine Punkte</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '44px', fontWeight: 800, color: '#f1ea75', lineHeight: 1 }}>1.840</span>
              <span style={{ fontSize: '14px', color: '#888' }}>Pkt</span>
            </div>
          </div>
          <div style={{
            width: '56px', height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ec6726, #f1ea75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Star size={24} color="#fff" fill="#fff" />
          </div>
        </div>

        {/* Progress zu Gold */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', color: '#888', fontWeight: 500 }}>Silber</span>
            <span style={{ fontSize: '11px', color: '#ec6726', fontWeight: 700 }}>Gold in 160 Pkt</span>
          </div>
          <div style={{ background: '#333', borderRadius: '99px', height: '8px', overflow: 'hidden' }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #ec6726, #f1ea75)',
              borderRadius: '99px',
              transition: 'width 1s ease',
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
            <span style={{ fontSize: '10px', color: '#666' }}>1.000</span>
            <span style={{ fontSize: '10px', color: '#666' }}>2.000</span>
          </div>
        </div>
      </Card>

      {/* Punkte sammeln */}
      <Card style={{ marginBottom: '12px' }}>
        <p style={{ fontSize: '13px', fontWeight: 700, color: '#1d1d1b', marginBottom: '14px' }}>
          So sammelst du Punkte
        </p>
        {[
          { label: 'Vertragstreue', sub: 'Pro Monat', pts: '+50 Pkt', color: '#a8d3af' },
          { label: 'Verbrauch gesenkt', sub: 'vs. Vormonat', pts: '+30 Pkt', color: '#d6eceb' },
          { label: 'Freund werben', sub: 'Pro Empfehlung', pts: '+200 Pkt', color: '#f1ea75' },
          { label: 'Jahresrechnung bezahlt', sub: 'Einmalig', pts: '+100 Pkt', color: '#f39b8c' },
        ].map((item) => (
          <div key={item.label} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 0',
            borderBottom: '1px solid #f5f5f5',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: item.color, flexShrink: 0,
              }} />
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#1d1d1b' }}>{item.label}</p>
                <p style={{ fontSize: '11px', color: '#888' }}>{item.sub}</p>
              </div>
            </div>
            <span style={{
              background: '#f1efe8', borderRadius: '99px',
              padding: '4px 10px',
              fontSize: '12px', fontWeight: 700, color: '#ec6726',
            }}>
              {item.pts}
            </span>
          </div>
        ))}
      </Card>

      {/* Partner */}
      <p style={{ fontSize: '15px', fontWeight: 700, color: '#1d1d1b', marginBottom: '10px', paddingLeft: '4px' }}>
        Partner-Vorteile
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
        {partners.map(({ name, category, points, Icon, color }) => (
          <Card key={name} style={{ background: color, padding: '16px', cursor: 'pointer' }}>
            <Icon size={22} color="#1d1d1b" style={{ marginBottom: '10px' }} />
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#1d1d1b', marginBottom: '2px' }}>{name}</p>
            <p style={{ fontSize: '10px', color: '#1d1d1b99', marginBottom: '6px' }}>{category}</p>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#1d1d1b' }}>{points}</p>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <Card style={{ background: '#ec6726' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
              Freunde werben & 200 Punkte sichern
            </p>
            <p style={{ fontSize: '12px', color: '#ffffff99' }}>Dein persönlicher Empfehlungslink</p>
          </div>
          <ChevronRight size={20} color="#fff" />
        </div>
      </Card>
    </div>
  )
}
