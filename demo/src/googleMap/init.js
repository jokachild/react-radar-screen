import assign from "lodash/assign";
import forEach from "lodash/fp/forEach";
import pick from "lodash/pick";
import uuid from "uuid";

import Map from "./map";
import store from "../store";
import MapActions from "../actions/map";
import PointActions from "../actions/points";
var addMarkerTpl = require("raw!./add-marker.html");

function bindListeners() {
    var {getInstance, getMarkers, getCircle, addMarker, removeMarker} = Map;

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

    // Add Marker InfoWindow
    var container = document.querySelector("#new-marker");
    forEach(obj => obj.addListener("click", (event) => {
        container.innerHTML = addMarkerTpl;
        var title = container.querySelector("input");
        var info = new google.maps.InfoWindow({
            content: container.querySelector("form")
        });
        container.querySelector("button").addEventListener("click", () => {
            if (title.value) {
                marker.setTitle(title.value);
                addMarker(marker);
                store.dispatch(PointActions.add(
                    assign({
                        id: marker.uuid,
                        data: {
                            name: title.value
                        }
                    }, marker.getPosition().toJSON())
                ));
                // TODO: remove duplicated logic
                marker.addListener("dblclick", () => (
                    store.dispatch(PointActions.remove(marker.uuid)) &&
                    removeMarker(marker.uuid) &&
                    marker.setMap(null))
                );
                info.close();
            }
        });
        var marker = new google.maps.Marker({
            map: getInstance(),
            position: event.latLng.toJSON(),
            title: "Asd",
            uuid: uuid()
        });
        info.addListener("closeclick", () => marker.setMap(null));
        info.open(getInstance(), marker);

    }))([getInstance(), getCircle()]);
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