/*eslint-disable */

import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class About extends Component {
  render() {

    return (
      <div className="site-wrap">
        {/* <div style={{ height: '50px', backgroundColor: 'white' }} /> */}
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/aboutus1.jpg")' }}>
          <div className="container text-center">
            <h2 className="mb-0">About Us</h2>
            <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>About Us</span></p>
          </div>
        </div>
        <div className="site-section" data-aos="fade">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-5 mb-md-0">
                <div className="img-border">
                  <img src="images/aboutus2.jpg" height="200px" alt="Image" className="img-fluid rounded" />
                </div>
              </div>
              <div className="col-md-5 ml-auto">
                <div className="text-left mb-5 section-heading">
                  <h2>About Us</h2>
                </div>
                <p className="mb-4 h5 font-italic lineheight1-5">247 IT International is an expert-level IT recruitment company motivated by the rapid global growth of the technology based industry. We specialise in the placement of IT based roles to top organisations across the world, from start-ups to blue-chip companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section" data-aos="fade">
          <div className="container-fluid">
            <div className="row text-center">


              <div className="col-md-6 flexer" style={{ backgroundColor: '#DCDCDC' }}>
                <p className="h5 lineheight1-5">
                  <ul style={{ listStyleType: 'none' }}>
                    <li>
                      We promise our clients short-term expenses with long-term profit.
                    </li>
                    <br />
                    <li>
                      Our credo is to introduce to our clients a selection of IT professionals within a very short time, who not only meet your requirements profiles, but exceed it.
                    </li>
                    <br />
                    <li>
                      We have a competent network that covers all desired IT fields. From SAP consultants to JAVA developers to project managers, our clients will find IT professionals from junior to senior level.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6 mb-5 mb-md-0 " style={{ right: '0', margin: '0', padding: '0' }}>
                <div className="img-border ">
                  <img src="images/aboutus3.jpg" style={{ width: '100%' }} alt="Image" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-md-6 mb-5 mb-md-0 " style={{ right: '0', margin: '0', padding: '0' }}>
                <div className="img-border ">
                  <img src="images/aboutus4.jpg" style={{ width: '100%' }} alt="Image" className="img-fluid rounded" />
                </div>
              </div>
              <div className="col-md-6 flexer " style={{ backgroundColor: '#DCDCDC', }}>
                <p className="h5 lineheight1-5">
                  <ul style={{ listStyleType: 'none' }}>
                    <li>
                      Our internal sourcing and recruiting teams aim is to make searching for our clients easier.
                    </li>
                    <br />
                    <li>
                      We shine not only with our expertise and our multilingual team, but above all with personality.
                    </li>
                    <br />
                    <li>
                      Our qualified IT recruiters and consultants reliably accompany and advise clients and candidates through the entire recruitment process, both on the national and international market.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default About
