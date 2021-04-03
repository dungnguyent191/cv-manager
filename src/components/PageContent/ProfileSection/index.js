import * as React from "react";
import { Avatar } from "../../../assets/img";
import {
  PrintPage,
  InternalLink,
  Image,
  Btn,
} from "../../../common/components";
import { StyledSection } from "../../../common/styled";
import { DataService } from "../../../services/data-service";
import { StyledExternalLinkIcon, StyledProfileTitle, StyledSocialIconsGroup } from "./styled";

export class ProfileSection extends React.Component {
  state = { data: DataService.getData() };

  render() {
    const { data } = this.state;
    return (
      <StyledSection>
        <ProfileTitle />
        <SocialNetworkButtons data={data} />
      </StyledSection>
    );
  }
}

const ProfileTitle = () => {
  return (
    <StyledProfileTitle>
      <InternalLink href="#">
        <Image src={Avatar} alt="place holder" />
      </InternalLink>
      <div>Dung Nguyen</div>
      <p>Application Developer</p>
      <div>
      <InternalLink className='mr-4' href="#about">
        <Btn.Primary>Hire Me</Btn.Primary>
      </InternalLink>
      <PrintPage>
        <Btn.Primary>Print CV</Btn.Primary>
      </PrintPage>
    </div>
    </StyledProfileTitle>
  );
};

const SocialNetworkButtons = (props) => {
  const { socialLinks } = props.data;
  return (
    socialLinks && (
      <StyledSocialIconsGroup>
        <StyledExternalLinkIcon
          href={`${socialLinks.facebook}`}
          icon={"facebook"}
          target=""
        />
        <StyledExternalLinkIcon
          href={`${socialLinks.twitter}`}
          icon={"twitter"}
        />
        <StyledExternalLinkIcon
          href={`${socialLinks.google}`}
          icon={"google"}
        />
      </StyledSocialIconsGroup>
    )
  );
};

