import React from "react"
import ReactDOM from "react-dom"
import MySignComponent from "./MySignComponent"

describe("Test MySignComponent", () => {
    it("renders the sign in component", () => {
        const div = document.createElement('div');
        ReactDOM.render(<MySignComponent heading="test" />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
});