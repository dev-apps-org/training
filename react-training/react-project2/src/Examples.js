import React, {Component} from "react"

export class FriendsComponent extends Component {

    state = {
        friends: ["Ankit", "Uma", "Sowmya"]
    }

    render() {
        return (
            <div>
                <p>Friends are... </p>
                <ShowListComponent friends={this.state.friends} />
            </div>
        )
    }
}

export class ShowListComponent extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.friends.map((friend, index) => <li key={index}>{friend}</li>)}
                </ul>
            </div>
        )
    }
}