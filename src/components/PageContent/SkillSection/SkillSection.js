import * as React from "react";
import { DataService } from "../../../services/data-service";

export class SkillSection extends React.Component {
  state = { hideValue: true };
  componentDidMount() {
    this.setState({ data: DataService.getData() });
  }
  render() {
    return (
      <div className="section" id="skill">
        <div className="container">
          <div className="h4 text-center mb-4 title">Professional Skills</div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="card-body">
              <div className="row">
                <SkillColumns {...this.state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const SkillColumns = (props) => {
  const { data, hideValue } = props;
  if (!data?.skill) return null;
  let skillElements = [];
  for (const skillName in data.skill) {
    const skillPoint = data.skill[skillName];
    skillElements.push(
      <div className="col-md-6" key={skillName}>
        <div className="progress-container progress-primary">
          <span className="progress-badge">{skillName}</span>
          <div className="progress">
            <div
              className="progress-bar progress-bar-primary"
              data-aos="progress-full"
              data-aos-offset="10"
              data-aos-duration="2000"
              role="progressbar"
              aria-valuenow={skillPoint}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${10 * skillPoint}%` }}
            ></div>
            {hideValue ? null : (
              <span className="progress-value">{`${10 * skillPoint}%`}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
  return skillElements;
};
