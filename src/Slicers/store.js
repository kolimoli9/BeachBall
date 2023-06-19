import {configureStore} from '@reduxjs/toolkit';
import ballReducer from './ballSlicer'
export const store = configureStore({
    reducer:{
        ball:ballReducer
}});