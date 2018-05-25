import React, {Component} from "react"
import {connect} from "react-redux"
import axios from "axios"

class ManageProducts extends Component {

    constructor() {
        super();
        this.apiUrl = 'http://localhost:3000/product-service';
    }

    componentDidMount() {
        axios.get(this.apiUrl).then(
            (response) => {
                // console.log('products received : ', response.data);
                this.props.getProducts(response.data);
            }, 
            (error) => {
                // console.log(error);
            }
        )
    }

    render() {
        // console.log('productList --> ', this.props.manageProducts);
        let output = null;
        if(this.props.manageProducts.length > 0) {
            output = this.props.manageProducts.map((product) => {
                return (
                    <tr key={product._id} id={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                            <button type="button" className="btn btn-danger btn-xs" onClick={() => this.handleDelete(product._id)}>Delete product</button>&nbsp;
                            <button type="button" className="btn btn-success btn-xs" onClick={() => this.handleEdit(product)}>Edit product</button>
                        </td>
                    </tr>
                )
            });
        }
        else {
            output = <tr><td colSpan="4">No Products Available</td></tr>;
        }
        return(
            <div>
                <h3>List of Products</h3>
                <form className="well">
                    <input type="text" ref="pid" placeholder="Product Id (Readonly)" readOnly />&nbsp;
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
        // console.log('Handle Add Product called');
        let newProduct = {
            // _id: this.refs.pid.value,
            name: this.refs.pname.value,
            price: this.refs.price.value
        }
        // console.log('new product --> ', newProduct);

        axios.post(this.apiUrl, newProduct).then(
            (response) => {
                this.props.addProduct(response.data);
            }
        )

        // this.props.addProduct(newProduct);
    }

    handleUpdateProduct = () => {
        // console.log('Handle Update Product called');
        let updatedProduct = {
            _id: this.refs.pid.value,
            name: this.refs.pname.value,
            price: this.refs.price.value
        }
        // console.log('updated product --> ', updatedProduct);
        
        axios.put(this.apiUrl+'/'+this.refs.pid.value, updatedProduct).then(
            (response) => {
                this.props.updateProduct(response.data);
            }
        )
        
        //this.props.updateProduct(updatedProduct);
    }

    handleDelete = (productId) => {
        axios.delete(this.apiUrl+'/'+productId).then(
            (response) => {
                this.props.deleteProduct(productId);
            }
        )
        //this.props.deleteProduct(productId);
    }

    handleEdit = (product) => {
        this.refs.pid.value = product._id;
        this.refs.pname.value = product.name;
        this.refs.price.value = product.price;
    }
}

function mapDispatchToProps(dispatch) {
    // console.log('Dispatch --> ', dispatch);
    return {
        addProduct: (newProduct) => {
            // console.log('Product added to cart --> ', newProduct);
            dispatch({type: "ADD_NEW_PRODUCT", payload: newProduct});
        },
        deleteProduct: (productId) => {
            // console.log('productId --> ', productId);
            dispatch({type: "DELETE_PRODUCT", payload: productId});
        },
        updateProduct: (updatedProduct) => {
            // console.log('Product updated to product list --> ', updatedProduct);
            dispatch({type: "UPDATED_PRODUCT", payload: updatedProduct});
        },
        getProducts: (products) => {
            // console.log('Product List received --> ', products);
            dispatch({type: "GET_PRODUCTS", payload: products});
        }
    }
}

function mapStateToProps(state) {
    // console.log('State injected --> ', state);
    return {
        // products: state --> when state contains single reducer
        manageProducts: state.productReducer // when state contains multiple reducer
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(ManageProducts);