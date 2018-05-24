import React, {Component} from "react"
import {connect} from "react-redux"

class ManageProducts extends Component {

    render() {
        console.log('productList --> ', this.props.manageProducts);
        let output = null;
        if(this.props.manageProducts.length > 0) {
            output = this.props.manageProducts.map((product) => {
                return (
                    <tr key={product.productId} id={product.productId}>
                        <td>{product.productId}</td>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td>
                            <button type="button" className="btn btn-danger btn-xs" onClick={() => this.handleDelete(product.productId)}>Delete product</button>&nbsp;
                            <button type="button" className="btn btn-success btn-xs" onClick={() => this.handleEdit(product)}>Edit product</button>
                        </td>
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
                <form className="well">
                    <input type="text" ref="pid" placeholder="Enter Product Id" />&nbsp;
                    <input type="text" ref="pname" placeholder="Enter Product Name" />&nbsp;
                    <input type="text" ref="price" placeholder="Enter Product Price" />&nbsp;
                    <button type="button" className="btn btn-primary" onClick={this.handleAppProduct}>Add product</button>&nbsp;
                    <button type="button" className="btn btn-secondary" onClick={this.handleUpdateProduct}>Update product</button>
                </form>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
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

    handleAppProduct = () => {
        console.log('Handle Add Product called');
        let newProduct = {
            productId: this.refs.pid.value,
            productName: this.refs.pname.value,
            productPrice: this.refs.price.value
        }
        console.log('new product --> ', newProduct);
        this.props.addProduct(newProduct);
    }

    handleUpdateProduct = () => {
        console.log('Handle Update Product called');
        let updatedProduct = {
            productId: this.refs.pid.value,
            productName: this.refs.pname.value,
            productPrice: this.refs.price.value
        }
        console.log('updated product --> ', updatedProduct);
        this.props.updateProduct(updatedProduct);
    }

    handleDelete = (productId) => {
        this.props.deleteProduct(productId);
    }

    handleEdit = (product) => {
        this.refs.pid.value = product.productId;
        this.refs.pname.value = product.productName;
        this.refs.price.value = product.productPrice;
    }
}

function mapDispatchToProps(dispatch) {
    console.log('Dispatch --> ', dispatch);
    return {
        addProduct: (newProduct) => {
            console.log('Product added to cart --> ', newProduct);
            dispatch({type: "ADD_NEW_PRODUCT", payload: newProduct});
        },
        deleteProduct: (productId) => {
            console.log('productId --> ', productId);
            dispatch({type: "DELETE_PRODUCT", payload: productId});
        },
        updateProduct: (updatedProduct) => {
            console.log('Product updated to product list --> ', updatedProduct);
            dispatch({type: "UPDATED_PRODUCT", payload: updatedProduct});
        }
    }
}

function mapStateToProps(state) {
    console.log('State injected --> ', state);
    return {
        // products: state --> when state contains single reducer
        manageProducts: state.productReducer // when state contains multiple reducer
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(ManageProducts);