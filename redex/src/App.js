
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment,decrement ,reset } from './features/counter/counterSlice';
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementClick() {
       dispatch(increment());
  }
  function handleDecrementClick() {
     dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  return (
    <div className="container flex justify-center items-center h-screen">
           <button onClick={handleIncrementClick}>+</button>
           <p>Count {count}</p>
            <button onClick={handleDecrementClick}>-</button>
            <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

export default App;
