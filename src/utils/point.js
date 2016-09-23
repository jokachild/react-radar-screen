
import assign from "lodash/assign";

import Geo, {deg2rad} from "./geo";
import uuid from "./uuid";

var Point = assign({}, Geo, {
    getData: function getData() {
        return {
            point: this.orig,
            radar: {
                distance: this.distance,
                bearing: this.bearing
            }
        };
    }
});

var CreatePoint = function(p) {
    return assign(Object.create(Point), {
        id: p.id || uuid(),
        lat: deg2rad(p.lat),
        lng: deg2rad(p.lng),
        orig: p
    });
};

export default CreatePoint;
