import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../Components/features/UserSlice";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  composeWithDevTools(applyMiddleware())
)


export default store;

export  const  storelinkedIn= configureStore({
  reducer:{
    user:userReducer,
  },
     });


     