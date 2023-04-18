import { actions } from "./actionTypes"


export const dataAdder=(data)=>{
    return({
        type:actions.ADD_DATA,
        payload:{
            data:data
        }
    })
}

export const taskMarker=(data)=>{
    return({
        type:actions.MARK_AS_DONE,
        payload:{
            data:data
        }
    })
}