import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ServicesForCandidates extends Component {
  render() {
    return (
        <div className="site-wrap">
        <div style={{ height: '113px' }} />
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
          <div className="container text-center">
            <h2 className="mb-0">Services for candidates</h2>
            <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Our Services for candidates</span></p>
          </div>
        </div>
        <div className="site-section site-block-feature bg-light">
                    <div className="container">
                        {/* <div className="text-center mb-5 section-heading">
                            <h2>Services for clients</h2>
                        </div> */}
                        <div className="d-block d-md-flex border-bottom">
                            <div className="text-center p-4 item border-right" data-aos="fade">
                                <span className="flaticon-worker display-3 mb-3 d-block text-primary" />
                                <h2 className="h4">More Jobs Every Day</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                            </div>
                            <div className="text-center p-4 item" data-aos="fade">
                                <span className="flaticon-wrench display-3 mb-3 d-block text-primary" />
                                <h2 className="h4">Creative Jobs</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                            </div>
                        </div>
                        <div className="d-block d-md-flex">
                            <div className="text-center p-4 item border-right" data-aos="fade">
                                <span className="flaticon-stethoscope display-3 mb-3 d-block text-primary" />
                                <h2 className="h4">Healthcare</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                            </div>
                            <div className="text-center p-4 item" data-aos="fade">
                                <span className="flaticon-calculator display-3 mb-3 d-block text-primary" />
                                <h2 className="h4">Finance &amp; Accounting</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}

export default ServicesForCandidates
