
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createContext,useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import ThemeContext from './ThemeContext'
import SideBar from './SideBar'
import './Component.css'
import './modal.css'
import './index.css'
import Modal from './modal.jsx'
import { useState } from 'react'
import Accordion from './Accordion.jsx'
import AssignmentReact from './AssignmentReact.jsx'
import Example from './Example.jsx'
import ReactDOM from "react-dom"
import {ColorProvider} from "./ColorContext.jsx"
import Test from "./react-test.jsx"


function App() {
  
  //MODAL
//    let [show,setShow] = useState(false);
//   function handleclick()
//   {
//     setShow((prev)=>!prev);
//   }
  
  
  
  //ACCORDION:
//    let arr = [
//     { heading: "HTML", content: "abc" },
//     { heading: "CSS", content: "abdfkdfdfdfjc" },
//     { heading: "JS", content: "ab45555c" },
//   ];
  
 //PROPS ASSIGNMENT:
//    let desc = "As a college student, much of your time will be spent interacting with texts of all types, shapes, sizes, and delivery methods. Sound interesting? Oh, it is. In the following sections, we’ll explore the nature of texts, what they will mean to you, and how to explore and use them effectively";
//   let title = "Title";
  
  let [theme,setTheme] = useState('black');
  function handleTheme()
  {
    setTheme((prev)=>prev == "black"? "white":"black");
  }
  console.log(theme);
  return (
    <>
   <div  className = {theme == "white"? "white outer-cont":"black outer-cont"}>
   <button onClick={handleTheme}>ToggleTheme</button>
   <div className='cont'>
   <ThemeContext.Provider value = {{theme,handleTheme}}>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
//SIDEBAR AND TOOLTIP:
//        <SideBar /> 
     
     
//MODAL:
//     <div className= "mainDiv">
//     <button onClick = {handleclick} className='btn'>Show Content</button>
//     {show && <Modal handleclick = {handleclick} className = 'modal'/>}
//     </div>
     
     
     
//ACCORDION:
//   <div className="container">
//         {arr.map((ele, idx) => {
//           return (
//             <Accordion
//               key={idx}
//               heading={ele["heading"]}
//               content={ele["content"]}
//             />
//           );
//         })}
//       </div>
     
     
     
//DICES PART 2 and 3:
//       <AssignmentReact/>

//useCallback:
//        <div>
//        <Example/>
//     </div>
     
     
//PROPS ASSIGNMENT:
//      <ColorProvider>
//     <Test source = {reactLogo} title = {title} desc = {desc}/>
//     </ColorProvider>
    </ThemeContext.Provider>
   </div>
   </div>
    </>
  );
}
export default App