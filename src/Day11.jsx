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
       setArr([]);
       let time = 2000;
       for(let i = 0; i < props.num_of_childs; i++)
            {
                setTimeout(()=>{
                    setArr((prev)=> [...prev,images[i]]);
                },time += 1000);
            }
    },[props.num_of_childs]);

    return(
        <div className="container">
        <div className='loader'>{props.show && <Loader className = "loader"/>}</div>
        {!props.show && newarr.map((img,indx)=>{
            return <img key = {indx} src = {newarr[indx]} alt = {indx}/>
        })}
        </div>
    )
}
export default Day11