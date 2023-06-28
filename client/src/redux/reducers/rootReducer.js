import { combineReducers } from "redux";

// reducers or storage units
import auth from "./auth/auth.reducer";
import userReducer from "./user/user.reducer";
const rootReducer = combineReducers({
  auth,userReducer
});

export default rootReducer;