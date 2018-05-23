import React from 'react';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.msg = "Hello Ankit";
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a href="https://www.wellsfargo.com/" className="navbar-brand">
                        <img src="https://www01.wellsfargomedia.com/assets/images/css/template/homepage/homepage-logo-horz.svg"></img>
                    </a>
                </nav>
                <SignIn />
                <hr />
                <SignUp />
            </div>
        )
    }
}

export default App;