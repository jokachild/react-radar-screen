import {combineReducers} from "redux";
import center from "./center";
import points from "./points";

export default combineReducers({
    center,
    points
});