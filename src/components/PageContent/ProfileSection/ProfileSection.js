import * as React from "react";
import { Avatar, AvatarBackground } from "../../../assets/img";
import { PrintPage } from "../../../common/components";
import { DataService } from "../../../services/data-service";
import { InternalLink } from "../../../common/components/InternalLink";
import { Image } from "../../../common/components/Image";
import styled from "styled-components";
import { ExternalLinkIcon } from "../../../common/components/ExternalLink";

export class ProfileSection extends React.Component {
  state = { data: DataService.getData() };

  render() {
    const { data } = this.state;
    return (
      <div className="profile-page" id="page-header">
        <div className="wrapper">
          <div className="page-header page-header-small" filter-color="green">
            <StyledBackgroundImage />
            <ProfileTitle data={data} />
            <StyledSocialNetworkButtons data={data} />
          </div>
        </div>
      </div>
    );
  }
}

const ProfileTitle = (props) => {
  const { data } = props;
  return (
    <div className="container">
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
        <PrintPage>
          <button className="btn btn-primary">Print CV</button>
        </PrintPage>
      </div>
    </div>
  );
};

const SocialNetworkButtons = ({ data: { socialLinks }, className }) => {
  return socialLinks ? (
    <div className={className}>
      <StyledExternalLinkIcon
        href={`${socialLinks.facebook}`}
        icon={"facebook"}
        target=""
      />
      <StyledExternalLinkIcon
        href={`${socialLinks.twitter}`}
        icon={"twitter"}
      />
      <StyledExternalLinkIcon href={`${socialLinks.google}`} icon={"google"} />
    </div>
  ) : null;
};

const StyledBackgroundImage = styled.div`
  position: absolute;
  background-image: url(${AvatarBackground});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledExternalLinkIcon = styled(ExternalLinkIcon)`
  height: 3.6rem;
  width: 3.6rem;
  font-size: 0.6rem;
  margin: -30px 5px 0;
  border-radius: 30px;
  background-color: #888;
  color: #ffffff;
  display: inline-block;
  vertical-align: middle;
  i {
    transform: translateY(100%);
  }
`;

const StyledSocialNetworkButtons = styled(SocialNetworkButtons)`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  a {
    margin-top: -30px;
  }
`;
