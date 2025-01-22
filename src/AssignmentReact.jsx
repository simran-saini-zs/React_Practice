import './App.css'
import Day11 from './Day11.jsx'
import { useState } from 'react'
import './AssignmentReact.css'


function AssignmentReact()
{
    const [showcontent,setcontent] = useState(false);
    const [num,setnum] = useState(0);
    const [container,setcontainer] = useState(0);
    
    function handleclick()
    {
        setcontainer(num);
        setnum(0);
        if(num <=6 && num >= 0)
        {
            setcontent(true);
        }
        setTimeout(()=>{
            setcontent(false);
          },2000)
    }
    function handlechange(eve)
    {
        setnum(eve.target.value);
    }
    return (
        <div className='outer-cont'>
            <div className="inner-cont">
            <input type="number" value = {num} onChange={handlechange} className='input'/>
            <div className='error-cont'> {(container < 0 || container > 6) &&  <p className='error'>Error: Please Enter number between 0 to 6</p>}</div>
            <button onClick={handleclick} className='roll'>Roll</button>
            </div>
            <Day11 num_of_childs = {container} show = {showcontent}/>
        </div>
    )
}
export default AssignmentReact