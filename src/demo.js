
import React from "react";
import ReactDOM from "react-dom";
import Radar from "./index";

var center = {lat: 46.481631, lng: 30.732226};
var points = [
    {lat: 46.492778, lng: 30.747841, data: { name: "Home" }},
    {lat: 46.481226, lng: 30.738485, data: { name: "Mountain" }},
    {lat: 46.470236, lng: 30.730643, data: { name: "Forest" }},
    {lat: 46.464879, lng: 30.706502, data: { name: "River" }}
];

ReactDOM.render(
    <Radar pxRadius={100}
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
