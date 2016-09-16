import map from "lodash/fp/map";
import pick from "lodash/pick";

import gMap from "./map";
import store from "../store";

export default () => {

    const {center, points} = store.getState();

    gMap.map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 14
    });

    gMap.center = new google.maps.Marker({
        map: gMap.map,
        position: center,
        title: center.data.name
    });

    gMap.points = map((point) => (
        new google.maps.Marker({
            map: gMap.map,
            position: pick(point, ["lat", "lng"]),
            title: point.data.name
        })
    ))(points);

    gMap.circle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.25,
        map: gMap.map,
        center: center,
        radius: 2000
    });
};