import { useRef, useState } from 'react'
import './App.css'

const Problem1 = ()=>{
    const [state,setState]= useState(0);

    const increment = (prev)=>{
        setTimeout(()=>{
            setState(prev => prev+1);
        },3000);
    }
    console.log(state);

    return(
        <div className = "problem">
            <h1>{state}</h1>
            <button onClick={increment}>Click</button>
        </div>
    
    )
}
export default Problem1