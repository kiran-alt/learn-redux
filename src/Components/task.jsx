import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { taskMarker } from "../Redux/pending/actions";

export const Task=(props)=>{

    const dispatch=useDispatch();

    const marker=()=>{
        console.log("Clicked on "+props.d)
        dispatch(taskMarker(props.d));
    }

    

    return(
        <div>
            
            <span>{props.d}</span>
            <span><button onClick={marker}>MARK AS DONE</button></span>
            
        </div>
    )
}

