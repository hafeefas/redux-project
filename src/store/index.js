import { createStore } from "redux";
                                //action can be named anything btw
const reducerFunction = (state = {counter:0}, action) =>{
    //Synchronous Function, we should not change the original state
    if(action.type==='INC'){
        return {counter: state.counter+1}
        // return {counter: state.counter + action.payload} i got output NaN
    }

    if (action.type === 'Decrement'){
        return {counter: state.counter-1}
    }
    if (action.type === "Add"){
        return {counter: state.counter + action.payload}
        // return {counter: state.counter +10}
    }
    //the action has the type and payload^
    return state;//will return the counter THIS IS NEEDED
}

const store= createStore(reducerFunction)

export default store;

// dispatch function is used to send actions to the Redux store, triggering state 
// updates. It is responsible for dispatching actions that can modify the state in the
//  Redux store. The dispatch function is typically used in response to user 
//  interactions, such as button clicks, or in other parts of your application logic 
//  where you need to trigger state changes.