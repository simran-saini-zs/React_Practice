import './App.css'
import './react-test.css'
function Test(props)
{
    return (
        <div className='Container'>
            <img src = {props.source} alt="Hey" />
            <div className='details'>
                <h1>{props.title}</h1>
                <div className='des'><p>{props.desc}</p></div>
            </div>
        </div>
    )
}
export default Test