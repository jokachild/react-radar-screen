import {combineReducers} from "redux";
import map from "./map";
import points from "./points";

export default combineReducers({
    map,
    points
});