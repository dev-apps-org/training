console.log('This is node demo');

// importing another module in node-demo.js
var firstNodeModule = require("./first");

console.log(firstNodeModule);

// invoking the exported method greet
firstNodeModule()