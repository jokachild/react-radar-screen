
var Map = {
    instance: {},
    circle: {},
    markers: {}
};

function getInstance() {
    return Map.instance;
}

function setInstance(instance) {
    Map.instance = instance;
}

function getCircle() {
    return Map.circle;
}

function setCircle(circle) {
    Map.circle = circle;
}

function getMarkers() {
    return Map.markers;
}

function addMarker(marker) {
    Map.markers[marker.uuid] = marker;
}

function removeMarker(uuid) {
    return delete Map.markers[uuid];
}

export default {
    getInstance, setInstance,
    getCircle, setCircle,
    getMarkers, addMarker, removeMarker
};