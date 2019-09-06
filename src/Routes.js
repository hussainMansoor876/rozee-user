import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import WantJob from './Components/WantJob/WantJob';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
        <Router>
            <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contactUs" component={ContactUs} />
            <Route exact path="/wantjob" component={WantJob} />
        </Switch>
        <Footer />
    </Router>
    )
  }
}

export default Routes
