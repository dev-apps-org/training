const redux = require("redux")

const store = redux.createStore;

let mathReducer = (state = {count: 100}, action) => {
    
    switch(action.type) {
        case "INCREMENT":
            state.count++;
            return state;
        default:
            return state;
    }
}

let myStore = store(mathReducer);

console.log('Initial State : ',myStore.getState());
myStore.subscribe (() => {
    console.log('Change in state. Current state is : ', myStore.getState());
})

myStore.dispatch({type: "INCREMENT"});