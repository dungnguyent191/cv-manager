import * as React from 'react'
import { InternalLink } from '../../common/components/InternalLink'

export class PageHeader extends React.Component {
  render() {
    return (
      <header>
        <div className="profile-page sidebar-collapse">
          <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
            <div className="container">
              <div className="navbar-translate">
                <InternalLink className="navbar-brand" href="#page-header">TUANDUNG.INFO</InternalLink>
                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                  aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"><span
                    className="navbar-toggler-bar bar1"></span><span className="navbar-toggler-bar bar2"></span><span
                      className="navbar-toggler-bar bar3"></span></button>
              </div>
              <NavigationBars />
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

const NavigationBars = () => <div className="collapse navbar-collapse justify-content-end" id="navigation">
  <ul className="navbar-nav">
    <li className="nav-item"><InternalLink className="nav-link" href="#about">About</InternalLink></li>
    <li className="nav-item"><InternalLink className="nav-link" href="#skill">Skills</InternalLink></li>
    <li className="nav-item"><InternalLink className="nav-link" href="#experience">Experience</InternalLink></li>
    <li className="nav-item"><InternalLink className="nav-link" href="#portfolio">Portfolio</InternalLink></li>
  </ul>
</div>