
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataAdder } from "../Redux/pending/actions";
import { Task } from "./task";
import { pendingStore } from "../Redux/pending/store";

export const Adding_Form=()=>{


    const tasks_data=useSelector(state=>state.tasks);
    const dispatch=useDispatch();

    let input_element;
    let form_element;

    function SubmitHandler(event){
        dispatch(dataAdder(input_element.value));
        // console.log(input_element.value);
        event.preventDefault();
        console.log(pendingStore.getState());
        
        if(tasks_data==undefined){
            return;
        }
        
    }

    React.useEffect(()=>{
        input_element=document.getElementById("task");
        form_element=document.getElementById("form");

        form_element.addEventListener("submit",SubmitHandler);
    },[])



    return(
        <div>
        <form id="form">
            <h3>ADD A NEW TASK</h3>
            <input id="task"   type="text" name="new_task" placeholder="ENTER A NEW TASK"></input><br></br>
            <input  type="submit"></input>
        </form>
        
        
        </div>
        
    )



}



