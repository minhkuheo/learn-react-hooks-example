import React from "react";
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/useStores';

const Homepage = observer(() => {
  const { counterStore } = useStores();
  return <div>
    <h1>This is Home Page</h1>

    <div>{counterStore.count}</div>

    <button type="button" onClick={() => counterStore.increment()}>++</button>
    <button type="button" onClick={() => counterStore.decrement()}>--</button>
  </div>;
});

export default Homepage;
