import './App.css'
import Day11 from './Day11.jsx'
import { useState } from 'react'
import './AssignmentReact.css'
function AssignmentReact()
{
    const [num,setnum] = useState(0);
    const [container,setcontainer] = useState(0);
    
    function handleclick()
    {
        if(num >= 0 && num <= 6)
        {
            setcontainer(num);
        }
        else
        {
            setcontainer(-1);
        }
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
            {<Day11 num_of_childs = {container}/>}
        </div>
    )
}
export default AssignmentReact