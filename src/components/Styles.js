
import React from "react";

import ENV from "../utils/env";
import css from "./styles/radar.scss";


class Styles extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = () => false;
    }

    render() {
        return (
            <style>{ENV === "production" ? css.toString() : ""}</style>
        );
    }
}

export default Styles;
