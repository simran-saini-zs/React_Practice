import './App.css'
import './Button.css'
import { useState } from 'react';
// let moved = 0;
// function handleevent(event)
// {
//    if(event.target.className != "clicked" && moved < 4)
//    {
//     event.target.className = "clicked";
//     console.log(event.target.className);
//     moved++;
//     console.log(moved);
//    }
//    else
//    {
//     if(event.target.className == "clicked")
//     {
//         alert("Please click any other button!");
//     }
//     else
//     {
//         alert("Only 4 clicks are allowed");
//     }
//    }
//    console.log("event = ",event.target.className)
 
//    btn_array.forEach((elments)=>{
//        console.log(elments.props["className"]);
//    })
// }


// const btn_array = addButton(9);

// function addButton(num)
// {
//    let btn_arr = [];
//    for(let i = 0; i < num;i++)
//    {
//      btn_arr.push(<button className="btn" key = {i+1} onClick={handleevent}>Button {i+1}</button>);
//    }
//    return btn_arr;
// }


// console.log(addButton(9));

let btn_num = 9;
let move = 0;
let clicked_arr = [];


function Button(){
    const [clickedbtn,setBtn] = useState(Array(btn_num).fill(false));
    let count = 1000;
    
    function resetcolor(reset_arr)
    {
        for(let i = reset_arr.length-1; i >= -1; i--)
        {
            let index = reset_arr[i];
            setTimeout(()=>{
                setBtn([...clickedbtn,clickedbtn[index] = false]);
                if(i == -1)    move = 0;
            },count);
            count += 500;
        }
    }

    function handleclick(index)
    {
        if(move<4)
        {
            console.log(move);
            move++;
            clickedbtn[index] = true;
            clicked_arr.push(index);
            setBtn([...clickedbtn,clickedbtn[index] = true]);
            if(move == 3)
            {
                // alert("Exceed the move, wait for 1 second to restart the game");
                let reset_arr = clicked_arr;
                setTimeout(() => {
                resetcolor(reset_arr)
                }, 3000);
                clicked_arr = [];
            }
        }
    }
    return(
       <div className='container'>
       {[...Array(btn_num)].map((ele,index)=>{
           return (<button key = {index} style = {{backgroundColor : clickedbtn[index]? 'pink':'blue'}} onClick = {()=>{if(!clickedbtn[index]) handleclick(index)} }>Button {index+1} </button>)
       })}
       </div>
    )
} 
export default Button