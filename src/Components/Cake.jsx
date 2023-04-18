import { useDeferredValue } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BuyCake } from "../Redux/cake/cakeActions";

export const Cake=()=>{
    const numberOfCakes=useSelector(state=>state.numberOfCakes)
    const dispatc=useDispatch();
    return(
        <div>
            <h3>Number of cakes - {numberOfCakes}</h3>
            <button onClick={()=>dispatc(BuyCake())}>Buy cake</button>
        </div>
    )
}


