
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import init from "./googleMap/init";
import ConnectedToolbar from "./components/Toolbar";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./demo.scss";

// TODO: remove bootstrap

render(
    <Provider store={store}>
        <ConnectedToolbar/>
    </Provider>,
    document.getElementById("toolbar")
);

init();