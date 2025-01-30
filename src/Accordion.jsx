import { useState } from "react";
import "./App.css";

export default function Accordion(props) {
  let [show, setShow] = useState(false);

  return (
    <div>
      <div className="container">
        <div
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="heading"
        >
          {props.heading}
          <span
            aria-hidden={true}
            className={
              show ? "accordion-icon-rotated accordion-icon" : "accordion-icon"
            }
          />
        </div>
        {show && <div className="content">{props.content}</div>}
      </div>
    </div>
  );
}