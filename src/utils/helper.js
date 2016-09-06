
import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import assign from "lodash/assign";
import round from "lodash/round";

import {rad2deg, deg2rad} from "./geo";
import CreatePoint from "./point";

const preparePoints = (props) => {
    const {pxRadius, geoRadius, center, points} = props;
    var c = CreatePoint(center);
    var scale = pxRadius / geoRadius;
    return flow(
        map(CreatePoint),
        map((point) => {
            var bearing = c.bearingTo(point);
            var distance = round(c.distanceTo(point) * 1000, 3);
            var bearingDeg = round(rad2deg(bearing), 3);
            return assign(point, {
                distance: distance,
                bearing: bearingDeg > 0 ? bearingDeg : 360 + bearingDeg,
                X: +pxRadius + distance * scale * Math.sin(bearing),
                Y: +pxRadius - distance * scale * Math.cos(bearing)
            });
        }),
        filter((point) => (point.distance < geoRadius))
    )(points);
};

// TODO: 1 px correction
const prepareIndicator = (radius, angle) => (
    "M %R %R L %R 0 A%R %R 0 0 0 %DX %DY L%DX %R Z"
        .replace(/%R/g, radius.toString())
        .replace(/%DX/g, (radius - radius * Math.sin(deg2rad(angle))).toString())
        .replace(/%DY/g, (radius - radius * Math.cos(deg2rad(angle))).toString())
);

export {preparePoints, prepareIndicator};
