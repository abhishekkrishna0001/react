import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action) => {
            state.items.push(action.payload);
        },
        removeItem:(state) => {
            state.items.pop();
        },
        clearCart:(state) => {
            // console.log(state);
            // console.log(current(state));
            //state.items=[];
            //return {items:[]};
            state.items.length=0;
        }

    }
});

//cartSlice {actions:{},reducer}

export default cartSlice.reducer;
export const{addItem,removeItem,clearCart} = cartSlice.actions;