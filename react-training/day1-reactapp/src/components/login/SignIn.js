import React from "react"
import MySignComponent from "./MySignComponent"

class SignIn extends React.Component {

    constructor() {
        super();

        // Approach to bind ES5 standards function methods
        // this.handleSignIn = this.handleSignIn.bind(this);
    }

    state = {
        loggedInUserName : "Guest"
    }

    // ES5 Standards
    /*
    handleSignIn(userId, password) {
        console.log('handleSignIn called for userId & password --> ', userId, password);
        this.setState({
            loggedInUserName : userId
        })
        console.log('loggedInUserName --> ', this.state.loggedInUserName);
    }
    */

    //ES6 Standards
    handleSignIn = (userId, password) => {
        console.log('handleSignIn called for userId & password --> ', userId, password);
        this.setState({
            loggedInUserName : userId
        })
        console.log('loggedInUserName --> ', this.state.loggedInUserName);
    }

    render() {
        return(
            <div>
                <b> Welcome {this.state.loggedInUserName} !</b>
                <MySignComponent heading="Sign In" onSubmit={this.handleSignIn} />
            </div>
        )
    }
}

export default SignIn;