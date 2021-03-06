import { combineReducers } from "redux";
import { authReducer } from "./auth";

//combined multiple reducer
const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
