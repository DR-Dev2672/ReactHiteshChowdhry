import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-red-600  flex justify-center p-16 m-16'>Hii this is mini context </h1>
    </>
  )
}

export default App
