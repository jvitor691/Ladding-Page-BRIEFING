import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustbar from './components/Trustbar'
import Produtos from './components/Produtos'
import Diferencial from './components/Diferencial'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Trustbar />
      <Produtos />
      <Diferencial />

    </>
  )
}

export default App;
