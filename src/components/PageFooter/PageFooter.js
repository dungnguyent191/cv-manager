import * as React from 'react'

export class PageFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container text-center"><a className="cc-facebook btn btn-link" href="#page-header"> <i className="fa fa-facebook fa-2x "
          aria-hidden="true"></i></a><a className="cc-twitter btn btn-link " href="#page-header"> <i className="fa fa-twitter fa-2x "
            aria-hidden="true"></i></a><a className="cc-google-plus btn btn-link" href="#page-header"> <i className="fa fa-google-plus fa-2x"
              aria-hidden="true"></i></a><a className="cc-instagram btn btn-link" href="#page-header"> <i className="fa fa-instagram fa-2x "
                aria-hidden="true"></i></a></div>
        <div className="h4 title text-center">Anthony Barnett</div>
        <div className="text-center text-muted">
          <p> Creative CV. All rights reserved.
        <br />Design
        <a className="credit" href="https://templateflip.com"
              target="_blank" rel="noopener noreferrer">TemplateFlip</a>
          </p>
        </div>
      </footer>
    )
  }
}