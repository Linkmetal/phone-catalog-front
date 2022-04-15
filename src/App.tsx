import { Route, Routes } from 'react-router-dom'

import { Home } from 'screens/Home'
import { globalStyles } from 'styles/stitches.config'

export const App = () => {
  globalStyles()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phones/:id" element={<div>Phone Detail</div>} />
    </Routes>
  )
}

export default App
