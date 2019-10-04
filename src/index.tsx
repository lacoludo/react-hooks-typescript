import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;
  return <h1>Hello!! {sum(15, 15)}</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
