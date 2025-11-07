import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="bg-gray-50 min-h-screen flex flex-col font-sans text-neutral">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </main>
      </div>
  )
}

export default App
