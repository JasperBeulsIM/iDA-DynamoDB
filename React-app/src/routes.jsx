import React from "react";
import { Route, IndexRoute } from "react-router";

// Components
import App from "./components/App.jsx";
import HomePage from "./components/HomePage.jsx";
import Persons from "./components/Persons.jsx";

export default (
    <Route path="/" component={App}>
        <indexRoute component={HomePage}/>
        <Route path="Persons" component={Persons} />
    </Route>
);