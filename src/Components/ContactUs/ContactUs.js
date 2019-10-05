/*eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ContactUs extends Component {
  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="site-wrap">
        {/* <div style={{height: '113px'}} /> */}
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/aboutus1.jpg")' }}>
          <div className="container text-center">
            <h2 className="mb-0">Contact</h2>
            <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Contact</span></p>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8 mb-5">
                <form action="#" className="p-5 bg-white">
                  <div className="row form-group">
                    <div className="col-md-12 mb-3 mb-md-0">
                      <label className="font-weight-bold" htmlFor="fullname">Full Name</label>
                      <input type="text" id="fullname" className="form-control" placeholder="Full Name" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="font-weight-bold" htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12 mb-3 mb-md-0">
                      <label className="font-weight-bold" htmlFor="phone">Phone</label>
                      <input type="text" id="phone" className="form-control" placeholder="Phone #" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="font-weight-bold" htmlFor="message">Message</label>
                      <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Add message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <input type="submit" defaultValue="Send Message" className="btn btn-primary pill px-4 py-2" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="p-4 mb-3 bg-white">
                  <h3 className="h5 text-black mb-3">Contact Information</h3>
                  {/* <p className="mb-0 font-weight-bold">Address</p> */}
                  {/* <p className="mb-4">218 Tollgate Road, London, E6 5YA</p> */}
                  <p className="mb-0 font-weight-bold">Phone</p>
                  <p className="mb-4"><a href="#">0207 473 5838</a></p>
                  <p className="mb-0 font-weight-bold">Email Address</p>
                  <p className="mb-0"><a href="#">info@247itinternational.com </a></p>
                </div>
                {/* <div className="p-4 mb-3 bg-white">
                  <h3 className="h5 text-black mb-3">More Info</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro ]ollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
                  <p><a href="#" className="btn btn-primary px-4 py-2 text-white pill">Learn More</a></p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="py-5 quick-contact-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h2><span className="icon-room" /> Location</h2>
                  <p className="mb-0">London <br />  United Kingdom</p>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <h2><span className="icon-clock-o" /> Service Times</h2>
                  <p className="mb-0">Wednesdays at 6:30PM - 7:30PM <br />
                    Fridays at Sunset - 7:30PM <br />
                    Saturdays at 8:00AM - Sunset</p>
                </div>
              </div>
              <div className="col-md-4">
                <h2><span className="icon-comments" /> Get In Touch</h2>
                <p className="mb-0">Email: info@247itinternational.com <br />
                  Phone: 0207 473 5838 </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

    )
  }
}

export default ContactUs
