import { configureStore } from '@reduxjs/toolkit'

import Auth from '../redux/auth.jsx'

const Store = configureStore({
    reducer:{
        auth: Auth 
        // cart: cartSlice
    }
})

export default Store