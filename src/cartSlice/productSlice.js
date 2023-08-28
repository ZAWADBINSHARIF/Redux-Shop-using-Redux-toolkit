import { createSlice } from "@reduxjs/toolkit"

export const STATUS = Object.freeze({
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }

    }
})

export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING))

        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(setProducts(data))
            dispatch(setStatus(STATUS.IDLE))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR))
        }

    }
}