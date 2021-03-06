import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ServicesForClients extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="site-wrap">
        {/* <div style={{ height: '113px' }} /> */}
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/aboutus1.jpg")' }}>
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
                  <div className="col-md-12 mx-auto text-center mb-5 section-heading">
                    <h2 className="mb-5 text-uppercase" style={{ fontFamily: "Big Shoulders Text !important" }}>Providing you recruitment solutions for both start-up and blue-chip companies</h2>
                  </div>
                  <p className="mb-4 h5 lineheight1-5" style={{ textAlign: 'center' }}>
                    Our non-binding services include competent advice; discrete dissemination of our client’s job advertisements
                     on various job portals and career networks; meticulous screening of candidates; several internal discussions
                      with the candidates; Evaluation of references; identification of qualities and competences; up to the interview.
                  </p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-12 ml-auto text-align-center">
                  <div className="col-md-12 mx-auto text-center mt-5 section-heading">
                    <h1>PERMANENT</h1>
                    <h3>SOLUTION TO SOLVING PERMANENT RECRUITMENT CHALLENGES</h3>
                  </div>
                  <p className="mb-4 h5 lineheight1-5" style={{ textAlign: 'center' }}>
                    We take pride in understanding and making sense of our clients needs. We have teams of consultants
                     trained and focused on placing permanent positions and are more than capable sourcing candidates best
                      suited for our clients. Our permanent recruitment team is divided further so they can work together to
                      deliver a more specialised service by concentrating on particular technological and geographical areas.
                       We strive to keep good relationships with all our clients by providing quality over quantity. Adopting this
                        approach saves our clients time in the selection process, thus solving their permanent recruitment issues efficiently.

                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/client1.jpg")', height: 400 }} >
            <div className="container text-center mb-5">
              <h2 className="mb-0">
                Permanent and temporary solutions
                </h2>
            </div>
          </div>

          <div className="site-section" data-aos="fade">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 ml-auto text-align-center">
                  <div className="col-md-12 mx-auto text-center section-heading">
                    {/* <h3><b>TEMPORARY</b></h3> */}
                    <h1>TEMPORARY</h1>
                    <h3>DELIVERING THE BEST, ON TIME, AND WITHIN BUDGETS</h3>
                  </div>
                  <p className="mb-4 h5 lineheight1-5" style={{ textAlign: 'center' }}>
                    Our clients can count on us when it comes to finding IT professionals for their contract positions.
                     Thanks to our most up-to-date resources and skilled recruiters and consultants,
                      we are able to pool together talent based on client requirements, however niche
                       or in-demand they may be. Our contract recruitment expertise allow us to meticulously
                       source talents both from the national and international market, delivering to our clients on time and within budgets.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/client2.jpg")', height: 400 }} >
            <div className="container text-center mb-5">
              <h2 className="mb-0">
                We have you covered
              </h2>
            </div>
          </div>

          {/* <div className="site-section" data-aos="fade">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 ml-auto text-align-center">
                  <div className="col-md-12 mx-auto text-center section-heading">
                    <h1><b>What we do to provide you the best service
                    </b>
                    </h1>
                  </div>
                  <p className="mb-4 h5 lineheight1-5" style={{ textAlign: 'center' }}>
                    Our clients can count on us when it come to finding contract positions.
                     Thanks to our most up-to-date resources and skilled recruiters and consultants,
                      we are able to pool together talent based on client requirements, however niche
                       or in-demand they may be. Our contract recruitment expertise allow us to meticulously
                       source talents both from the national and international market, delivering to our clients on time and within budgets.


                  </p>
                </div>
              </div>

            </div>
          </div> */}


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

        <div className="site-section site-block-feature bg-light">
          <div className="container">
            <div className="col-md-12 mx-auto text-center mb-5 section-heading">
              <h2 className="mb-5">What we do to provide you the best service </h2>
            </div>
            <div className="d-block d-md-flex ">
              <div className="text-center p-4 " data-aos="fade">
                {/* <span className="flaticon-computer-graphic display-3 mb-3 d-block text-primary" /> */}
                <p style={{ fontSize: '18px' }} >We take our time to get to know our clients well, starting from understanding the company to understanding client requirements.
              </p>
              </div>
              <div className="text-center p-4 " data-aos="fade">
                {/* <span className="flaticon-telecommunications display-3 mb-3 d-block text-primary" /> */}
                <p style={{ fontSize: '18px' }} >A team briefing takes place with the relevant team. Each team has their own technological and geographical focus, where they are given a detailed summary from one of our senior consultants.
                </p>
              </div>
              <div className="text-center p-4 " data-aos="fade">
                {/* <span className="flaticon-calculator display-3 mb-3 d-block text-primary" /> */}
                <p style={{ fontSize: '18px' }} >Our people understand the importance of building relationships. They are able to hand-select the best candidates using our regularly updated in-house training.
              </p>
              </div>
            </div>
            <span className="mt-5 lineheight1-5" style={{ textAlign: 'justify', fontSize: '1.5rem' }}>
              Plans are devised to deliver you hand-selected candidates within 24 hours. Examples of some of the technologies we work with:
              </span>
            <ul>
              <div className="font-li" >
                <li>Enterprise Resource Planning applications</li>
                <li>SAP</li>
                <li>Oracle</li>
                <li>Cloud Infrastructure</li>
                <li>Cyber Security</li>
                <li>Data</li>
              </div>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ServicesForClients
