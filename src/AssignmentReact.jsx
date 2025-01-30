import './App.css'
import Day11 from './Day11.jsx'
import { useState } from 'react'
import './AssignmentReact.css'


function AssignmentReact()
{
    const [showcontent,setcontent] = useState(false);
    const [num,setnum] = useState(0);
    const [container,setcontainer] = useState();
    
    function handleclick()
    {
        if(num <=6 && num >= 0)
        {
            setcontainer(num);
            setcontent(true);
        }
        else
        {
            setcontainer(-1);
        }
        setTimeout(()=>{
            setcontent(false);
          },2000)
    }
    function handlechange(eve)
    {
        setnum(eve.target.value);
        setcontainer(0);
    }
    return (
        <div className='outer-cont'>
            <div className="inner-cont">
            <input type="number" value = {num} onChange={handlechange} className='input'/>
            <div className='error-cont'> {(container == -1) &&  <p className='error'>Error: Please Enter number between 0 to 6</p>}</div>
            <button onClick={handleclick} className='roll'>Roll</button>
            </div>
            <Day11 num_of_childs = {container} show = {showcontent}/>
        </div>
    )
}
export default AssignmentReact