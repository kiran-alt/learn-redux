import { createStore } from "redux";
import { reducer } from "./reducer";

export const pendingStore=createStore(reducer);

