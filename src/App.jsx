import { useState } from 'react'
import ExemploFlex from './components/DisplayFlex'
import FlexDirection from './components/FlexDirection'
import JustifyAlignExample from './components/JutifyAlign'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <JustifyAlignExample />
    </>
  )
}

export default App
