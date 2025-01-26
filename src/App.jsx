import "./App.css";
import { useState, useEffect, useRef } from "react";
function App() {
  let alignments = [
    "left",
    "left",
    "right",
    "right",
    "sidebar",
    "bottom",
    "top",
    "top",
    "bottom",
  ];

  let [show, setshow] = useState(false);
  console.log(show);
  return (
    <>
      <div className="outer-div">
        <main className="main">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="card">
              {i % 2 === 0 ? (
                <Button alignment={alignments[i]} setshow={setshow} />
              ) : (
                <Hover alignment={alignments[i]} />
              )}
            </div>
          ))}
        </main>
        {show && (
          <div className="sidebar">
            <div className="side-content">Sidebar</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

const Tooltip = ({ alignment, text, children, ref, setshow }) => {
  function getclassname(align) {
    switch (align) {
      case "left":
        return "left";
      case "right":
        return "right";
      case "top":
        return "top";
      case "bottom":
        return "bottom";
      case "sidebar":
        return "sidebar";
    }
  }

  let [visible, setvisible] = useState(false);

  function handleevent(event) {
    setvisible((prev) => !prev);
  }
  useEffect(() => {
    if (ref) {
      window.addEventListener("click", (event) => {
        if (!(ref.current == event.target)) {
          if (getclassname(alignment) == "sidebar") {
            setshow(false);
          } else {
            setvisible(false);
          }
        }
      });
    }
  }, []);
  return (
    <>
      <div
        onClick={
          children.type == "button"
            ? children.props.children[1] == "sidebar"
              ? () => {
                  setshow((prev) => !prev);
                }
              : handleevent
            : () => {}
        }
        onMouseEnter={children.type == "button" ? () => {} : handleevent}
        onMouseLeave={children.type == "button" ? () => {} : handleevent}
        className="outer-cont"
      >
        {children}
        {visible && <div className={getclassname(alignment)}>{text}</div>}
      </div>
    </>
  );
};

const Button = ({ alignment, setshow }) => {
  let ref = useRef(null);
  let text = "Hi everyone!";
  return (
    <Tooltip alignment={alignment} text={text} ref={ref} setshow={setshow}>
      <button ref={ref}>Click me {alignment}</button>
    </Tooltip>
  );
};

const Hover = ({ alignment }) => {
  let text = "Hi everyone!";
  return (
    <Tooltip alignment={alignment} text={text}>
      <span>Hover for {alignment}</span>
    </Tooltip>
  );
};
