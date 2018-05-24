// This file is a node module
// One node module can have only one export

// Exporting a string value
// module.exports = "Hello First Node Module";

function greet() {
    console.log('My first greet function');
}

// exporting the function greet reference
module.exports = greet