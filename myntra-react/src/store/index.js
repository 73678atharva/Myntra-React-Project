import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "../store/itemSlice"
import fetchStatusSlice from '../store/fetchStatusSlice'
import bagSlice from "./bagSlice"

const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag:bagSlice.reducer
    }
});


export default myntraStore