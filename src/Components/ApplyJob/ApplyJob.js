import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class ApplyJob extends Component {
  render() {
    return (
        <React.Fragment>
        <Header />
        <div className="site-wrap">
        <div style={{height: '113px'}} />
        <div className="unit-5 overlay" style={{backgroundImage: 'url("images/hero_2.jpg")'}}>
          <div className="container text-center">
            <h2 className="mb-0">Full Stack Developer</h2>
            <p className="mb-0 unit-6"><a>Home</a> <span className="sep">&gt;</span> <span>Job Item</span></p>
          </div>
        </div>
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8 mb-5">
                <div className="p-5 bg-white">
                  <div className="mb-4 mb-md-5 mr-5">
                    <div className="job-post-item-header d-flex align-items-center">
                      <h2 className="mr-3 text-black h4">Full Stack Developer</h2>
                      <div className="badge-wrap">
                        <span className="border border-warning text-warning py-2 px-4 rounded">Freelance</span>
                      </div>
                    </div>
                    <div className="job-post-item-body d-block d-md-flex">
                      <div className="mr-3"><span className="fl-bigmug-line-portfolio23" /> <a href="#">New York Times</a></div>
                      <div><span className="fl-bigmug-line-big104" /> <span>New York City, USA</span></div>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iure beatae! Voluptas tempora doloremque atque repudiandae maiores odio magni. Illo ut nihil officia numquam in. Deleniti pariatur at minima quaerat!</p>
                  <p>Qui corrupti animi, dignissimos veritatis, necessitatibus consequuntur nobis, placeat beatae dolorum ullam harum at atque dolor! Accusantium cupiditate ipsum placeat, vel voluptatibus non eaque, animi neque minima facere provident aspernatur!</p>
                  <p>Porro magni numquam ex natus repellat accusamus laborum blanditiis odit consequatur at veritatis nostrum provident recusandae dolores incidunt distinctio facere, nulla odio quo tempore libero! Voluptatum porro velit, qui optio.</p>
                  <p>Ducimus odio, fugiat pariatur. Corporis nobis perferendis voluptatum nostrum nesciunt, voluptates pariatur architecto consequatur! Praesentium dicta enim, laboriosam natus doloribus corrupti in sequi perferendis, cupiditate perspiciatis, porro animi sed impedit.</p>
                  <p>Illum possimus, enim eaque recusandae earum omnis tempore suscipit sapiente voluptas nam quia dicta, repellendus incidunt dolor dolores nemo laboriosam, quasi nulla deserunt neque est ipsam velit cumque. Quos, ipsum!</p>
                  <p>Dignissimos ipsa quibusdam id qui maiores magnam, nesciunt? Voluptatibus nulla quas itaque nostrum necessitatibus repudiandae quaerat facere, amet aperiam iste aspernatur ratione cupiditate est voluptates non. Suscipit corporis, soluta neque.</p>
                  <p>Pariatur itaque reiciendis consectetur, deserunt quam adipisci odio doloribus voluptatem laboriosam magni ut repellat tempore? Minus sit officia impedit veritatis reiciendis debitis iure, porro in quaerat inventore nisi sequi quos!</p>
                  <p className="mt-5"><a href="#" className="btn btn-primary  py-2 px-4">Apply Job</a></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="p-4 mb-3 bg-white">
                  <h3 className="h5 text-black mb-3">More Info</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </React.Fragment>
    )
  }
}

export default ApplyJob
