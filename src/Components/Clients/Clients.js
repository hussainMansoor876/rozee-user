import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Clients extends Component {
  render() {
    return (
      <div className="site-wrap">
        {/* <div style={{ height: '113px' }} /> */}
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
          <div className="container text-center">
            <h2 className="mb-0">Clients</h2>
            <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Clients</span></p>
          </div>
        </div>


        <div className="site-wrap">
          <div className="site-section" data-aos="fade">
            <div className="container">
              <div className="row align-items-center">
                {/* <div className="col-md-6 mb-5 mb-md-0">
                  <div className="img-border">
                    <img src="images/hero_2.jpg" alt="Image" className="img-fluid rounded" />
                  </div>
                </div> */}
                <div className="col-md-12 ml-auto text-align-center">
                  <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                    <h2 className="mb-5">ABOUT US</h2>
                  </div>
                  <p className="mb-4 h5 font-italic lineheight1-5" style={{ textAlign: 'center' }}>
                    <ul>
                      <li>
                        As an Organisation that depends upon technology based professionals such as SAP, Oracle, IT Infrastructure, or cyber security. Reviewing stacks of resumes and not finding exactly who you need can be exhausting, or interviewing candidates that have SAP experience, but don't understand how the technology aligns with the Organisation’s objectives, perhaps they perform great during the interview but in practice their skills fall short of expectations or they meet your expectations but leave during a critical phase of the project. What all these scenarios have in common needlessly cost Organisations time and money and in today's highly competitive business climate, Companies can't afford to waste millions and hours every year by not hiring the right professionals and need a staffing partner who understands this.
                      </li>
                      <br />
                      <li>
                        24/7 IT International can get the people you require within days or even hours instead of weeks thanks to our Consultants who understand the impact of technologies our Clients use. 247 IT International can meet any Organisation’s staffing requirements. Not only do we find candidates to fill seats and conduct background checks on candidates. We also make sure we match candidates to Company’s cultures. We make sure communication skills, personality and integrity factor into project success that's how 247 IT International makes projects more productive by providing candidates that not only understand the technology being used, but also the business objectives and how to communicate and work with a team of experts.
                      </li>
                      <br />
                      <li>
                        With over 100,000 professionals in our network and years of experience, we have the resources and expertise to connect you with exceptional individuals who are ready to start making an impact right away whether you need 15 or 50, at 247 IT we offer flexible efficient and collaborative solutions to your technology based hiring requirements with our focus on you we are more than just a vendor we are a partner our Clients.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

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

export default Clients
