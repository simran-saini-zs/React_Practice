import { useRef, useState } from 'react'
import './App.css'

function Form()
{
    let [isname,setIsname] = useState(true);
    let [isemail,setEmail] = useState(true);
    let nameref = useRef();
    let emailref = useRef();
    function handleclick(event)
    {
        event.preventDefault();
        if(nameref.current.value.search(/[1-9/]/) == -1 && emailref.current.value != "" && nameref.current.value != "")
        {
            console.log(nameref.current.value);
            console.log(emailref.current.value);
            if(emailref.current.value != "")
            {
                setEmail(false);
            }
            setIsname(false);
        }
    }
    return (
        <div>
            <form action="">
                <input type="text" placeholder='Name' ref = {nameref}/>
                {isname && nameref.current.value == "" &&<span><p>Please enter your Name</p></span>}
                {isname && nameref.current.value != "" && <span><p>Please Don't Enter numeric Values</p></span>}
                <input type="email" name="" id="" placeholder='Email' ref = {emailref}/>
                {isemail && <span><p>Please enter Your Email</p></span>}
                <button onClick={handleclick}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form