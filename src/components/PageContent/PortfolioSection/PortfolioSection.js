import * as React from "react";
import { DataService } from "../../../services/data-service";

export class PortfolioSection extends React.Component {
  componentDidMount = async () => {
    const portfolioInformation = await DataService.fetchPortfolioInformation();
    this.setState({ portfolioInformation });
  };

  render() {
    const portfolioInformation = this.state?.portfolioInformation;
    return (
      <div className="section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
              <div className="h4 text-center mb-4 title">Portfolio</div>
            </div>
          </div>
          {portfolioInformation && (
            <PortfolioGallery portfolioInformation={portfolioInformation} />
          )}
        </div>
      </div>
    );
  }
}

const PortfolioGallery = ({ portfolioInformation }) => {
  const portfolioGalleryCells = portfolioInformation.map(
    (websiteInformation, index) => (
      <div
        className="md-6"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        style={{ backgroundImage: `url('${websiteInformation.image}')` }}
      >
        <a
          href={websiteInformation.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h4">{websiteInformation.title}</div>
          <p>{websiteInformation.description}</p>
        </a>
      </div>
    )
  );

  return (
    <div className="gallery mt-5">
      <div className="row">{portfolioGalleryCells}</div>
    </div>
  );
};
