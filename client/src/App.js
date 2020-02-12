import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Login from './login/Login'
import swApp from './planet/index'
import { createBrowserHistory } from "history";


const history = createBrowserHistory();


export default class App extends Component {

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <Route exact path = "/login" component={Login} />
                    <Redirect to="/login"/>
        <Route exact path = "/app" component={swApp} />
                </Router>
            </Fragment>
        );
    }
}