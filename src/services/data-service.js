import { ApiService } from "./api-service";
import Data from '../assets/db/database.json'

export class DataService {
  static getData() {
    return Data
  }

  static fetchPortfolioInformation = async () => {
    const portfolio = (DataService.getData())?.portfolio;
    // const portfolio = {}
    let portfolioInformation = [];
    for (const project in portfolio) {
      let projectLink = portfolio[project];
      let websiteData = await ApiService.getDataFromLink(projectLink);
      portfolioInformation.push(websiteData);
    }
    return portfolioInformation;
  }
}