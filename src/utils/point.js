
import assign from "lodash/assign";
import cloneDeep from "lodash/cloneDeep";

import Geo, {deg2rad} from "./geo";

var Point = assign({}, Geo, {
    getData: function getData() {
        return {
            lat: this.orig.lat,
            lng: this.orig.lng,
            data: cloneDeep(this.orig.data),
            distance: this.distance,
            bearing: this.bearing
        };
    }
});

var CreatePoint = function(p) {
    return assign(Object.create(Point), {
        lat: deg2rad(p.lat),
        lng: deg2rad(p.lng),
        orig: p
    });
};

export default CreatePoint;
