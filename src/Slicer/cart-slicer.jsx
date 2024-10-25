import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {                     //used in DataBinding.jsx
    cartItems: [],
    cartCount : 0
}
 
const cartSlice  = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
             state.cartItems.push(action.payload);
             state.cartCount = state.cartItems.length;
        },
        removeFromCart(state, action) {
            // state.cartItems.splice(action.payload,1);
            // state.cartCount = state.cartItems.length;
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // correct way of deleting items
            state.cartCount -= 1;
        }
    }
});
export const { addToCart,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
