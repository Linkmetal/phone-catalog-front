import './App.css'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/list" element={<div>List</div>} />
      <Route path="about" element={<div>About</div>} />
    </Routes>
  )
}

export default App
