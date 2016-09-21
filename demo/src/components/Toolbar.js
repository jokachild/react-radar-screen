
import React, { Component, PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import PointActions from "../actions/points";
import Radar from "../../../src/index";
import Points from "./Points";

// TODO: usage tooltip

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.handleDetectPoint = this.handleDetectPoint.bind(this);
    }

    render() {
        const {center, points} = this.props;
        return (
            <div className="toolbar container-fluid">
                <div>
                    <h3>React Radar Screen Demo</h3>
                </div>
                <div className="text-center">
                    <Radar pxRadius={200}
                           geoRadius={2000}
                           center={center}
                           points={points}
                           onDetect={this.handleDetectPoint}
                    />
                </div>
                <Points points={points}/>
            </div>
        );
    }

    handleDetectPoint(point, radar) {
        const { pointActions } = this.props;
        pointActions.detect(point, radar);
        setTimeout(() => pointActions.hide(point), 5000);
    }
}

Toolbar.propTypes = {
    center: PropTypes.object.isRequired,
    points: PropTypes.array.isRequired
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
