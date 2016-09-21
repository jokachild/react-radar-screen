
import uuid from "uuid";
import assign from "lodash/assign";
import cloneDeep from "lodash/cloneDeep";

import Geo, {deg2rad} from "./geo";

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
        orig: cloneDeep(p)
    });
};

export default CreatePoint;
