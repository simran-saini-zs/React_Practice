import './assignment.css'
import { useEffect, useReducer, useRef, useContext } from 'react';
import { ColorContext } from './ColorContext';

function reducer(state, action) {
    switch (action.type) {
        case "Increment": return state + 1
        case "Decrement": return state - 1
        case "Reset": return 0
    }
}

function Assignment() {
    const [count, dispatch] = useReducer(reducer, 0);
    const xyz = useRef();
    const { color, changecolor } = useContext(ColorContext);
    useEffect(() => {
        xyz.current.scrollIntoView();
        xyz.current.style.height = '100vh';
        // xyz.current.style.backgroundColor = color;
    })
    return (
        <>
            <div className='upperPart'></div>
            <div ref={xyz} className='container' onDoubleClick={changecolor} style={{ backgroundColor: color,width:'100vw'}}>
                <h1>Color: {color}</h1>
                <h2>{count}</h2>
                <div onDoubleClick={(event) => { event.stopPropagation() }}>
                    <button onClick={() => { dispatch({ type: "Increment" }) }} >Increment</button>
                    <button onClick={() => { dispatch({ type: "Reset" }) }}>Reset</button>
                    <button onClick={() => { dispatch({ type: "Decrement" }) }}>Decrement</button>
                </div>
            </div>
        </>
    )
}
export default Assignment