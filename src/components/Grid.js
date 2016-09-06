
import React from "react";
import map from "lodash/fp/map";

const style = {
    stroke: "#43A94E",
    fill: "transparent",
    strokeWidth: ".5",
    shapeRendering: "geometricPrecision"
};

const Grid = (props) => (
    <g className="grid">
        {
            map((r) => (
                <circle cx={props.radius}
                        cy={props.radius}
                        r={props.radius * r}
                        key={r}
                        style={style}/>
            ))([1/4, 1/2, 1/4*3, 1])
        }
    </g>
);

Grid.propTypes = {
    radius: React.PropTypes.number.isRequired
};

export default Grid;
