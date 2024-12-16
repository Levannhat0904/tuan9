import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Product {
        id: number,
        name: string,
        price: number,
        quantity: number
}
interface CartState {
        products: Product[]
}
const initialState: CartState = {
        products: [
                { id: 1, name: "smart phone", price: 1200, quantity: 1 },
                { id: 2, name: "Laptop", price: 1500, quantity: 2 },
                { id: 3, name: "Mouse", price: 1300, quantity: 3 },
        ]
}
export const cartSlice = createSlice({
        name: 'cart',
        // `createSlice` will infer the state type from the `initialState` argument
        initialState,
        reducers: {
                addProduct: (state, action: PayloadAction<Product>) => {
                        state.products.push(action.payload)
                },
                updateProduct: (state, action: PayloadAction<{ id: number; quatity: number }>) => {
                        const product = state.products.find((p) => p.id === action.payload.id)
                        if (product) {
                                product.quantity = action.payload.quatity;
                        }
                },
                deleteProduct: (state, action: PayloadAction<number>) => {
                        state.products = state.products.filter((p) => p.id !== action.payload)
                }
        }
})
export const { addProduct, updateProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer

