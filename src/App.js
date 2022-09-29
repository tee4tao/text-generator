import { useEffect, useRef, useState } from "react";
import data from "./data";
import { GeneratedText } from "./generated-text";
function App() {
  let [text, setText] = useState(data);
  let [index, setIndex] = useState("");
  let [isShow, setIsShow] = useState(false);
  let refContainer = useRef(null);
  let handleClick = (e) => {
    e.preventDefault();
    let number = refContainer.current.value;
    setIndex(number);
    setIsShow(true);
  };
  return (
    <main>
      <section>
        <h3 className="heading">tired of boring lorem ipsum?</h3>
        <form className="form">
          <label htmlFor="paragraph-number" className="label">
            paragraphs:{" "}
          </label>
          <input
            type="number"
            id="paragraph-number"
            placeholder="0"
            ref={refContainer}
          />
          <button type="submit" className="generate-btn" onClick={handleClick}>
            generate
          </button>
        </form>
        {isShow && <GeneratedText index={index} text={text} />}
      </section>
    </main>
  );
}

export default App;
