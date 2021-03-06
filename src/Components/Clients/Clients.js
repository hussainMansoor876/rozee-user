import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Clients extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="site-wrap">
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/aboutus1.jpg")' }}>
          <div className="container text-center">
            <h2 className="mb-0">Clients</h2>
            <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Clients</span></p>
          </div>
        </div>


        <div className="site-wrap">
          <div className="site-section" data-aos="fade">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 ml-auto text-align-center">
                  <p className="mb-4 h5 lineheight1-5" style={{ textAlign: 'center' }}>
                    As an Organisation that depends upon technology based professionals such as SAP, Oracle, IT infrastructure,
                     or cyber security. Reviewing stacks of resumes and not finding exactly who you need can be exhausting,
                      or interviewing candidates that have SAP experience, but don't understand how the technology aligns with the organisation’s objectives.
                       Perhaps they perform great during the interview but in practice their skills fall short of expectations, or they meet your expectations
                       but leave during a critical phase of the project. What all these scenarios have in common needlessly cost Organisations time and money and
                        in today's highly competitive business climate,
                     Companies can't afford to waste millions and hours every year by not hiring the right professionals and need a staffing partner who understands this.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="unit-5 overlay  flexer" style={{ backgroundImage: 'url("images/client1.jpg")', height: 400 }} >
          <div className="container text-center  mb-5">
            <h2 className="mb-0">Satisfaction</h2>
          </div>
        </div>

        <div className="site-section" data-aos="fade">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-md-12 ml-auto text-align-center">

                <p className="mb-4 h5 lineheight1-5" style={{ textAlign: 'center' }}>
                  247 IT International can get the people you require within days or even hours
                   instead of weeks thanks to our consultants who understand the impact of technologies our clients use.
                    247 IT International can meet any organisation’s staffing requirements. Not only do we find candidates
                     to fill seats and conduct background checks on candidates. We also make sure we match candidates to company’s cultures.
                      We make sure communication skills, personality and integrity factor into project success that's how 247 IT International
                      makes projects more productive by providing candidates that not only understand the technology being used, but also the business
                       objectives and how to communicate and work with a team of experts.
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/client2.jpg")', height: 400 }} >
          <div className="container text-center mb-5">
            <h2 className="mb-0">Teamwork</h2>
          </div>
        </div>


        <div className="site-section" data-aos="fade">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-md-12 ml-auto text-align-center">

                <p className="mb-4 h5 lineheight1-5" style={{ textAlign: 'center' }}>
                  With over 100,000 professionals in our network and years of experience,
                 we have the resources and expertise to connect you with exceptional individuals
                 who are ready to start making an impact right away whether you need 15 or 50.
                 At 247 IT, we offer flexible, efficient and collaborative solutions to your technology based hiring requirements
                 with our focus on you. We are more than just a vendor, we are a partner of our clients.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clients
