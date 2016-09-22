import forEach from "lodash/fp/forEach";
import pick from "lodash/pick";

import Map from "./map";
import store from "../store";
import MapActions from "../actions/map";
import PointActions from "../actions/points";

function bindListeners() {
    var {getInstance, getMarkers, getCircle, removeMarker} = Map;

    forEach((marker) => (
        marker.addListener("dblclick", () => (
            store.dispatch(PointActions.remove(marker.uuid)) &&
            removeMarker(marker.uuid) &&
            marker.setMap(null))
        )
    ))(getMarkers());

    var circle = getCircle();
    circle.addListener("center_changed", () => {
        var position = circle.getCenter();
        getInstance().setCenter(position);
        store.dispatch(MapActions.setCenter(position.toJSON()));
    });

    circle.addListener("radius_changed", () => {
        store.dispatch(MapActions.setRadius(circle.getRadius()));
    });
}

export default function initMap() {
    const {map, points} = store.getState();
    var {getInstance, setInstance, setCircle, addMarker} = Map;

    setInstance(
        new google.maps.Map(document.getElementById("map"), {
            center: pick(map.center, ["lat", "lng"]),
            zoom: 14
        })
    );

    setCircle(
        new google.maps.Circle({
            strokeColor: "#43A94E",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#43A94E",
            fillOpacity: 0.25,
            map: getInstance(),
            center: map.center,
            radius: map.radius,
            editable: true
        })
    );

    forEach((point) => (
        addMarker(
            new google.maps.Marker({
                map: getInstance(),
                position: pick(point, ["lat", "lng"]),
                title: point.data.name,
                uuid: point.id
            })
        )
    ))(points);

    bindListeners();
}