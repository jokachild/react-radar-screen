
import React from "react";
import map from "lodash/fp/map";

import Grid from "./Grid";
import Indicator from "./Indicator";
import Point from "./Point";

import {preparePoints, prepareIndicator} from "../utils/helper";

/**
 * TODO: beep, callbacks
 */

class Radar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            angle: 0,
            indicator: prepareIndicator(props.pxRadius, props.indicatorAngle),
            points: preparePoints(props)
        };
        this._onDetect = this._onDetect.bind(this);
    }

    render() {
        const {pxRadius} = this.props;
        const {angle, indicator, points} = this.state;
        var radius = +pxRadius;
        return (
            <div className="radar-screen">
                <svg width={radius * 2} height={radius * 2} style={{backgroundColor: "#1F2420"}}>
                    <Grid radius={radius}/>
                    <Indicator angle={angle}
                               d={indicator}
                               radius={radius}/>
                    <g className="points">
                        {
                            map((point) => (
                                <Point key={"" + point.distance + point.bearing}
                                       data={point}
                                       visible={point.bearing <= angle - 5 && point.bearing >= angle - 50}
                                       onDetect={this._onDetect}/>
                            ))(points)
                        }
                    </g>
                </svg>
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            var angle = this.state.angle + 1;
            angle = angle == 360 ? 0 : angle;
            this.setState({angle: angle});
        }, 50);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentWillReceiveProps(nextProps) {
        this.state = {
            indicator: prepareIndicator(nextProps.pxRadius, nextProps.indicatorAngle),
            points: preparePoints(nextProps)
        };
    }

    _onDetect(point) {
        this.props.onDetect(point.getData());
    }
}

const PointType = React.PropTypes.shape({
    lat: React.PropTypes.number.isRequired,
    lng: React.PropTypes.number.isRequired
});

Radar.PropTypes = {
    pxRadius: React.PropTypes.number,
    geoRadius: React.PropTypes.number.isRequired,
    center: PointType.isRequired,
    points: React.PropTypes.arrayOf(PointType),
    onDetect: React.PropTypes.func,
    indicatorAngle: React.PropTypes.number // TODO: limit max angle
};

Radar.defaultProps = {
    pxRadius: 100,
    onDetect: () => {},
    indicatorAngle: 45
};

export default Radar;
