import './App.css'
import './AssignmentReact.css'
import fifth from './assets/fifth.png'
import fourth from './assets/fourth.png'
import three from './assets/three.png'
import two from './assets/two.png'
import one from './assets/one.png'
import sixth from './assets/sixth.png'

let images = [one,two,three,fourth,fifth,sixth]
function addelement(num)
{
    if(+num > 6 || num < 0)
    {
        num = 0;
    }
    return [...Array(+num)].map((ele,index)=>{
        return (<button key = {index} className = {`btn btn-${index}`}><img src = {images[index]}></img></button>)
    })
}
function Day11(props)
{
    console.log("ans = ",props.num_of_childs);
    return(
        <div className="container">
        {addelement(props.num_of_childs)}
        </div>
    )
}
export default Day11