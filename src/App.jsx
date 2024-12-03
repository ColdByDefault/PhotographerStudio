import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Service from './components/Service';
import OpenTimes from './components/OpenTimes';
import Contact from './components/Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <OpenTimes />
      <Contact />
    </>
  )
}

export default App
