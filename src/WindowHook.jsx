import './App.css'
import { useState } from 'react'

function WindowHook()
{
   
  const[w_size,setWsize] = useState(window.innerWidth);
  const[h_size,setHsize] = useState(window.innerHeight);
    
  window.onresize = ()=>{
    setWsize(window.innerWidth);
    setHsize(window.innerHeight);
  }
    
  return {w_size,h_size};

}
export default WindowHook