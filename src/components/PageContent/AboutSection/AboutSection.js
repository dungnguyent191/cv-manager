import * as React from 'react'
import { Text } from '../../../common/components/Text'
import { DataService } from '../../../services/data-service'

export class AboutSection extends React.Component {
  constructor() {
    super();
    this.state.data = DataService.getData();
  }
  state = {};

  render() {
    return (
      <div className="section" id="about">
        <div className="container">
          <div className="card" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <AboutCell data={this.state.data} />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card-body">
                  <BasicInformationCell data={this.state.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const AboutCell = (props) => {
  const { data } = props
  return (<>
    <div className="h4 mt-0 title">About</div>
    <p>{data.about.title}</p>
    <p>{data.about.intro}</p>
  </>)
}

const BasicInformationCell = (props) => {
  const { data } = props
  const informations = [];
  for (const key in data.about.content) {
    informations.push(<div className="row mt-3" key={key}>
      <div className="col-sm-4"><Text strong uppercase>{key}:</Text></div>
      <div className="col-sm-8">{data.about.content[key]}</div>
    </div>)
  }
  return <>
    <div className="h4 mt-0 title">Basic Information</div>
    {informations}
  </>
}