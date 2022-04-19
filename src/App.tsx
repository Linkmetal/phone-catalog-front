import { Route, Routes } from 'react-router-dom'
import { darkTheme, globalStyles } from 'styles/stitches.config'

import { Home } from 'screens/Home'
import { PhoneDetail } from 'screens/PhoneDetail'
import { useCookieState } from 'ahooks'

export const App = () => {
  globalStyles()
  const [isDarkThemeSetted] = useCookieState('darkTheme', { defaultValue: 'false' })

  return (
    <div id="darkThemeContainer" className={isDarkThemeSetted === 'true' ? darkTheme : ''}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone/:id" element={<PhoneDetail />} />
      </Routes>
    </div>
  )
}

export default App
