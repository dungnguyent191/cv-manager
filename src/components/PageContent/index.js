import * as React from "react";
import styled from "styled-components";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { PortfolioSection } from "./PortfolioSection";
import { ProfileSection } from "./ProfileSection";
import { SkillSection } from "./SkillSection";

export class PageContent extends React.Component {
  render() {
    return (
      <StyledPageContent className="container">
        <ProfileSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <PortfolioSection />
      </StyledPageContent>
    );
  }
}

const StyledPageContent = styled.div`
  width: 100%;
  margin-top: 58px;
`;
