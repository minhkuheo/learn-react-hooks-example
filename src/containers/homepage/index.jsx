import React from "react";
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/useStores';

const Homepage = observer(() => {
  const { counterStore } = useStores();
  return <div>
    <h1>This is Home Page</h1>

    <section>
      <h3>This section is example of using mobx store</h3>
      <h3>Note:</h3>
      <p>the first count is on Header component</p>
      <p>the second count is on Homepage component</p>
      <p>To be more clear, check the useRef page. There is also a count from mobx store overthere</p>
      <div>Count: <strong  style={{ color: 'red', fontSize: '24px' }}>{counterStore.count}</strong></div>

      <button type="button" onClick={() => counterStore.increment()}>Add 1</button>
      <button type="button" onClick={() => counterStore.decrement()}>Minus 1</button>
    </section>
  </div>;
});

export default Homepage;
