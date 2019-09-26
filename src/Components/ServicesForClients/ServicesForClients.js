import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ServicesForClients extends Component {
  render() {
    return (
      <div className="site-wrap">
        {/* <div style={{ height: '113px' }} /> */}
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
          <div className="container text-center">
            <h2 className="mb-0">Services for clients</h2>
            <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Our Services for clients</span></p>
          </div>
        </div>

        <div className="site-wrap">
          <div className="site-section" data-aos="fade">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 ml-auto text-align-center">
                  <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                    <h2 className="mb-5">Providing you recruitment</h2>
                  </div>
                  <p className="mb-4 h5 font-italic lineheight1-5" style={{ textAlign: 'center' }}>
                    <ul>
                      <li>
                        Our non-binding services include competent advice; discreet dissemination of our client’s job advertisements on various job portals and career networks; meticulous screening of candidates; several internal discussions with the candidates; Evaluation of references; identification of qualities and competences; up to the interview.
                      </li>
                      <br />
                      <li>
                        Permanent (Client)-
                        SOLUTION TO SOLVING PERMENANT RECRUITMENT CHALLENGES
                        We take pride in understanding and making sense of our clients needs. We have teams of consultants trained and focused on placing permanent positions and are more than capable sourcing candidates best suited for our clients. Our permanent recruitment team is divided further so they can work together to deliver a more specialised service by concentrating on particular technological and geographical areas. We strive to keep good relationships with all our clients by providing quality over quantity. Adopting this approach saves our clients time in the selection process, thus solving their permanent recruitment issues efficiently.
                      </li>
                      <br />
                      <li>
                        Temporary (Client)
                        DELIVERING THE BEST, ON TIME, AND WITHIN BUDGETS
                        Our clients can count on us when it come to finding contract positions. Thanks to our most up-to-date resources and skilled recruiters and consultants, we are able to pool together talent based on client requirements, however niche or in-demand they may be. Our contract recruitment expertise allow us to meticulously source talents both from the national and international market, delivering to our clients on time and within budgets.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-md-12 mb-5 mb-md-0">
                  <div className="img-border">
                    <img src="images/hero_2.jpg" alt="Image" className="img-fluid rounded" />
                  </div>
                </div>
            </div>
          </div>

        </div>

        {/* <div className="site-wrap">
          <div className="site-section" data-aos="fade">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 mb-5 mb-md-0">
                  <div className="img-border">
                    <img src="images/hero_2.jpg" alt="Image" className="img-fluid rounded" />
                  </div>
                </div>
                <div className="col-md-5 ml-auto">
                  <div className="text-left mb-5 section-heading">
                    <h2>About Us</h2>
                  </div>
                  <p className="mb-4 h5 font-italic lineheight1-5">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..”</p>
                  <p>— <strong className="text-black font-weight-bold">John Holmes</strong>, Marketing Strategist</p>
                  <p><Link to="/about" className="btn btn-primary pill text-white px-4" style={{ float: "right" }} >Find out more</Link></p>

                </div>
              </div>
            </div>
          </div>

        </div> */}

        {/* <div className="site-section site-block-feature bg-light">
          <div className="container">
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
        </div> */}


      </div>
    )
  }
}

export default ServicesForClients
