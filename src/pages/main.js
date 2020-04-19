import React from 'react';
import * as AnimationHelper from '../assets/js/animation';
import { Avatar, AvatarBackground, ProjectImage } from '../assets/img'
import { PrintPage } from '../components/printPage';

export default class Main extends React.Component {
  componentDidMount() {
    AnimationHelper.init();
  }
  render() {
    return <>
      <header>
        <div className="profile-page sidebar-collapse">
          <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
            <div className="container">
              <div className="navbar-translate"><a className="navbar-brand smooth-scroll" href="#page-header" rel="tooltip">Creative CV</a>
                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                  aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span
                    className="navbar-toggler-bar bar1"></span><span className="navbar-toggler-bar bar2"></span><span
                      className="navbar-toggler-bar bar3"></span></button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#skill">Skills</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#experience">Experience</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="page-content">
        <div className="profile-page" id="page-header">
          <div className="wrapper">
            <div className="page-header page-header-small" filter-color="green">
              <div className="page-header-image" data-parallax="true" style={{ backgroundImage: `url(${AvatarBackground})` }}>
              </div>
              <div className="container">
                <div className="content-center">
                  <div className="cc-profile-image"><a href="#page-header"><img src={`${Avatar}`} alt="place holder" /></a></div>
                  <div className="h2 title">Anthony Barnett</div>
                  <p className="category text-white">Web Developer, Graphic Designer, Photographer</p>
                  <button className="btn btn-primary">Hire Me</button>
                  <PrintPage><button className="btn btn-primary">Download CV</button></PrintPage>
                </div>
              </div>
              <div className="section">
                <div className="container">
                  <div className="button-container"><a className="btn btn-default btn-round btn-lg btn-icon" href="#page-header"
                    rel="tooltip" title="Follow me on Facebook"><i className="fa fa-facebook"></i></a><a
                      className="btn btn-default btn-round btn-lg btn-icon" href="#page-header" rel="tooltip"
                      title="Follow me on Twitter"><i className="fa fa-twitter"></i></a><a
                        className="btn btn-default btn-round btn-lg btn-icon" href="#page-header" rel="tooltip"
                        title="Follow me on Google+"><i className="fa fa-google-plus"></i></a><a
                          className="btn btn-default btn-round btn-lg btn-icon" href="#page-header" rel="tooltip"
                          title="Follow me on Instagram"><i className="fa fa-instagram"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="about">
          <div className="container">
            <div className="card" data-aos="fade-up" data-aos-offset="10">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card-body">
                    <div className="h4 mt-0 title">About</div>
                    <p>Hello! I am Anthony Barnett. Web Developer, Graphic Designer and Photographer.</p>
                    <p>Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and
                    FontAwesome, this modern and responsive design template is perfect to showcase your portfolio,
                    skills and experience. <a href="https://templateflip.com/templates/creative-cv/"
                        target="_blank" rel="noopener noreferrer">Learn More</a></p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card-body">
                    <div className="h4 mt-0 title">Basic Information</div>
                    <div className="row">
                      <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                      <div className="col-sm-8">24</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                      <div className="col-sm-8">anthony@company.com</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                      <div className="col-sm-8">+1718-111-0011</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                      <div className="col-sm-8">140, City Center, New York, U.S.A</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                      <div className="col-sm-8">English, German, French</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="skill">
          <div className="container">
            <div className="h4 text-center mb-4 title">Professional Skills</div>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">HTML</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                          data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                          aria-valuemax="100" style={{ width: '80%' }}></div><span className="progress-value">80%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">CSS</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                          data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                          aria-valuemax="100" style={{ width: '80%' }}></div><span className="progress-value">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">JavaScript</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                          data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                          aria-valuemax="100" style={{ width: '80%' }}></div><span className="progress-value">60%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">SASS</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                          data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                          aria-valuemax="100" style={{ width: '80%' }}></div><span className="progress-value">60%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">Bootstrap</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                          data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                          aria-valuemax="100" style={{ width: '80%' }}></div><span className="progress-value">75%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="progress-container progress-primary"><span className="progress-badge">Photoshop</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10"
                          data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                          aria-valuemax="100" style={{ width: '80%' }}></div><span className="progress-value">70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="experience">
          <div className="container cc-experience">
            <div className="h4 text-center mb-4 title">Work Experience</div>
            <div className="card">
              <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body cc-experience-header">
                    <p>March 2016 - Present</p>
                    <div className="h5">CreativeM</div>
                  </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body">
                    <div className="h5">Front End Developer</div>
                    <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                    tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                    primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                    pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium
                    molestie ultricies sollicitudin dui.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body cc-experience-header">
                    <p>April 2014 - March 2016</p>
                    <div className="h5">WebNote</div>
                  </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                  <div className="card-body">
                    <div className="h5">Web Developer</div>
                    <p>Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                    tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend
                    primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros
                    pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium
                    molestie ultricies sollicitudin dui.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="h4 text-center mb-4 title">Portfolio</div>
              </div>
            </div>
            <div className="tab-content gallery mt-5">
              <div className="tab-pane active" id="web-development">
                <div className="ml-auto mr-auto">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <a href="#web-development">
                          <figure className="cc-effect"><img src={`${ProjectImage}`} alt="place holder" />
                            <figcaption>
                              <div className="h4">Startup Project</div>
                              <p>Web Development</p>
                            </figcaption>
                          </figure>
                        </a></div>
                      <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <a href="#web-development">
                          <figure className="cc-effect"><img src={`${ProjectImage}`} alt="place holder" />
                            <figcaption>
                              <div className="h4">Startup Project</div>
                              <p>Web Development</p>
                            </figcaption>
                          </figure>
                        </a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container text-center"><a className="cc-facebook btn btn-link" href="#page-header"> <i className="fa fa-facebook fa-2x "
          aria-hidden="true"></i></a><a className="cc-twitter btn btn-link " href="#page-header"> <i className="fa fa-twitter fa-2x "
            aria-hidden="true"></i></a><a className="cc-google-plus btn btn-link" href="#page-header"> <i className="fa fa-google-plus fa-2x"
              aria-hidden="true"></i></a><a className="cc-instagram btn btn-link" href="#page-header"> <i className="fa fa-instagram fa-2x "
                aria-hidden="true"></i></a></div>
        <div className="h4 title text-center">Anthony Barnett</div>
        <div className="text-center text-muted">
          <p> Creative CV. All rights reserved.
        <br />Design
        <a className="credit" href="https://templateflip.com"
              target="_blank" rel="noopener noreferrer">TemplateFlip</a>
          </p>
        </div>
      </footer>
    </>
  }
}