import './App.css'
import React,{ createContext,useState } from 'react'

const ColorContext = createContext();

const ColorProvider = ({children})=>{
    const [color, setColor] = useState('#ff0000');

    const changecolor = () => {
      setColor(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`);
    };
    return (
       <>
       <ColorContext.Provider value = {{color,changecolor}}>
       {children}
       </ColorContext.Provider>
       </>
    );
};

export {ColorProvider,ColorContext};