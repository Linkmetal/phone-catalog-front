import { Route, Routes } from 'react-router-dom'

import { Home } from 'screens/Home'
import { PhoneDetail } from 'screens/PhoneDetail'
import { globalStyles } from 'styles/stitches.config'

export const App = () => {
  globalStyles()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phone/:id" element={<PhoneDetail />} />
    </Routes>
  )
}

export default App
