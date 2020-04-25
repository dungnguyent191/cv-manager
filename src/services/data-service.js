import { ApiService } from "./api-service";
import Data from '../assets/db/database.json'

export class DataService {
  static get() {
    return Data
  }

  static set() {
  }

  static fetchPortfolioInformation = async (data) => {
    const portfolio = data.portfolio;
    let portfolioInformation = [];
    for (const project in portfolio) {
      let projectLink = portfolio[project];
      let websiteData = await ApiService.getDataFromLink(projectLink);
      portfolioInformation.push(websiteData);
    }
    return portfolioInformation;
  }
}