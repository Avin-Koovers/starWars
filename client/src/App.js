import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Login from './login/Login'



export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Route component={Login} path = "/login"/>
                    <Redirect to="/login"/>
                    
                </Router>
            </Fragment>
        );
    }
}