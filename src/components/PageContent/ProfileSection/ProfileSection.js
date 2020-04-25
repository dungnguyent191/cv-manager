import * as React from 'react'
import { Avatar, AvatarBackground } from '../../../assets/img'
import { PrintPage } from '../../../common/components';
import { DataService } from '../../../services/data-service';
import { InternalLink } from '../../../common/components/InternalLink';
import { Image } from '../../../common/components/Image';

export class ProfileSection extends React.Component {
  constructor() {
    super();
    this.state.data = DataService.get();
  }
  state = {};

  render() {
    return (
      <div className="profile-page" id="page-header">
        <div className="wrapper">
          <div className="page-header page-header-small" filter-color="green">
            <ProfileBackgroundImage data={this.state.data} />
            <ProfileTitle data={this.state.data} />
            <SocialNetworkButtons data={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}

const ProfileBackgroundImage = (props) => {
  return <div className="page-header-image" style={{ backgroundImage: `url(${AvatarBackground})` }}>
  </div>
}

const ProfileTitle = (props) => {
  const { data } = props;
  return <div className="container">
    <div className="content-center">
      <div className="cc-profile-image">
        <InternalLink href="#page-header">
          <Image src={Avatar} alt="place holder" />
        </InternalLink>
      </div>
      <div className="h2 title">{data.profileHeader.name}</div>
      <p className="category text-white">{data.profileHeader.title}</p>
      <InternalLink href="#about">
        <button className="btn btn-primary">Hire Me</button>
      </InternalLink>
      <PrintPage><button className="btn btn-primary">Print CV</button></PrintPage>
    </div>
  </div>
}

const SocialNetworkButtons = (props) => {
  const { data } = props;
  return <div className="section">
    <div className="container">
      <div className="button-container">
        <a className="btn btn-default btn-round btn-lg btn-icon" href={`${data.socialLinks.facebook}`}
          target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i></a>
        <a className="btn btn-default btn-round btn-lg btn-icon" href={`${data.socialLinks.twitter}`}
          target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i></a>
        <a className="btn btn-default btn-round btn-lg btn-icon" href={`${data.socialLinks.google}`}
          target="_blank" rel="noopener noreferrer">
          <i className="fa fa-google-plus"></i></a>
      </div>
    </div>
  </div>
}