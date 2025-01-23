// import './App.css'
// import './index.css'
import './modal.css'
import Modal from './modal.jsx'
import { useState } from 'react'
function App() {
  let [show,setShow] = useState(false);
  function handleclick()
  {
    setShow((prev)=>!prev);
  }
  return (
    <>
    <div className= "mainDiv">
    <button onClick = {handleclick} className='btn'>Show Content</button>
    {show && <Modal handleclick = {handleclick} className = 'modal'/>}
    </div>
    </>
  )
}

export default App
