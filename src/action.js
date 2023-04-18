import * as actions from "./actionTypes";

export const bugAdder=description=>({
    type:actions.BUG_ADDED,
    payload:{
     description:description
    }
})


export const bugRemover=id=>({
    type:actions.BUG_DELETED,
    payload:{
        id:id
    }

})


export const bugResolver=id=>({
    type:actions.BUG_RESOLVED,
    payload:{
        id:id
    }
})