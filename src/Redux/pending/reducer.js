import { actions } from "./actionTypes";

// export type TasksType={
//     task_description: String;
//     status:"pending"|"done"|"pause"|"delete";
// }

const initial_state={
    tasks:[]
    // tasks:[{task_description:"",status:""}]
}

export const reducer=(state=initial_state,action)=>{
    switch(action.type){
        case actions.ADD_DATA:
            return({
                ...state,tasks:[
                    ...state.tasks,{task_description:action.payload.data,status:"PENDING"}
                ]
            })
        
        case actions.MARK_AS_DONE:
            return({
                ...state,tasks:
                    state.tasks.map(i=>{
                        
                        if(i.task_description==action.payload.data){
                            return {...i,status:"DONE"};
                        }else{
                            return i;
                        }
                    })
                
            })

        default:return state;
    }
}