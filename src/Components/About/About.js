/*eslint-disable */

import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="site-wrap"> 
            <div style={{height: '113px'}} />
            <div className="unit-5 overlay" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
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
                        <img src="images/hero_1.jpg" alt="Image" className="img-fluid rounded" />
                    </div>
                  </div>
                  <div className="col-md-5 ml-auto">
                    <div className="text-left mb-5 section-heading">
                      <h2>About Us</h2>
                    </div>
                    <p className="mb-4 h5 font-italic lineheight1-5">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..”</p>
                    <p>— <strong className="text-black font-weight-bold">John Holmes</strong>, Marketing Strategist</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-section">
              <div className="container">
                <div className="row justify-content-center text-center mb-5">
                  <div className="col-md-6" data-aos="fade">
                    <h2>Frequently Ask Questions</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )
    }
}

export default About
