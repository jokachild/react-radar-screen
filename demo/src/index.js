
import React from "react";
import ReactDOM from "react-dom";
import _map from "lodash/fp/map";
import pick from "lodash/pick";
import Radar from "../../src/index";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./demo.scss";

var center = {lat: 46.481631, lng: 30.732226};
var points = [
    {lat: 46.492778, lng: 30.747841, data: { name: "Home" }},
    {lat: 46.481226, lng: 30.738485, data: { name: "Mountain" }},
    {lat: 46.470236, lng: 30.730643, data: { name: "Forest" }},
    {lat: 46.464879, lng: 30.706502, data: { name: "River" }}
];

ReactDOM.render(
    <Radar pxRadius={200}
           geoRadius={2000}
           center={center}
           points={points}
           onDetect={(point) => {
               window.console.log("Detected '%s'. Distance(m): %f. Bearing(deg): %f.",
                   point.data.name, point.distance, point.bearing);
           }}
    />,
    document.getElementById("radar")
);

window.init = () => {

    var map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 14
    });

    new google.maps.Marker({
        map: map,
        position: center,
        title: "I'm here"
    });

    _map((point) => (
        new google.maps.Marker({
            map: map,
            position: pick(point, ["lat", "lng"]),
            title: point.data.name
        })
    ))(points);

    new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.25,
        map: map,
        center: center,
        radius: 2000
    });
};