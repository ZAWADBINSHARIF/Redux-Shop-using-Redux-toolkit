import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: function () {
        return JSON.parse(localStorage.getItem('productsCart')) || []
    },
    reducers: {
        add(state, action) {
            state.push(action.payload)
            localStorage.setItem('productsCart', JSON.stringify(state))
        },
        remove(state, action) {
            state = state.filter(item => item.uniqueID !== action.payload)
            localStorage.setItem('productsCart', JSON.stringify(state))
            return state
        }
    }
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer