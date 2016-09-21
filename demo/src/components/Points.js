
import React, { Component, PropTypes } from "react";
import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import sortBy from "lodash/fp/sortBy";

class Points extends Component {
    render() {
        const {points} = this.props;
        return (
            <div className="points-table">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="col-md-6">Name</th>
                        <th className="col-md-3">Distance (m)</th>
                        <th className="col-md-3">Bearing (deg)</th>
                    </tr>
                    </thead>
                    <tbody>{renderPoints(points)}</tbody>
                </table>
            </div>
        );
    }
}

const renderPoints = (points) => flow(
    filter((point) => point.visible),
    sortBy(["distance"]),
    map((point) => (
        <tr key={point.id}>
            <td className="col-md-6">{point.data.name}</td>
            <td className="col-md-3">{point.distance}</td>
            <td className="col-md-3">{point.bearing}</td>
        </tr>
    ))
)(points);

Points.propTypes = {
    points: PropTypes.array
};

Points.defaultProps = {
    points: []
};

export default Points;
