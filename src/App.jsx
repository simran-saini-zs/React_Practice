import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment from "./Assignment.jsx"
import { ColorProvider } from './ColorContext.jsx'

function App() {
  return (
    <>
     <ColorProvider>
     <Assignment/>
     </ColorProvider>
    </>
  )
}

export default App
