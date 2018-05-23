function increment() {
    return {type: "INCREMENT"};
}

function add(num) {
    return {type: "ADD", payload: num};
}

function sub(num) {
    return {type: "SUB", payload: num};
}