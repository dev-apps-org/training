// product reducer logic

// Creating a global product info
let productList = [
    {"productId" : 1, "productName" : "Oneplus 6", "productPrice" : "35000"},
    {"productId" : 2, "productName" : "iPhone X", "productPrice" : "90000"},
    {"productId" : 3, "productName" : "Samsung Galaxy 9", "productPrice" : "70000"}   
]

// Created a reducer
export function productReducer(state=productList, action) {
    switch(action.type) {
        case "ADD_TO_CART":
            console.log('Product Reducer Add To Cart');
            let remainingProducts = state.filter((product) => product.productId !== action.payload.id);
            return remainingProducts;
        case "REMOVE_ITEM":
            console.log('Product Reducer Remove Item');
            state = [...state, action.payload];
            return state;
        case "ADD_NEW_PRODUCT":
            console.log('Product Reducer Add New Product');
            state = [...state, action.payload]
            return state;
        case "DELETE_PRODUCT":
            let index = state.findIndex((p) => p.productId == action.payload);
            return [...state.slice(0,index), ...state.slice(index+1)];
        case "UPDATED_PRODUCT":
            console.log('action payload --> ', action.payload);
            let idx = state.findIndex((p) => p.productId == action.payload.productId);
            state = [...state.slice(0,idx), ...state.slice(idx+1)];
            state = [...state, action.payload];
            return state;
        default:
            console.log('Product Reducer default');
            return state;
    }
}