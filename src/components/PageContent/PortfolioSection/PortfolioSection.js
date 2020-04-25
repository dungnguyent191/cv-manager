import * as React from 'react'
import { DataService } from '../../../services/data-service';

export class PortfolioSection extends React.Component {
  state = {};
  componentDidMount = async () => {
    const data = DataService.get();
    this.setState({
      data,
      portfolioInformation: await DataService.fetchPortfolioInformation(data)
    })
  }

  render() {
    return (
      <div className="section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="h4 text-center mb-4 title">Portfolio</div>
            </div>
          </div>
          <PortfolioGallery portfolioInformation={this.state.portfolioInformation} />
        </div>
      </div>
    )
  }
}

const PortfolioGallery = (props) => {
  const { portfolioInformation } = props;
  if (!portfolioInformation) return null;
  let portfolioGalleryTemplate = []
  portfolioInformation.forEach((websiteInformation, index) => {
    portfolioGalleryTemplate.push(
      <div className="col-md-6" key={index}>
        <div className="cc-porfolio-image img-raised mt-2"
          data-aos="fade-down" data-aos-anchor-placement="top-bottom"
          style={{ backgroundImage: `url('${websiteInformation.image}')` }}>
          <figure className="cc-effect">
            <a href={websiteInformation.url} target="_blank" rel="noopener noreferrer">
              <figcaption>
                <div className="h4">{websiteInformation.title}</div>
                <p>{websiteInformation.description}</p>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
    )
  });

  return (
    <div className="gallery mt-5">
      <div className="row">
        {portfolioGalleryTemplate}
      </div>
    </div>
  )
}