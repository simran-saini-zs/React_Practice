import './App.css'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import './Component.css'

const Component3 = ()=>{
   let {theme,handleTheme} = useContext(ThemeContext);
   return(
    <div  className = {theme == "white"? "white":"black"}>
        <button onClick={handleTheme}>Toggle Theme</button>
    </div>
   )
}
export default Component3