import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Projects from './Components/Projects.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [view, setView] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900">
      <header className="p-4 shadow-md bg-white flex justify-center">
        <h1 className="text-5xl font-bold">Matthew Wons</h1>
      </header>

      <Navbar view={view} setView={setView} />

      {view === 'home' ? <div><Home setView={setView} /></div> : view === 'contact' ? <div><Contact /></div> : view === 'projects' ? <Projects /> : null}
    </div>
  )
}

export default App
