
import assign from "lodash/assign";
import cloneState from "../utils/cloneState";
import {SET_CENTER, SET_RADIUS} from "../actions/map";

var initialState = {
    center: {
        lat: 0,
        lng: 0,
        data: {
            name: ""
        }
    },
    radius: 1000
};

export default function center(state = initialState, action = null) {

    switch(action.type) {

        case SET_CENTER:
            return cloneState(state, (s) => {
                assign(s.center, action.position);
                return s;
            });

        case SET_RADIUS:
            return cloneState(state, (s) => {
                s.radius = action.radius;
                return s;
            });

        default:
            return state;
    }

}