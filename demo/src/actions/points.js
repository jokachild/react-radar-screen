
export const DETECT = "POINT_DETECT";
export const HIDE = "POINT_HIDE";

function detect(point, radar) {
    return { type: DETECT, point, radar };
}

function hide(point) {
    return { type: HIDE, point };
}

export default { detect, hide };