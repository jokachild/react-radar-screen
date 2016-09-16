import {createStore} from "redux";
import forEach from "lodash/fp/forEach";
import uuid from "uuid";

import rootReducer from "./reducers/index";

export default createStore(rootReducer, {
    center: { lat: 46.481631, lng: 30.732226, data: { id: uuid(), name: "I'm here" }},
    points: forEach((point) => point.data.id = uuid())([
        {lat: 46.492778, lng: 30.747841, data: { name: "Home" }},
        {lat: 46.481226, lng: 30.738485, data: { name: "Mountain" }},
        {lat: 46.470236, lng: 30.730643, data: { name: "Forest" }},
        {lat: 46.464879, lng: 30.706502, data: { name: "River" }}
    ])
}, window.devToolsExtension && window.devToolsExtension());