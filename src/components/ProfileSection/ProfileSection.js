import * as React from 'react'
import { Avatar, AvatarBackground } from '../../assets/img'
import { PrintPage } from '../../common/components';

export class ProfileSection extends React.Component {
  render() {
    return (
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
    )
  }
}