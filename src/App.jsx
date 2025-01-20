import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment from "./Assignment.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom"
import {ColorProvider} from "./ColorContext.jsx"
import Counter from './Counter.jsx'
import Form from './Form.jsx'
import Problem1 from './Problem1SetTimeOut.jsx'
import WindowHook from './WindowHook.jsx'
import MountedHook from './MountedHook.jsx'
import RefHook from './RefHook.jsx'
function App() {
  let {w_size,h_size} = WindowHook();
  let {ismount} = MountedHook();
  console.log(ismount);
  let {ref,size} = RefHook();
  return (
    <>
    <ColorProvider>
    <div>
        <h1>Screen Size = {w_size*h_size}</h1>
        <h2>Height = {h_size}</h2> 
        <h2>Width = {w_size}</h2>
        {ismount && <h3>Hi</h3>}
        <div ref ={ref}>This is to show RefHook {size}</div>
    </div>
    </ColorProvider>
    </>
  )
}

export default App
