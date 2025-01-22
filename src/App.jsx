import './App.css'
import Accordion from './Accordion.jsx'
function App() {
  let arr = [
    { heading: "HTML", content: "abc" },
    { heading: "CSS", content: "abdfkdfdfdfjc" },
    { heading: "JS", content: "ab45555c" },
  ];
  return (
    <>
      <div className="container">
        {arr.map((ele, idx) => {
          return (
            <Accordion
              key={idx}
              heading={ele["heading"]}
              content={ele["content"]}
            />
          );
        })}
      </div>
    </>
  );
}

export default App
