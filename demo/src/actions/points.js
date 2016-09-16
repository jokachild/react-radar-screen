
export const DETECT = "POINT_DETECT";
export const HIDE = "POINT_HIDE";

function detect(point) {
    return { type: DETECT, point };
}

function hide(point) {
    return { type: HIDE, point };
}

export default { detect, hide };