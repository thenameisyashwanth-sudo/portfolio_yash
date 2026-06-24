import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VeinFusionNet from './pages/VeinFusionNet'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/vein-fusion-net" element={<VeinFusionNet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
