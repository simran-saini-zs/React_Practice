import './App.css'
import './AssignmentReact.css'
import fifth from './assets/fifth.png'
import fourth from './assets/fourth.png'
import three from './assets/three.png'
import two from './assets/two.png'
import one from './assets/one.png'
import sixth from './assets/sixth.png'
import { jsx } from 'react/jsx-runtime'

let images = [one,two,three,fourth,fifth,sixth]


function findpairs(num)
{
    let pairs = []
    for(let i = 1; i < num; i++)
    {
        for(let j = 1; j < num; j++)
        {
            if(i+j == num)
            {
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
}
function addelement(num)
{
    let pairs = findpairs(num);
    if(+num == -1)
    {
        num = 0;
    }
    
    let elements = []
    for(let i = 0; i < pairs.length; i++)
    {
        elements.push(pairs[i].map((img_idx,idx)=>{
            console.log(img_idx);
            return (<img src = {images[img_idx-1]} key = {idx} />)
        }));
    }
    return elements
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