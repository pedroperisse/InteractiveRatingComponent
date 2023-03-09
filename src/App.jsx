import { useState } from "react";
import "./App.css";
import Final from "./Final";

function App() {
  const [display, setDisplay] = useState("container");
  const [value, setValue] = useState("1");

  const handleClick = (e) => {
    setValue(e.target.innerText);
    console.log(value);
  };
  const hideElements = () => {
    setDisplay("hide-elements");
  };

  return (
    <>
      <div className={display}>
        <section className="star-sec">
          <div className="star-box">
            <svg
              className="star"
              width="17"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </div>
        </section>
        <section className="txt-container">
          <h3>How did we do?</h3>
          <p className="txt">
            Please let us know how we did with your support request. All
            feedbacks is appreciated to help us improve our offering!
          </p>
        </section>
        <section className="btn-container">
          <button className="rate-btn" onClick={handleClick}>
            1
          </button>

          <button className="rate-btn" onClick={handleClick}>
            2
          </button>

          <button className="rate-btn" onClick={handleClick}>
            3
          </button>

          <button className="rate-btn" onClick={handleClick}>
            4
          </button>

          <button className="rate-btn" onClick={handleClick}>
            5
          </button>
        </section>
        <button className="btn" onClick={hideElements}>
          submit
        </button>
      </div>
      <Final value={value} />
    </>
  );
}

export default App;
