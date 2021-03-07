import React from "react";

export const ExternalLinkIcon = ({ href, icon, className }) => {
  let IconEle;
  switch (icon) {
    case "facebook":
      IconEle = <i className="fa fa-facebook fa-2x " aria-hidden="true"></i>;
      break;
    case "twitter":
      IconEle = <i className="fa fa-twitter fa-2x " aria-hidden="true"></i>;
      break;
    case "google":
      IconEle = <i className="fa fa-google-plus fa-2x" aria-hidden="true"></i>;
      break;
    default:
      IconEle = null;
      break;
  }
  return (
    <ExternalLink href={href} className={className}>
      {IconEle}
    </ExternalLink>
  );
};

export const ExternalLink = ({ href, className, children }) => {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
