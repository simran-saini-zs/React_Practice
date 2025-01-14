import { useEffect,useState } from "react";
import './App.css'

function Practice_useeffect()
{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("hi"); //if I do not give dependency array, then it will run function on each new render i.e whenever any of the state variable changes. if we give dependency array then it will run function when any of the state variable present in dependency array changes
        //optionall return function: destroyes the useeffect and creates it again with new value
        return (()=>{
            console.log("destroyed!"); //useful when you have timeouts, you should clean them using return statement
        })
       
    },[count]) 
    return (
        <>
        <h1>Count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </>
    )
}

export default Practice_useeffect
