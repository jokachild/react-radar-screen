import {createStore} from "redux";
import forEach from "lodash/fp/forEach";
import uuid from "uuid";

import rootReducer from "./reducers/index";

export default createStore(rootReducer, {
    map: {
        center: {
            id: uuid(),
            lat: 50.083702,
            lng: 14.434289,
            data: { name: "I'm here" }
        },
        radius: 2000
    },
    points: forEach((point) => point.id = uuid())([
        {lat: 50.083132, lng: 14.462187, data: { name: "2000" }},
        {lat: 50.089543, lng: 14.412834, data: { name: "Bridge" }},
        {lat: 50.083510, lng: 14.395006, data: { name: "Tower" }},
        {lat: 50.092989, lng: 14.429555, data: { name: "Park" }},
        {lat: 50.080977, lng: 14.409966, data: { name: "Island" }},
        {lat: 50.087119, lng: 14.420635, data: { name: "Astronomical Clock" }}
    ])
}, window.devToolsExtension && window.devToolsExtension());