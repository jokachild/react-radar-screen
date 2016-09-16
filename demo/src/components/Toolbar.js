
import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PointActions from "../actions/points";
import Radar from "../../../src/index";
import Points from "./Points";

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.onDetectPoint = this.onDetectPoint.bind(this);
    }

    render() {
        const {center, points} = this.props;
        return (
            <div className="container-fluid">
                <div>
                    <h3>React Radar Screen Demo</h3>
                </div>
                <div className="text-center">
                    <Radar pxRadius={200}
                           geoRadius={2000}
                           center={center}
                           points={points}
                           onDetect={this.onDetectPoint}
                    />
                </div>
                <Points points={points}/>
            </div>
        );
    }

    onDetectPoint(point) {
        const { pointActions } = this.props;
        pointActions.detect(point);
        setTimeout(() => pointActions.hide(point), 5000);
    }
}

Toolbar.propTypes = {
    center: PropTypes.object.isRequired,
    points: PropTypes.array.isRequired
};

Toolbar.defaultProps = {
    points: []
};

const mapStateToProps = (state) => {
    return {
        center: state.center,
        points: state.points
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pointActions: bindActionCreators(PointActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);
