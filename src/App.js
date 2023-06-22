import {useSelector, useDispatch} from 'react-redux'
//useSelector is a hook that allows you to select and access specific info from the Redux store state
import './App.css';

function App() {
                      //the stuff in () is callback property
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
    // useSelector allows you to take the value of counter from the other file

    const increment = () => {
      dispatch({type: 'INC'})
      // this dispatch function will be recieved by the reducer in the redux store 
      //and can be used to update the store accordingly
      // type property is used by the Redux store and reducers to determine how to 
      // handle the action and update the state according
    }
    const decrement = () => {
      dispatch({type: "Decrement"})
      //  dispatch({type: "Decrement", payload:1}) got output NaN
    }
    const addBy = () => {
      dispatch({type: "Add", payload:10})
    }

  return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick = {increment}>Increment</button>
        <button onClick= {decrement}> Decrement </button>
        <button onClick = {addBy}> Add Value by 10 </button>
      </div>
    );
  }

export default App;
