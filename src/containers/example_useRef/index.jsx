import React, { useState, useRef } from "react";
import { observer } from 'mobx-react';
import { usePreviousValue } from "../../hooks/usePreviousValue";
import { useStores } from '../../hooks/useStores';

/** useRef
 *    Do something with certain DOM
 */
const ExampleUseRef = observer(() => {
  const [count, setCount] = useState(0);
  const prevCount = usePreviousValue(count);
  const counterSpanElement = useRef(null);
  const counterButtonElement = useRef(null);
  const inputElement = useRef(null);
  const { counterStore } = useStores();

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

      <hr />
      <br />
      <h3>count from mobx counterStore: <strong style={{ color: 'red', fontSize: '24px' }}>{counterStore.count}</strong></h3>
      <button type="button" onClick={() => counterStore.increment()}>++</button>
      <button type="button" onClick={() => counterStore.decrement()}>--</button>
    </>
  );
});

export default ExampleUseRef;
