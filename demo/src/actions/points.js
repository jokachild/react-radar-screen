
export const DETECT = "POINT_DETECT";
export const HIDE = "POINT_HIDE";
export const REMOVE = "POINT_REMOVE";

function detect(point, radar) {
    return { type: DETECT, point, radar };
}

function hide(point) {
    return { type: HIDE, point };
}

function remove(id) {
    return { type: REMOVE, id };
}

export default { detect, hide, remove };