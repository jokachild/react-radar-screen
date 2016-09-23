import find from "lodash/fp/find";
import reject from "lodash/fp/reject";
import round from "lodash/round";

import { DETECT, HIDE, ADD, REMOVE } from "../actions/points";
import cloneState from "../utils/cloneState";

var initialState = [];

const findPoint = (points, point) => find({id: point.id})(points);

export default function points(state = initialState, action = null) {

    switch(action.type) {

        case DETECT:
            return cloneState(state, (s) => {
                var point = findPoint(s, action.point);
                point && (point.visible = true);
                point.distance = round(action.radar.distance);
                point.bearing = round(action.radar.bearing);
                return s;
            });

        case HIDE:
            return cloneState(state, (s) => {
                var point = findPoint(s, action.point);
                point && (point.visible = false);
                return s;
            });

        case ADD:
            return cloneState(state, (s) => {
                s.push(action.point);
                return s;
            });

        case REMOVE:
            return cloneState(state, (s) => reject({id: action.id})(s));

        default:
            return state;
    }

}