import { useEffect, useState, useContext, useRef, useReducer, useMemo} from 'react';
import './App.css'
import ShincodeContext from './main';


const reducer = (state: number, action: { type: any; }) => {
  switch (action.type) {
    case "increament":
      return state + 1; 
    case "decreament":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShincodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Hello Hooks")
  }, [count]);

  const handleRef = () => {
    if(ref.current){
      console.log(ref.current);
    };
  }

  // useMemo 
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square = useMemo(() => {
    let i = 0;
    while(i < 2) {
      i ++;
    }
    return count02 * count02;
  }, [count02]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{ shincodeInfo.name }</p>
      <p>{ shincodeInfo.age }</p>

      <hr />
      <h1>useRef</h1>
      {/* <input type="text" ref={ref} /> */}
      <button onClick={ handleRef }>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント: {state}</p>
      <button onClick={() => dispatch({ type: "increament" })}>+</button>
      <button onClick={() => dispatch({ type: "decreament" })}>-</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント1: {count01}</div>
      <div>カウント2: {count02}</div>
      <div>結果: { square }</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>＋</button>
    </div>
  )
}

export default App;
