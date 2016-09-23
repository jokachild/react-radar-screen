
export const DETECT = "POINT_DETECT";
export const HIDE = "POINT_HIDE";
export const ADD = "POINT_ADD";
export const REMOVE = "POINT_REMOVE";

function detect(point, radar) {
    return { type: DETECT, point, radar };
}

function hide(point) {
    return { type: HIDE, point };
}

function add(point) {
    return { type: ADD, point };
}

function remove(id) {
    return { type: REMOVE, id };
}

export default { detect, hide, add, remove };