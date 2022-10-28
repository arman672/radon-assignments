import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Part1 from './Part1'
import Part2 from './Part2'

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/part1' element={<Part1 />} />
          <Route path='/part2' element={<Part2 />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App