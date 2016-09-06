
import React from "react";
import assign from "lodash/assign";

var style = {
    show: {
        transitionProperty: "opacity",
        fill: "#73AE8A",
        shapeRendering: "geometricPrecision"
    },
    fadeIn: {
        transitionDuration: "1s",
        opacity: 1
    },
    fadeOut: {
        transitionDuration: "3s",
        opacity: 0
    },
    hide: {
        fill: "transparent",
        opacity: 0
    }
};

class Point extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: style.hide
        };
    }
    render() {
        return (
            <circle cx={this.props.data.X}
                    cy={this.props.data.Y}
                    r={this.props.size}
                    style={this.state.style}
            />
        );
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.visible && nextProps.visible != this.props.visible) {
            this.setState({
                style: assign({}, style.show, style.fadeIn)
            });
            this.props.onDetect(this.props.data);
        } else if (!nextProps.visible && nextProps.visible != this.props.visible) {
            this.setState({
                style: assign({}, style.show, style.fadeOut)
            });
        }
    }
}

Point.propTypes = {
    data: React.PropTypes.shape({
        X: React.PropTypes.number.isRequired,
        Y: React.PropTypes.number.isRequired,
        distance: React.PropTypes.number.isRequired,
        bearing: React.PropTypes.number.isRequired
    }).isRequired,
    size: React.PropTypes.number,
    visible: React.PropTypes.bool.isRequired,
    onDetect: React.PropTypes.func.isRequired
};

Point.defaultProps = {
    size: 5
};

export default Point;
