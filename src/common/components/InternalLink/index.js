import * as React from 'react'
import $ from 'jquery'

export class InternalLink extends React.Component {
  render() {
    return (
      <a href={this.props.href} className={this.props.className} onClick={event => autoScrollOnClicked(event, this.props.href)}>
        {this.props.children}
      </a>
    )
  }
}

function autoScrollOnClicked(event, elementSelector) {
  event.preventDefault();
  if (elementSelector === '#') 
  return $("html, body").animate({ scrollTop: 0 }, 250);
  let target = $(elementSelector);
  if (target.length) {
    $("html, body").animate({ scrollTop: target.offset().top + 1 }, 250);
  }
}
