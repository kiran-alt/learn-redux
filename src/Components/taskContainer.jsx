import { useSelector } from "react-redux"
import { Task } from "./task";
import { useEffect, useState } from "react";

const TaskContainer=(props)=>{
    let tasks_data=useSelector(state=>state.tasks);
    
    if(tasks_data==undefined){
        return(
            <h1>No tasks</h1>
        )
    }
    
    return(
        <div>
            <h4>{props.type} TASKS</h4>
            

            {
                tasks_data.map((i)=>{
                    if(props.type=="PENDING"){
                        if(i.pending==true){
                            return(
                                <Task d={i.task_description}></Task>
                            );
                        }
                    }else if(props.type=="DONE"){
                        if(i.pending==false){
                            return(
                                <Task d={i.task_description}></Task>

                            );
                        }
                    }
                })
            }
        </div>
    )
}


export default TaskContainer;