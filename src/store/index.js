import recordsReducer from '../Components/Table/TableBody/TableSlice'
import {configureStore } from '@reduxjs/toolkit'



export default configureStore({
    reducer:{
        records: recordsReducer
    }
        
})
