
import './App.css'
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
     
     
     
//DICES PART 2:
//       <AssignmentReact/>
    </ThemeContext.Provider>
   </div>
   </div>
    </>
  );
}
export default App