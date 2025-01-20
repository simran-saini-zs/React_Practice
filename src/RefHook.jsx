import './App.css'
import { useEffect, useRef,useState } from 'react'

function RefHook()
{
    const ref = useRef(null);
    const [size,setSize] = useState(0);
    useEffect(()=>{
        setSize(ref.current.clientWidth);
    })
    window.onresize = ()=>{
        setSize(ref.current.clientWidth);
    }
    return {ref,size};
}
export default RefHook