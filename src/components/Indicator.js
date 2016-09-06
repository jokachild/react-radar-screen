
import React from "react";

const style = {
    indicator: {
        shapeRendering: "geometricPrecision"
    }
};

const green = "#43A94E";

const transform = (angle, cx, cy) => (
    "rotate(angle, cx, cy)"
        .replace(/angle/, angle)
        .replace(/cx/, cx)
        .replace(/cy/, cy)
);

const Indicator = (props) => (
    <g className="indicator">
        <defs>
            <linearGradient id="indicator" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" offset="0%" stopColor="transparent"/>
                <stop id="stop2" offset="30%" stopColor="transparent"/>
                <stop id="stop3" offset="100%" stopColor={green}/>
            </linearGradient>
        </defs>
            <path d={props.d}
              transform={transform(props.angle, props.radius, props.radius)}
              fill="url(#indicator)"
              style={style.indicator}
        />
    <circle cx={props.radius} cy={props.radius} r={props.centerSize} fill={green}/>
    </g>
);

Indicator.propTypes = {
    angle: React.PropTypes.number.isRequired,
    centerSize: React.PropTypes.number,
    d: React.PropTypes.string.isRequired,
    radius: React.PropTypes.number.isRequired
};

Indicator.defaultProps = {
    centerSize: 3
};

export default Indicator;
