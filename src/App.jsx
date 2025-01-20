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
import Test from "./react-test.jsx"

function App() {
  let desc = "As a college student, much of your time will be spent interacting with texts of all types, shapes, sizes, and delivery methods. Sound interesting? Oh, it is. In the following sections, we’ll explore the nature of texts, what they will mean to you, and how to explore and use them effectively";
  let title = "Title";
  return (
    <>
    <ColorProvider>
    <Test source = {reactLogo} title = {title} desc = {desc}/>
    </ColorProvider>
    </>
  )
}

export default App
