/*eslint-disable */

import React, { Component } from 'react'
import JobCard from '../JobCard/JobCard';
import { connect } from 'react-redux';
import * as JobMiddleware from '../../Store/middlewares/jobMiddleware';
import { Link } from 'react-router-dom'
import { Skeleton } from 'antd';


class WantJob extends Component {


  state = {
    isError: false,
    loading: true,
    successMessage: "",
    errorMessage: "",
    allJobs: []
  }

  componentDidMount() {
    this.setState({ loading: true })
      this.props.getJobs();
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.isError && nextProps.errorMessage.length > 1) {
      return this.setState({
        loading: false,
        isError: nextProps.isError,
        errorMessage: nextProps.errorMessage
      })
    }

    this.setState({
      loading: false,
      isError: false,
      errorMessage: "",
      allJobs: nextProps.allJobs,
    })




  }

  render() {
    const { isError, loading, successMessage, errorMessage, allJobs, } = this.state

    return (
      <div className="site-wrap">
        <div style={{ height: '113px' }} />
        <div className="unit-5 overlay" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
          <div className="container text-center">
            <h2 className="mb-0">Find Jobs</h2>
            <p className="mb-0 unit-6"><Link to="/">Home</Link> <span className="sep">&gt;</span> <span>Want Job</span></p>
          </div>
        </div>
    
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay={100}>
                <h2 className="mb-5 h3">All jobs for you</h2>
                <Skeleton active loading={loading}>
                <div className="rounded border jobs-wrap">

                  {allJobs.map(job => (
                    <JobCard history={this.props.history} data={job} key={job._id} title={job.jobTitle} location={job.location} role={job.role} />

                  ))}
                </div>
                </Skeleton>
              </div>
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
    loading: state.jobs.loading,
    successMessage: state.jobs.successMessage,
    errorMessage: state.jobs.errorMessage,
    allJobs: state.jobs.allJobs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => {
      dispatch(JobMiddleware.getJobMiddleware())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WantJob)