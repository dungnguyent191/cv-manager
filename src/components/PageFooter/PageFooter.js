import * as React from 'react'
import { DataService } from '../../services/data-service';

export class PageFooter extends React.Component {
  constructor() {
    super();
    this.state.data = DataService.get();
  }
  state = {};

  render() {
    const socialLinks = this.state.data.socialLinks;
    return (
      <footer className="footer">
        <div className="container text-center">
          <a className="cc-facebook btn btn-link" href={`${socialLinks.facebook}`}> <i className="fa fa-facebook fa-2x "
            aria-hidden="true"></i></a>
          <a className="cc-twitter btn btn-link " href={`${socialLinks.twitter}`}> <i className="fa fa-twitter fa-2x "
            aria-hidden="true"></i></a>
          <a className="cc-google-plus btn btn-link" href={`${socialLinks.google}`}> <i className="fa fa-google-plus fa-2x"
            aria-hidden="true"></i></a>
        </div>
        <div className="h4 title text-center">Dung Nguyen</div>
        <div className="text-center text-muted">
          <p> Copyright 2020.
          </p>
        </div>
      </footer>
    )
  }
}
