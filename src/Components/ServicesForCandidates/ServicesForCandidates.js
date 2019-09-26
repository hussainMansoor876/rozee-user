import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as jobMiddleware from '../../Store/middlewares/jobMiddleware'
import { message } from 'antd'
import $ from 'jquery'

class ServicesForCandidates extends Component {

  state = {
    name: "",
    CV: null,
    isError: false,
    isLoading: false,
    successMessage: "",
    errorMessage: "",
  }

  handleChange = event => {
    if (event.target.name === "CV") {
      this.setState({ CV: event.target.files[0] })
    } else {
      this.setState({ name: event.target.value })
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, CV } = this.state

    var formData = new FormData();

    formData.append("candidateName", name)
    formData.append("CV", CV);

    this.setState({ isLoading: true })
    this.props.apply(formData)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.isError) {
      message.error(nextProps.errorMessage)

      return this.setState({
        isError: nextProps.isError,
        errorMessage: nextProps.errorMessage,
        isLoading: false,
        isApplying: false
      })
    }

    if (nextProps.successMessage.length > 1) {
      message.success(nextProps.successMessage)
      this.setState({
        isError: nextProps.isError,
        successMessage: nextProps.successMessage,
        isLoading: false,
        name: "",
        CV: ""
      })

    }
  }


  componentDidMount = () => {
    console.log(window.location.hash)
    if (window.location.hash === "#submitCV") {
      $(document).ready(function () {
        $('html, body').animate({
          scrollTop: $(".scroller").offset().top
        }, 100);
      })

    } else {

      window.scrollTo(0, 0)
    }
  }

  render() {
    const { name } = this.state
    return (
      <div className="site-wrap">
        {/* <div style={{ height: '113px' }} /> */}
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
          <div className="container text-center">
            <h2 className="mb-0">Services for candidates</h2>
            <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Our Services for candidates</span></p>
          </div>
        </div>


        <div className="site-wrap">
          <div className="site-section" data-aos="fade">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 ml-auto text-align-center">
                  <p className="mb-4 h5 lineheight1-5" style={{ textAlign: 'center' }}>
                    Whether you are looking for a Permanent or Freelance position, in any IT roles we have you covered.
                    <br />
                    <br />
                    It can be exhausting searching for the right role. Our team of expert consultants have years of experience in understanding and helping candidates find out positions best suited to them. We take everything into consideration from your social and cultural background to understanding your past.

                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="unit-5 overlay  flexer" style={{ backgroundImage: 'url("images/clientBanner.jpg")' }} >
          <div className="container text-center  mb-5">
            <h2 className="mb-0">Candidates Satisfaction</h2>
            <p className="mb-0 unit-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reprehenderit explicabo quos fugit vitae dolorum.</p>
          </div>
        </div>


        <div className="site-section scroller  bg-light" id="#submitCV">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                <h2 className="mb-5 ">Submit Your CV</h2>
              </div>
              <div className="col-md-12 col-lg-12 mb-5 flexer">
                <form onSubmit={this.handleSubmit} >
                  <div className="row form-group ">
                    <div className="col-md-12">
                      <label className="font-weight-bold" htmlFor="name">Enter Your Name</label>
                      <input
                        type="name"
                        id="name"
                        name="name"
                        value={name}
                        className="form-control"
                        placeholder="Enter your name"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="font-weight-bold mt-3" htmlFor="name">Upload Your CV:</label><br />
                      <input
                        type="file"
                        name="CV"
                        id="CV"
                        accept="application/msword,application/pdf,.docx,"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <button type="submit" value="Apply" className="btn btn-primary px-3 py-2">Submit</button>

                </form>
              </div>
              {/* <div className="col-lg-4">
                <div className="p-4 mb-3 bg-white">
                  <h3 className="h5 text-black mb-3">More Info</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
                  <p><a className="btn btn-primary px-4 py-2 text-white pill">Learn More</a></p>
                </div>
              </div> */}
            </div>
          </div>
        </div>


      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    isError: state.jobs.isError,
    isLoading: state.jobs.isLoading,
    successMessage: state.jobs.successMessage,
    errorMessage: state.jobs.errorMessage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    apply: data => {
      dispatch(jobMiddleware.uploadCV(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServicesForCandidates)
