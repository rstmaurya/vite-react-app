import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "../Slicer/cart-slicer";


export default configureStore({
 reducer: {
     store : cartSlicer                
 }                              
})