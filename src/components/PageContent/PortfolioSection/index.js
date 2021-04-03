import * as React from "react";
import { ExternalLink } from "../../../common/components";
import { StyledSection } from "../../../common/styled";
import { DataService } from "../../../services/data-service";

export class PortfolioSection extends React.Component {
  componentDidMount = async () => {
    const portfolioInformation = await DataService.fetchPortfolioInformation();
    this.setState({ portfolioInformation });
  };

  render() {
    const portfolioInformation = this.state?.portfolioInformation;
    return (
      <StyledSection id="portfolio">
        <div className="h4 mb-4 title">Portfolio</div>
        {portfolioInformation && (
          <PortfolioGallery portfolioInformation={portfolioInformation} />
        )}
      </StyledSection>
    );
  }
}

const PortfolioGallery = ({ portfolioInformation }) => {
  return (
    <div className="row">
      {portfolioInformation.map((websiteInformation, index) => (
        <div
          className="col-md-6 card"
          style={{ backgroundImage: `url('${websiteInformation.image}')` }}
        >
          <ExternalLink href={websiteInformation.url}>
            <div className="card-body">
              <div className="h4">{websiteInformation.title}</div>
              <p>{websiteInformation.description}</p>
            </div>
          </ExternalLink>
        </div>
      ))}
    </div>
  );
};
