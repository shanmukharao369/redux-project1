import { useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter =  useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showcounter);

  const incrementHandler = () =>{
    dispatch(counterActions.increment(1))
  };

  const decrementHandler = () =>{
    dispatch(counterActions.decrement(1))
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.INCREMENTBY5(5));
  };

  const decrementBy5Handler = () => {
    dispatch(counterActions.DECREMENTBY5(5));
  };

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5Handler} >Increment By 5</button>
        <button onClick={decrementBy5Handler} >Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
