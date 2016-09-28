import React from "react";
import ReactDOM from "react-dom";
import Radar from "../src/index";

var center = { lat: 50.083702, lng: 14.434289, data: { name: "I'm here" } };

var points = [
    { id: "0", lat: 50.089543, lng: 14.412834, data: { name: "Bridge" } },
    { id: "1", lat: 50.083510, lng: 14.395006, data: { name: "Tower" } },
    { id: "2", lat: 50.092989, lng: 14.429555, data: { name: "Park" } },
    { id: "3", lat: 50.080977, lng: 14.409966, data: { name: "Island" } },
    { id: "4", lat: 50.087119, lng: 14.420635, data: { name: "Clock" }}
];

ReactDOM.render(
    <Radar pxRadius={200}
           geoRadius={2000}
           center={center}
           points={points}
           onDetect={(point, radar) => {
               window.console.log("Detected '%s'. Distance(m): %f. Bearing(deg): %f.",
                   point.data.name,
                   radar.distance,
                   radar.bearing
               );
           }}
    />,
    document.getElementById("radar")
);