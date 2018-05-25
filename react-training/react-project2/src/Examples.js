import React, {Component} from "react"
import PropTypes from "prop-types"
import axios from "axios"

export class FriendsComponent extends Component {

    state = {
        friends: ["Ankit", "Uma", "Sowmya"]
    }

    addFriend = (newFriend) => {
        // console.log(newFriend);
        this.setState({
            friends: [...this.state.friends, newFriend]
        })
    }

    render() {
        return (
            <div>
                <p><b>Friends:</b></p>
                <AddFriend addFriend={this.addFriend} />
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

export class AddFriend extends Component {

    state = {
        newFriend: 'Guest'
    }

    handleOnChange = (event) => {
        // console.log('Text box data changed. New Value => ', event.target.value);
        this.setState({
            newFriend : event.target.value
        })
    }

    handleAddFriend = () => {
        this.props.addFriend(this.state.newFriend);
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Enter new friend name" 
                    value={this.state.newFriend} onChange={this.handleOnChange} />&nbsp;
                <button type="button" onClick={this.handleAddFriend}>Add</button>
            </div>
        )
    }
}

export class ServiceDemoComponent extends Component {

    loadDataFromFillText() {
        axios.get('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}').then(
            (data) => {
                console.log('Data received : ', data.data     );
            },
            (error) => {
                console.log('Error : ', error);
            }
        )
    }

    loadProducts() {
        axios.get('http://localhost:3000/product-service').then(
            (response) => {
                console.log(response.data);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    componentDidMount() {
        // this.loadDataFromFillText();
        this.loadProducts();
    }

    render() {
        return(
            <div>
                <h3>Rest API Example</h3>
            </div>
        )
    }
}

AddFriend.propTypes = {
    addFriend: PropTypes.func.isRequired
}

ShowListComponent.defaultProps = {
    friends: ["F1", "F2", "F3"]
}