import { Zap, TrendingDown, Droplets, Sun, Mountain, ChevronRight } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts'

const monthData = [
  { month: 'Aug', kwh: 310 },
  { month: 'Sep', kwh: 340 },
  { month: 'Okt', kwh: 390 },
  { month: 'Nov', kwh: 420 },
  { month: 'Dez', kwh: 480 },
  { month: 'Jän', kwh: 460 },
  { month: 'Feb', kwh: 380, current: true },
]

const sources = [
  { label: 'Wasserkraft', pct: 68, Icon: Droplets, color: '#d6eceb' },
  { label: 'Wind', pct: 22, Icon: Mountain, color: '#a8d3af' },
  { label: 'Solar', pct: 10, Icon: Sun, color: '#f1ea75' },
]

const Card = ({ children, style = {} }) => (
  <div style={{ background: '#fff', borderRadius: '26px', padding: '20px', ...style }}>
    {children}
  </div>
)

export default function EnergyScreen({ onNavigate }) {
  return (
    <div className="screen-enter" style={{ padding: '0 16px 16px' }}>
      <div style={{ padding: '56px 0 24px' }}>
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '2px', fontWeight: 500 }}>Dein Energieüberblick</p>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1d1d1b' }}>Energie</h1>
      </div>

      {/* Jahresverbrauch */}
      <Card style={{ background: 'linear-gradient(145deg, #2a2a28 0%, #1d1d1b 100%)', marginBottom: '12px' }}>
        <p style={{ fontSize: '12px', color: '#888', marginBottom: '4px', fontWeight: 500 }}>Jahresprognose 2026</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
          <span style={{ fontSize: '40px', fontWeight: 800, color: '#fff', lineHeight: 1 }}>4.280</span>
          <span style={{ fontSize: '16px', color: '#888' }}>kWh</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
          <TrendingDown size={14} color="#a8d3af" />
          <span style={{ fontSize: '12px', color: '#a8d3af', fontWeight: 600 }}>
            120 kWh unter Vorjahr · Du sparst ~€ 38
          </span>
        </div>
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={monthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="month" tick={{ fill: '#666', fontSize: 10, fontFamily: 'Montserrat' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#555', fontSize: 9 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: '#2a2a28', border: 'none', borderRadius: '12px', fontSize: '12px', color: '#fff' }}
              formatter={(v) => [`${v} kWh`, '']}
            />
            <Bar dataKey="kwh" radius={[6, 6, 0, 0]}
              fill="#444"
              shape={(props) => {
                const { x, y, width, height, current } = props
                return <rect x={x} y={y} width={width} height={height} rx={6} ry={6} fill={props.current ? '#ec6726' : '#333'} />
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Herkunft */}
      <Card style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#1d1d1b' }}>Herkunftsnachweis</p>
          <span style={{
            background: '#a8d3af33', borderRadius: '99px',
            padding: '4px 10px',
            fontSize: '11px', fontWeight: 700, color: '#2d7d4f',
          }}>100% Österreich</span>
        </div>
        {sources.map(({ label, pct, Icon, color }) => (
          <div key={label} style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '8px',
                  background: color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={14} color="#1d1d1b" />
                </div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#1d1d1b' }}>{label}</span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#1d1d1b' }}>{pct}%</span>
            </div>
            <div style={{ background: '#f1efe8', borderRadius: '99px', height: '6px', overflow: 'hidden' }}>
              <div style={{
                width: `${pct}%`, height: '100%',
                background: color,
                borderRadius: '99px',
              }} />
            </div>
          </div>
        ))}
        <button style={{
          width: '100%', marginTop: '4px',
          background: '#f1efe8', border: 'none', borderRadius: '16px',
          padding: '12px', cursor: 'pointer',
          fontSize: '12px', fontWeight: 600, color: '#1d1d1b',
          fontFamily: 'Montserrat, sans-serif',
        }}>
          Zertifikat herunterladen (PDF)
        </button>
      </Card>

      {/* Spartipp */}
      <Card style={{ background: '#a8d3af' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#1d1d1b88', marginBottom: '4px', letterSpacing: '0.05em' }}>
              MAX PILOT TIPP
            </p>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#1d1d1b', lineHeight: 1.3, marginBottom: '4px' }}>
              Dienstag: 40% mehr Verbrauch als üblich
            </p>
            <p style={{ fontSize: '12px', color: '#1d1d1b88' }}>Waschmaschine auf Mitternacht verschieben?</p>
          </div>
          <button
            onClick={() => onNavigate('elwg')}
            style={{
              background: '#fff', border: 'none', borderRadius: '50%',
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', flexShrink: 0, marginLeft: '12px',
            }}>
            <ChevronRight size={18} color="#1d1d1b" />
          </button>
        </div>
      </Card>
    </div>
  )
}
