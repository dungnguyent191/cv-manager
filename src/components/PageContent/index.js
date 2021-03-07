import * as React from 'react'
import { AboutSection } from './AboutSection';
import { ProfileSection } from './ProfileSection';
import { SkillSection } from './SkillSection';
import { ExperienceSection } from './ExperienceSection';
import { PortfolioSection } from './PortfolioSection';


export class PageContent extends React.Component {
  render() {
    return (
      <div className="page-content">
        <ProfileSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        <PortfolioSection />
      </div>

    )
  }
}