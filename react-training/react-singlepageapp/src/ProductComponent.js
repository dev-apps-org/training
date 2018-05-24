import React, {Component} from "react";
import {connect} from "react-redux";

class ProductComponent extends Component {

    render() {
        console.log('productList --> ', this.props.products);
        let output = null;
        if(this.props.products.length > 0) {
            output = this.props.products.map((product) => {
                return (
                    <tr key={product.productId} id={product.productId}>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td><button type="button" className="btn btn-primary" onClick={() => this.props.addToCart(product)}>Add To Cart</button></td>
                    </tr>
                )
            });
        }
        else {
            output = <tr><td colSpan="3">No Products Available</td></tr>;
        }
        return(
            <div>
                <h3>List of Products</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {output}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('State injected --> ', state);
    return {
        // products: state --> when state contains single reducer
        products: state.productReducer // when state contains multiple reducer
    }
}

function mapDispatchToProps(dispatch) {
    console.log('Dispatch --> ', dispatch);
    return {
        addToCart: (selectedProduct) => {
            let cartProduct = {
                id: selectedProduct.productId,
                name: selectedProduct.productName,
                price: selectedProduct.productPrice,
                quantity: 1
            }
            console.log('Product added to cart --> ', cartProduct);
            dispatch({type: "ADD_TO_CART", payload: cartProduct});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);