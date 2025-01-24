import './App.css'
function App() {
  function handlechange()
  {
    let id;
    function innerfn(event)
    {
      clearTimeout(id);
      id = setTimeout(()=>{
        console.log(event.target.value);
      },1000);
    }
    return innerfn;
  }
  

  function handleclick()
  {
    let id,id2;
    let count = 0;
    function innerfn(event)
    {
      if(!id)
      {
        id2 = setInterval(()=>{
          let time = new Date();
          count++;
          console.log("count:",count," Time = ",time);
        },3000);
      }
      clearTimeout(id);
      id = setTimeout(()=>{
        let time = new Date();
        console.log(count," Time = ",time);
        count = 0;
        clearTimeout(id2);
        id = undefined;
      },1000);
    }
    return innerfn;
  }
  return (
    <>
   <input type="text" placeholder='Type Something' id = "pass" onChange={handlechange()}/>
   <button onClick={handleclick()}>hello</button>
    </>
  )
}
export default App
//USING KEYSTROKES:
// useEffect(()=>{
//   let timer = 1000;
//   let id;
//   function handlepress()
//   {
//     clearTimeout(id);
//   }
//   function handleup(event)
//   {
//     clearTimeout(id);
//     id = setTimeout(()=>{
//       console.log(event.target.value);
//     },timer);
//   }
//   let ele = document.getElementById("pass");
//   ele.addEventListener('keyup',handleup);
//   ele.addEventListener('keypress',handlepress);

//   return (()=> clearTimeout(id));
// },[])


//USING HOOKS:
// let [value,setValue] = useState('');
//   let ref = useRef(null)

//   function handlechange(event)
//   {
//     setValue(event.target.value);
    
//   }
//   useEffect(()=>{
//     setTimeout(()=>{
     
//       if(ref.current.value == value)
//       {
//         console.log(value);
//       }
//     },1000);
//   },[value])


//USING MY LOGIC WITH SETTIMEOUT
// let id;
// let value = '';
// function handlechange(event)
// {
//   clearTimeout(id);
//   setTimeout(()=>{
//      value = event.target.value;
//   },500);
//   id = setTimeout(()=>{
//     if(value == event.target.value)
//     {
//       console.log(value);
//     }
//   },1000);
// }