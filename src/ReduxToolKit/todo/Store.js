import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";
// import  from "./TaskSlice";


// const store=configureStore({
//      reducer:
//         TaskSlice
    
// })

// export default store;

const rootReducer = combineReducers({
    task:TaskSlice
  })
  const store = createStore(rootReducer)


  export default store;