import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import WantJob from './Components/WantJob/WantJob';


class Route extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contactUs" component={ContactUs} />
                        <Route exact path="/wantJob" component={WantJob} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Route;