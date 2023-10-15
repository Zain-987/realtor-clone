import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import  userReducer  from './UserSlice';

const persistConfig = {
    key: 'root',
    storage,
  }


  const persistedReducer = persistReducer(persistConfig, userReducer)


  
export const store = configureStore({ reducer: persistedReducer , middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck : false}) })

export const persistor = persistStore(store);