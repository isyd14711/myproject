import{createSlice} from '@reduxjs/toolkit'
import SingleProduct from '../Products/SingleProduct';

const cartState = {
    cart : [],
    product:{}
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartState,
    reducers : {
        addtocart: (state, action) => {
            state.cart.push(action.payload)
        },
        singleproduct : (state,action) =>{
            state.product = action.payload
        }
    },
});