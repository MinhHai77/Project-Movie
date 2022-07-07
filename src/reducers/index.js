import { combineReducers } from "redux";
import banner from "./banner";
import navbar from "./navbar";
const rootReducer = combineReducers({
  nav: navbar,
  ban: banner,
});
export default rootReducer;
