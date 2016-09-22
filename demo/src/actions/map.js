
export const SET_CENTER = "MAP_SET_CENTER";
export const SET_RADIUS = "MAP_SET_RADIUS";

function setCenter(position) {
    return { type: SET_CENTER, position };
}

function setRadius(radius) {
    return { type: SET_RADIUS, radius };
}

export default { setCenter, setRadius };