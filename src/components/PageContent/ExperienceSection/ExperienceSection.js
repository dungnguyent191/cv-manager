import * as React from 'react'
import { DataService } from '../../../services/data-service';

export class ExperienceSection extends React.Component {
  constructor() {
    super();
    this.state.data = DataService.get();
  }
  state = {};

  render() {
    return (
      <div className="section" id="experience">
        <div className="container cc-experience">
          <div className="h4 text-center mb-4 title">Work Experience</div>
          <ExperimenceTemplates data={this.state.data} />
        </div>
      </div>
    )
  }
}

const ExperimenceTemplates = (props) => {
  const { data } = props;
  const experiencesTemplate = [];
  data.experience.forEach((experienceInfo, index) => {
    experiencesTemplate.push(
      <ExperienceTemplate experienceInfo={experienceInfo} key={index} />
    )
  });
  return experiencesTemplate
}

const ExperienceTemplate = (props) => {
  const { experienceInfo } = props
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-experience-header">
            <p>{`${experienceInfo.startTime} - ${experienceInfo.endTime}`}</p>
            <div className="h5">{experienceInfo.company}</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">{experienceInfo.role}</div>
            <p>{experienceInfo.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}