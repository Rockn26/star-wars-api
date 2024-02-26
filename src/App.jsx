import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main/Main'
import { useState } from 'react'
import StarshipPage from './pages/StarshipPage'


function App() {
  const [selectedStarship , setSelectedStarship] = useState({})

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main  setSelectedStarship={setSelectedStarship} />} />
        <Route path={`/${selectedStarship.name}`} element={<StarshipPage starship={selectedStarship} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
