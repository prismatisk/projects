import { Home, Zap, Gift, Leaf, CheckCircle } from 'lucide-react'

const tabs = [
  { id: 'home',    label: 'Start',    Icon: Home },
  { id: 'energy',  label: 'Energie',  Icon: Zap },
  { id: 'loyalty', label: 'MAX+',     Icon: Gift },
  { id: 'elwg',    label: 'Neu 2026', Icon: Leaf },
  { id: 'check',   label: 'Check',    Icon: CheckCircle },
]

export default function BottomNav({ active, onNavigate }) {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '390px',
      background: '#ffffff',
      borderTop: '1px solid #e5e5e5',
      display: 'flex',
      zIndex: 100,
      paddingBottom: 'env(safe-area-inset-bottom)',
    }}>
      {tabs.map(({ id, label, Icon }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 4px 8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isActive ? '#ec6726' : '#a0a0a0',
              transition: 'color 0.2s',
            }}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
            <span style={{
              fontSize: '10px',
              marginTop: '3px',
              fontWeight: isActive ? 700 : 500,
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '0.01em',
            }}>
              {label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
