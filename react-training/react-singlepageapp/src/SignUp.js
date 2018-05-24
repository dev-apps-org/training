import React, {Component} from "react"
import MySignComponent from "./MySignComponent"

export default class SignUp extends Component {
    
    handleSignUp = (userId, password) => {
        console.log('handleSignUp called for userId & password --> ', userId, password);
    }

    render() {
        return(
           <MySignComponent heading="Quick Sign Up" onSubmit={this.handleSignUp}/>
        )
    }
}