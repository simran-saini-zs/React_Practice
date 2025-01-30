import './App.css'
import { useCallback,useEffect,useState } from 'react'
import ExampleChild from './ExampleChild.jsx'
function Example()
{
   const [count,setcount] = useState(0);
   const [count2,setcount2] = useState(0);

   const handleclick = useCallback(()=>{
     console.log(count2);
     setcount2((prev)=>prev+1);
   },[])

   useEffect(()=>{
    console.log("Hi, this function is different!");
   },[handleclick])
   let desst = [handleclick,number]
   return (
    <div>
        <div className="component1" style = {{backgroundColor : "beige", height : "200px",width: "200px"}}>
            <h2>Parent Component</h2>
            <h2>{count}</h2>
            <button onClick={()=>setcount(count+1)}>Increment</button>
        </div>
        
        <div className="component2" style = {{backgroundColor : "pink", height : "200px",width: "200px"}}>
            <ExampleChild props = {desst}/>
        </div>
    </div>
   )
}
export default Example