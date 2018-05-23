/*import {Point3D} from "./module1";
import Point from "./module1";

console.log('This is index.js');

let c1 = new Point(100,200);
c1.display();

let c2 = new Point3D(500,600,700);
c2.display();*/

import React from "react"
import ReactDom from "react-dom"

// Getting the root element from index.html
let rootElement = document.getElementById("root");

// Define an element using React API
// let newElement = React.createElement("u", null, "My First React Application"); // class, style, text

// Rendering the new element in the root element
// ReactDom.render(newElement, rootElement);

// JSX Approach to render the content
/* 
ReactDom.render(
    <div>
        <h1>Welcome</h1>
        <u>Wells Fargo React Training</u>
        <p>JS Expression to add "12+50" : {12+50}</p>
        <p>String Literals "Wells Fargo": {"Wells Fargo"}</p>
    </div>, rootElement);
*/

// Define a functional component
let MyTagFunctionalComponent = () => {
    return <h1>My Tag Functional Component</h1>
}

// Rendering MyTagFunctionalComponent in the rootElement
ReactDom.render(<MyTagFunctionalComponent />, rootElement);