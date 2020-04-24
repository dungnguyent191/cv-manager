import * as React from 'react'

export class PageHeader extends React.Component {
  render() {
    return (
      <header>
        <div className="profile-page sidebar-collapse">
          <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
            <div className="container">
              <div className="navbar-translate"><a className="navbar-brand smooth-scroll" href="#page-header" rel="tooltip">Creative CV</a>
                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                  aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span
                    className="navbar-toggler-bar bar1"></span><span className="navbar-toggler-bar bar2"></span><span
                      className="navbar-toggler-bar bar3"></span></button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#skill">Skills</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#experience">Experience</a></li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Portfolio</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}