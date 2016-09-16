
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import init from "./googleMap/init";
import Toolbar from "./components/Toolbar";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./demo.scss";

// TODO: usage tooltip

render(
    <Provider store={store}>
        <Toolbar/>
    </Provider>,
    document.getElementById("toolbar")
);

export default init;