import { Zap, Gift, Leaf, TrendingDown, ChevronRight, Bell } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from 'recharts'

const weekData = [
  { day: 'Mo', kwh: 14.2 },
  { day: 'Di', kwh: 15.1 },
  { day: 'Mi', kwh: 12.8 },
  { day: 'Do', kwh: 11.4 },
  { day: 'Fr', kwh: 13.7 },
  { day: 'Sa', kwh: 9.2 },
  { day: 'So', kwh: 8.6 },
]

const Card = ({ children, style = {} }) => (
  <div style={{
    background: '#fff',
    borderRadius: '26px',
    padding: '20px',
    ...style
  }}>
    {children}
  </div>
)

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="screen-enter" style={{ padding: '0 16px 16px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '56px 0 24px',
      }}>
        <div>
          <p style={{ fontSize: '13px', color: '#888', marginBottom: '2px', fontWeight: 500 }}>
            Guten Morgen,
          </p>
          <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#1d1d1b', lineHeight: 1.2 }}>
            Bernd 👋
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button style={{
            background: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            <Bell size={18} color="#1d1d1b" />
          </button>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#ec6726',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800,
            fontSize: '16px',
          }}>
            B
          </div>
        </div>
      </div>

      {/* Haupt-Verbrauchskarte */}
      <Card style={{ background: 'linear-gradient(145deg, #2a2a28 0%, #1d1d1b 100%)', marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#888', marginBottom: '4px', fontWeight: 500 }}>
              Verbrauch diese Woche
            </p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '36px', fontWeight: 800, color: '#fff' }}>84,9</span>
              <span style={{ fontSize: '16px', color: '#888', fontWeight: 500 }}>kWh</span>
            </div>
          </div>
          <div style={{
            background: '#a8d3af22',
            borderRadius: '12px',
            padding: '6px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <TrendingDown size={14} color="#a8d3af" />
            <span style={{ fontSize: '12px', color: '#a8d3af', fontWeight: 700 }}>−8%</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={80}>
          <AreaChart data={weekData} margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec6726" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ec6726" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fill: '#666', fontSize: 10, fontFamily: 'Montserrat' }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: '#2a2a28', border: 'none', borderRadius: '12px', fontSize: '12px', color: '#fff' }}
              formatter={(v) => [`${v} kWh`, '']}
            />
            <Area type="monotone" dataKey="kwh" stroke="#ec6726" strokeWidth={2.5} fill="url(#grad)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
        <p style={{ fontSize: '11px', color: '#666', marginTop: '8px', fontWeight: 500 }}>
          Jahresprognose: <span style={{ color: '#fff' }}>4.280 kWh</span> · Ziel: 4.400 kWh ✓
        </p>
      </Card>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
        <Card style={{ background: '#f1ea75' }}>
          <Gift size={20} color="#1d1d1b" style={{ marginBottom: '8px' }} />
          <p style={{ fontSize: '11px', color: '#1d1d1b88', fontWeight: 600, marginBottom: '2px' }}>MAX+ Punkte</p>
          <p style={{ fontSize: '26px', fontWeight: 800, color: '#1d1d1b', lineHeight: 1 }}>1.840</p>
          <p style={{ fontSize: '10px', color: '#1d1d1b99', marginTop: '4px', fontWeight: 500 }}>+120 diese Woche</p>
        </Card>
        <Card style={{ background: '#d6eceb' }}>
          <Leaf size={20} color="#1d1d1b" style={{ marginBottom: '8px' }} />
          <p style={{ fontSize: '11px', color: '#1d1d1b88', fontWeight: 600, marginBottom: '2px' }}>Ökostrom</p>
          <p style={{ fontSize: '26px', fontWeight: 800, color: '#1d1d1b', lineHeight: 1 }}>100%</p>
          <p style={{ fontSize: '10px', color: '#1d1d1b99', marginTop: '4px', fontWeight: 500 }}>AT Wasserkraft</p>
        </Card>
      </div>

      {/* Empfehlung */}
      <Card style={{ background: '#ec6726' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1, paddingRight: '12px' }}>
            <div style={{
              background: '#ffffff33',
              borderRadius: '8px',
              padding: '3px 8px',
              display: 'inline-block',
              marginBottom: '8px',
            }}>
              <span style={{ fontSize: '10px', color: '#fff', fontWeight: 700, letterSpacing: '0.05em' }}>
                NEU AB OKTOBER 2026
              </span>
            </div>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '6px' }}>
              Flextarif aktivieren & bis zu 18% sparen
            </p>
            <p style={{ fontSize: '12px', color: '#ffffff99', fontWeight: 500 }}>
              Basierend auf deinem Verbrauchsmuster
            </p>
          </div>
          <button
            onClick={() => onNavigate('elwg')}
            style={{
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <ChevronRight size={18} color="#ec6726" />
          </button>
        </div>
      </Card>
    </div>
  )
}
