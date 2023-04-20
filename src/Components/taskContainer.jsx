import { useSelector } from "react-redux"
import { Task } from "./task";
import { useEffect, useState } from "react";

const TaskContainer=({status})=>{
    // let tasks_data=useSelector(state=>state.tasks);
    let tasks_data=useSelector(state=>state.task);
    
    if(tasks_data==undefined){
        return(
            <h1>No tasks</h1>
        )
    }
    console.log(tasks_data)

    return(
        <div>
            <h4>{status} TASKS</h4>
            

            {                
                tasks_data.filter((i)=>i.status===status).map((i)=>(
                    <Task d={i.task_description}></Task>

                    
                ))
            }
        </div>
    )
}


export default TaskContainer;