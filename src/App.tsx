import { Route, Routes } from 'react-router-dom'

import Home from 'screens/Home/Home'
import { globalStyles } from 'styles/stitches.config'

export const App = () => {
  globalStyles()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<div>List</div>} />
      <Route path="about" element={<div>About</div>} />
    </Routes>
  )
}

export default App
