// Cart reducer logic

let cartData = []

export function cartReducer(state=cartData, action) {
    switch(action.type) {
        case "ADD_TO_CART":
            // console.log('Cart Reducer Add to Cart');
            state = [...state, action.payload];
            return state;
        case "REMOVE_ITEM":
            // console.log('Cart Reducer Remove Item');
            let remainingProducts = state.filter((product) => product.id !== action.payload.productId);
            // console.log(remainingProducts);
            return remainingProducts;
        default:
            // console.log('Cart Reducer default');
            return state;
    }
}