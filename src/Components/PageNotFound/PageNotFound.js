import React, { Component } from 'react'
import {Link } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
        <div className="site-wrap">
        <div style={{ height: '113px' }} />
        <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("images/hero_2.jpg")',overflow:'hidden' }} data-aos="fade" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center">
                    <div className=" col-md-12 text-center" data-aos="fade">
                    <h1><strong>Oooppss..!!</strong></h1><br/>
                        <h1><strong>Page Not Found</strong></h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
     
    )
  }
}

export default PageNotFound
