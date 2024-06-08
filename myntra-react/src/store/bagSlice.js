import { createSlice } from "@reduxjs/toolkit"
const bagSlice = createSlice({
    name: "bag",
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload);
        },

        // PASSING ID INSTEAD OF WHOLE ITEM
        removeFromBag:(state, action)=>{
            return state.filter(itemId =>  itemId!== action.payload);
        }
        // when we are changing the state we do not return but when we are creating a new state we need to return
    }
});

export const bagAction = bagSlice.actions;
export default bagSlice;