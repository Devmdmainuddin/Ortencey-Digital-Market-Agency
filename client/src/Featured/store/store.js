import { configureStore } from '@reduxjs/toolkit'
import { productApi } from "../ProductAPI/productApi";
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from '../CartAPI/cartSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware,),
})



setupListeners(store.dispatch); 