import { actions } from "./actionTypes";


const initial_state={
    tasks:[{task_description:"",pending:true}]
}

export const reducer=(state=initial_state,action)=>{
    switch(action.type){
        case actions.ADD_DATA:
            return({
                ...state,tasks:[
                    ...state.tasks,{task_description:action.payload.data,pending:true}
                ]
            })
        
        case actions.MARK_AS_DONE:
            return({
                ...state,tasks:[
                    state.tasks.map(i=>{
                        
                        if(i.task_description==action.payload.data){
                            return {...i,pending:false};
                        }else{
                            return i;
                        }
                    })
                ]
            })

        default:return state;
    }
}