import './App.css'
import { createContext,useState } from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import ThemeContext from './ThemeContext'
import SideBar from './SideBar'
import './Component.css'
function App() {
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
//        <SideBar /> SIDEBAR AND TOOLTIP
     
    </ThemeContext.Provider>
   </div>
   </div>
    </>
  )
}
export default App