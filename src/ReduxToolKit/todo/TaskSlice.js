import { createSlice } from "@reduxjs/toolkit";

const TaskSlice=createSlice({
    name:"task",
    initialstate:[],
    reducers:{
        addData:(state,action)=>{
            state.push({taskDescription:action.payload,status:"PENDING"});
        },
        marker:(state,action)=>{
            for(let i=0;i<state.length;i++){
                if(state[i].taskDescription===action.payload){
                    state[i].status="DONE";
                }
            }
        }
    }
})

export const {addData,marker}=TaskSlice.actions; 

export default TaskSlice.reducer;