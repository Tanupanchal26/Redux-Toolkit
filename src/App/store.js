// import { configureStore } from "@reduxjs/toolkit";
// import countReducer from'../feature/countSlice.js'
// import todoReducer from'../feature/TodoSlice.js'

//  const store = configureStore({
//     reducer:{
//         count: countReducer,
//         todo:todoReducer
//     }
//  }) 
//  export default store



import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../feature/studentSlice';
 const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;