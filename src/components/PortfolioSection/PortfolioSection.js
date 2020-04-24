import * as React from 'react'
import { ProjectImage } from '../../assets/img'

export class PortfolioSection extends React.Component {
  render() {
    return (
      <div className="section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="h4 text-center mb-4 title">Portfolio</div>
            </div>
          </div>
          <div className="tab-content gallery mt-5">
            <div className="tab-pane active" id="web-development">
              <div className="ml-auto mr-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                      <a href="#web-development">
                        <figure className="cc-effect"><img src={`${ProjectImage}`} alt="place holder" />
                          <figcaption>
                            <div className="h4">Startup Project</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a></div>
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                      <a href="#web-development">
                        <figure className="cc-effect"><img src={`${ProjectImage}`} alt="place holder" />
                          <figcaption>
                            <div className="h4">Startup Project</div>
                            <p>Web Development</p>
                          </figcaption>
                        </figure>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}