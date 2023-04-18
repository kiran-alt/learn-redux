import {actions} from "./cakeActionTypes";

const initialState={
    numberOfCakes:10
}


export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actions.BUY_CAKE:
            return({
                ...state,numberOfCakes:state.numberOfCakes-1
            })
        default:
            return state
    }
}

