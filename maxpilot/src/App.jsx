import { useState } from 'react'
import BottomNav from './components/BottomNav'
import HomeScreen from './screens/HomeScreen'
import LoyaltyScreen from './screens/LoyaltyScreen'
import EnergyScreen from './screens/EnergyScreen'
import ElwgScreen from './screens/ElwgScreen'
import CheckScreen from './screens/CheckScreen'

const SCREENS = ['home', 'energy', 'loyalty', 'elwg', 'check']

export default function App() {
  const [screen, setScreen] = useState('home')

  const renderScreen = () => {
    const props = { onNavigate: setScreen, key: screen }
    switch (screen) {
      case 'home':     return <HomeScreen {...props} />
      case 'energy':   return <EnergyScreen {...props} />
      case 'loyalty':  return <LoyaltyScreen {...props} />
      case 'elwg':     return <ElwgScreen {...props} />
      case 'check':    return <CheckScreen {...props} />
      default:         return <HomeScreen {...props} />
    }
  }

  return (
    <div style={{ paddingBottom: '80px' }}>
      {renderScreen()}
      <BottomNav active={screen} onNavigate={setScreen} />
    </div>
  )
}
