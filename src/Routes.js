import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import WantJob from './Components/WantJob/WantJob';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ApplyJob from './Components/ApplyJob/ApplyJob';
import ServicesForClients from './Components/ServicesForClients/ServicesForClients';
import ServicesForCandidates from './Components/ServicesForCandidates/ServicesForCandidates';
import SeachJob from './Components/SearchJob/SearchJob';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import HomeHeader from './Components/Home/HomeHeader/HomeHeader';
import Clients from './Components/Clients/Clients';

class Routes extends Component {
  render() {
    return (
      <Router>
        {window.location.pathname === "/" ? <HomeHeader /> : <Header />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/wantjob" component={WantJob} />
          <Route exact path="/about" component={About} />
          <Route exact path="/applyJob" component={ApplyJob} />
          <Route exact path="/servicesforclients" component={ServicesForClients} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/servicesforcandidates" component={ServicesForCandidates} />
          <Route exact path="/searchJob" component={SeachJob} />
          <Route exact path="/whyChooseUs" component={WhyChooseUs} />
          <Route exact path="*" component={PageNotFound} />


        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default Routes
