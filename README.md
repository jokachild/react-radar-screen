# React Radar Screen

## Installation

```
npm install react-radar-screen --save
```

## Basic Usage

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Radar from "react-radar-screen";

var center = { lat: 50.083702, lng: 14.434289, data: { name: "I'm here" } };

var points = [
    { id: "#id", lat: 50.089543, lng: 14.412834, data: { name: "Bridge" } },
    { id: "#id", lat: 50.083510, lng: 14.395006, data: { name: "Tower" } },
    { id: "#id", lat: 50.092989, lng: 14.429555, data: { name: "Park" } },
    { id: "#id", lat: 50.080977, lng: 14.409966, data: { name: "Island" } },
    { id: "#id", lat: 50.087119, lng: 14.420635, data: { name: "Clock" }}
];

ReactDOM.render(
    <Radar pxRadius={100}
           geoRadius={2000}
           center={center}
           points={points}
           onDetect={(point, radar) => {
               console.log("Detected '%s'. Distance(m): %f. Bearing(deg): %f.",
                   point.data.name,
                   radar.distance,
                   radar.bearing
               );
           }}
     />,
    document.getElementById("radar")
);
```

## Props

| Prop        | Type           | Description  |
| :---------- | :--------------| :------------ |
| `pxRadius`  | *Number*       | Screen size in pixels. |
| `geoRadius` | *Number*       | Scanned range radius in meters. |
| `center`    | *Object*       | Center point coordinates. |
| `points`    | *Array*        | Points to be rendered on screen. |
| `onDetect`  | *Function*     | Callback to be called once point is detected. Argumnets: <br>`point` - original point object<br> `radar` - object which contains radar measuremens (distance and bearing)|


## Point object
Point's `id` property if set must have unique value (e.g. uuid). It is not mandatory.
If not provided component will generate ids for it's internal needs.