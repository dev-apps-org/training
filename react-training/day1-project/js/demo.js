console.log(10+20);

// Print first 5 numbers on the console
var i = 1; // any variable created using 'var' keyword, it's a global variable.
// let i = 1; // local variable
for(;i<=5;i++) {
    console.log(i);
}
console.log("Value of i --> ", i);

const c = 50;
console.log('value of constant -->', c);
// c = 500; --> Cannot reassign a const variable.

// Anonymous function
let f = function() { // function is also a value assigned to a variable
    return "WF";
}

console.log(f); // logging the function definition
console.log(f()); // logging the output of the function

// Arrow function
let m = () => "Wells Fargo";

console.log(m); // logging the function definition
console.log(m()); // logging the output of the function

let x = () => {
    for(let j=1;j<=5;j++) {
        console.log(j);
    }   
}

console.log(x());

let print = (msg) => msg;

console.log(print("helllooooo"))

// Define a class Point with 2 data members - x,y
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        console.log(this.x + "----" + this.y);
    }
}

// Instance of class Point
let pt1 = new Point(10, 40);
// Calling the class Point method display
pt1.display();

// Create a class Point3D by inheriting the base class Point with member variable -> x,y,z
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    display() {
        super.display();
        console.log(this.x + "----" + this.y + "----" + this.z);
    }
}

let pt3d1 = new Point3D(100,200,300);
pt3d1.display();

// import Test from "ClassModule";
// let test1 = new Test(100,111);
// test1.display();

function changeText() {
    // get the element by Id
    let d = document.getElementById("welcomeText");
    // Value of attribute reply
    let v = d.getAttribute("reply");
    // change the value
    d.innerHTML = v;
    d.setAttribute('reply', 'ankit');
}