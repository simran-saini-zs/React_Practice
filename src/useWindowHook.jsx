import './App.css'
import { useEffect, useState } from 'react'

function useWindowHook()
{
  const[w_size,setWsize] = useState(window.innerWidth);
  const[h_size,setHsize] = useState(window.innerHeight);
    
  useEffect(()=>{
    function resize()
    {
      setWsize(window.innerWidth);
      setHsize(window.innerHeight);
    }
    window.addEventListener("resize",resize)
    return ()=> window.removeEventListener("resize",resize)
  },[])

  return {w_size,h_size};

}
export default useWindowHook