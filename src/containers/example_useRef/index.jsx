import React, { useState, useRef } from "react";
import { usePreviousValue } from "../../components/customized-hooks/usePreviousValue";

/** useRef
 *    Do something with certain DOM
 */
const ExampleUseRef = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePreviousValue(count);
  const counterSpanElement = useRef(null);
  const counterButtonElement = useRef(null);
  const inputElement = useRef(null);

  const increment = () => {
    setCount(count + 1);
    // console.log(counterSpanElement);
    // console.log(counterButtonElement);
    onButtonClick();
  };

  const decrement = () => {
    setCount(count - 1);
    // console.log(counterSpanElement);
    // console.log(counterButtonElement);
    onButtonClick();
  };

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputElement.current.focus();
  };

  return (
    <>
      <h1>useRef</h1>
      <h3>
        Current count: <span ref={counterSpanElement}>{count}</span> ---
        Previous count: {prevCount}
      </h3>
      <input ref={inputElement} type="text" />
      <button onClick={increment} ref={counterButtonElement}>
        Increase
      </button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
};

export default ExampleUseRef;
