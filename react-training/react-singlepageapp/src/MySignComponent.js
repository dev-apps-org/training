import React, {Component} from "react";

export default class MySignComponent extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.heading);
    }

    // Method Definition
    submitData = () => {
        console.log("SubmitData function called for userId --> " + this.refs.userId.value);
        this.props.onSubmit(this.refs.userId.value, this.refs.password.value);
    }

    componentDidMount() {
        document.querySelector("h3").style.color = 'red';
    }

    render() {
        // this.props.heading = "Alchemy"; -> props are immutable/read-only.
        return (
            <div>
                <h3>{this.props.heading}</h3>
                <form>
                    <input type="text" placeholder="Enter Username" ref="userId" />&nbsp;
                    <input type="password" placeholder="Enter Password" ref="password" />&nbsp;
                    <button type="button" className="btn btn-primary" onClick={this.submitData}>{this.props.heading}</button>
                </form>
            </div>
        )
    }
}