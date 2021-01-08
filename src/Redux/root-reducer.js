import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer'
import directoryReducer from "./directory/directory.reducer";

// Firebase is persisting the user, so we don't need to persist it in our config
const persistConfig ={
    key:'root',
    storage,
    whitelist : ['cart','user']
}


const rootReducer = combineReducers ({
    user : userReducer,
    cart : cartReducer,
    directory: directoryReducer
    
});

export default persistReducer(persistConfig,rootReducer)