import React, {Component} from "react"
import {connect} from "react-redux"

class CardItemsComponent extends Component {

    updateAmount = (cardItem) => {
        console.log('qty ' + cardItem.quantity);
    }

    render() {
        console.log('cart items --> ', this.props.cartItems);
        let output = null;
        if(this.props.cartItems.length > 0) {
            output = this.props.cartItems.map((cartItem) => {
                return (
                    <tr key={cartItem.id} id={cartItem.id}>
                        <td>{cartItem.name}</td>
                        <td>{cartItem.price}</td>
                        <td>{cartItem.quantity}</td>
                        <td>{cartItem.price * cartItem.quantity}</td>
                        <td><button className="btn btn-danger btn-xs" onClick={() => this.props.removeItem(cartItem)}>Remove Item</button></td>
                    </tr>
                )
            })
        }
        else {
            output = <tr><td colSpan="5">No Items in Cart</td></tr>;
        }

        return(
            <div>
                <h3>Card Items : <span className="label label-primary">{this.props.cartItems.length}</span></h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {output}
                        <tr>
                            <td colSpan="4">Total Amount</td>
                            <td>{this.totalAmount()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    totalAmount = () => {
        let total = 0;
        for(let cardItem of this.props.cartItems) {
            total += cardItem.price * cardItem.quantity;
        }
        return total;
    }
}

function mapStateToProps(state) {
    console.log('State injected --> ', state);
    return {
        cartItems: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    console.log('Dispatch --> ', dispatch);
    return {
        removeItem: (selectedProduct) => {
            let cartProduct = {
                productId: selectedProduct.id,
                productName: selectedProduct.name,
                productPrice: selectedProduct.price
            }
            console.log('Product added to cart --> ', cartProduct);
            dispatch({type: "REMOVE_ITEM", payload: cartProduct});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItemsComponent);