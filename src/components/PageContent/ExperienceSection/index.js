import * as React from "react";
import { StyledSection } from "../../../common/styled";
import { DataService } from "../../../services/data-service";

export class ExperienceSection extends React.Component {
  state = { data: DataService.getData() };

  render() {
    return (
      <StyledSection id="experience">
        <div className="h4 mb-4 title">Work Experience</div>
        <ExperimenceTemplates data={this.state.data} />
      </StyledSection>
    );
  }
}

const ExperimenceTemplates = (props) => {
  const { data } = props;
  const experiencesTemplate = [];
  data.experience.forEach((experienceInfo, index) => {
    experiencesTemplate.push(
      <ExperienceTemplate experienceInfo={experienceInfo} key={index} />
    );
  });
  return experiencesTemplate;
};

const ExperienceTemplate = (props) => {
  const { experienceInfo } = props;
  return (
    <div className="card">
        <div class="row">
          <div className="col-md-3 bg-primary">
            <p>{`${experienceInfo.startTime} - ${experienceInfo.endTime}`}</p>
            <div className="h5">{experienceInfo.company}</div>
          </div>
          <div className="col-md-9">
            <div className="h5">{experienceInfo.role}</div>
            <p>{experienceInfo.description}</p>
          </div>
        </div>
    </div>
  );
};
