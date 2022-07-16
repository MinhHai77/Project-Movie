import { combineReducers } from "redux";
import banner from "./banner";
import listMovie from "./listMovie";
import navbar from "./navbar";
import listLogo from "./showTime";
const rootReducer = combineReducers({
  nav: navbar,
  ban: banner,
  movie: listMovie,
  show: listLogo,
});
export default rootReducer;
