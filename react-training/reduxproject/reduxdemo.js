// to use any library in JS file we need 'require' function. 
// This is similar to import statement. Node doesnt suport import statement.
const redux = require("redux");
// const actionCreator = require("re");

console.log('Inside redux demo js file!!!!!');

// Creating a global store where all application data can be stored.
const store = redux.createStore;

// Define a reducer with an action
let mathReducer = (state=0, action) => {
    /*
    if(action.type == "INCREMENT") {
        return state + 1;
    }
    else if(action.type == "ADD") {
        return state + action.payload;
    }
    else {
        return state;
    }
    */
   
    switch(action.type) {
        case "ADD":
            return state + action.payload;
        case "INCREMENT":
            return state + 1;
        case "SUB":
            return state - action.payload;
        default:
            return 10;
    }
}

// Create a store with math reducer
let myStore = store(mathReducer);

console.log('Initial State is : ', myStore.getState())

// Subscribe to monitor the state in the store
myStore.subscribe (() => {
    console.log('Change in state. Current state is : ', myStore.getState());
})

// Dispatch/Perform Action -> dispatch({type}) : type is a keyword
myStore.dispatch({type: "INCREMENT"}); // INCREMENT is a user defined action

// Adding more actions
myStore.dispatch({type: "INCREMENT"});
myStore.dispatch({type: "INCREMENT"});

myStore.dispatch({type:"ADD", payload: 8});

myStore.dispatch(increment());

myStore.dispatch(add(100));
myStore.dispatch(sub(50));

function increment() {
    return {type: "INCREMENT"};
}

function add(num) {
    return {type: "ADD", payload: num};
}

function sub(num) {
    return {type: "SUB", payload: num};
}