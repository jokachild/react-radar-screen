
const R = 6371.008;

var deg2rad = (deg) => (deg * Math.PI / 180);
var rad2deg = (rad) => (rad * 180 / Math.PI);

var Geo = {
    distanceTo: function distanceTo(p) {
        return Math.acos(
                Math.sin(this.lat) * Math.sin(p.lat) +
                Math.cos(this.lat) * Math.cos(p.lat) * Math.cos(this.lng - p.lng)
            ) * R;
    },
    bearingTo: function bearingTo(p) {
        return Math.atan2(
            Math.sin(p.lng - this.lng) * Math.cos(p.lat),
            Math.cos(this.lat) * Math.sin(p.lat) - Math.sin(this.lat) * Math.cos(p.lat) * Math.cos(p.lng - this.lng)
        );
    }
};

export {deg2rad, rad2deg};
export default Geo;
