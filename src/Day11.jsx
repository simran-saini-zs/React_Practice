import './App.css'
import './AssignmentReact.css'
import fifth from './assets/fifth.png'
import fourth from './assets/fourth.png'
import three from './assets/three.png'
import two from './assets/two.png'
import one from './assets/one.png'
import sixth from './assets/sixth.png'
import { useEffect, useState } from 'react'
import Loader from './Loader.jsx'

let images = [one,two,three,fourth,fifth,sixth]

function Day11(props)
{
    const [newarr,setArr] = useState([]);

    useEffect(()=>{
    for(let i = 0; i < props.num_of_childs; i++)
    {
        console.log("hiii")
        setTimeout(()=>{
            console.log("num=",i);
            console.log("ele =",images[i]);
            setArr((prev)=> [...prev,images[i]]);
        },i*1000);
    }
   },[])

    return(
        <div className="container">
        
        {newarr.map((img,indx)=>{
            <img key = {indx} src = {img} alt = {indx}/>
        })}
        </div>
    )
}
export default Day11