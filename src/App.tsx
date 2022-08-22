import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {

  console.log("再描画されない！！")

  const [count,setCount] = createSignal<number>(0);

  const addCount = ():void =>{
    setCount((num: number) => num +1)
  }

  const reduceCount = ():void => {
    setCount((num: number) => num === 0 ? 0 : num -1)
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <div>count: {count}</div>
      <button onClick={() => addCount()}>plus</button>
      <button onClick={() => reduceCount()}>minus</button>
    </div>
  );
};

export default App;
