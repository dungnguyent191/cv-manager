import * as React from "react";
import { DataService } from "../../services/data-service";
import styled from "styled-components";
import { ExternalLinkIcon } from "../../common/components/ExternalLink";

export class PageFooter extends React.Component {
  state = {};
  componentDidMount() {
    this.setState({ data: DataService.getData() });
  }

  render() {
    const socialLinks = this.state.data?.socialLinks;

    return socialLinks ? (
      <StyledFooter>
        <StyledIconList>
          <StyledExternalLinkIcon
            href={`${socialLinks.facebook}`}
            icon={"facebook"}
          />
          <StyledExternalLinkIcon
            href={`${socialLinks.twitter}`}
            icon={"twitter"}
          />
          <StyledExternalLinkIcon
            href={`${socialLinks.google}`}
            icon={"google"}
          />
        </StyledIconList>
        <StyledTitle>Dung Nguyen</StyledTitle>
        <StyledTextMuted>
          <p> Copyright 2020.</p>
        </StyledTextMuted>
      </StyledFooter>
    ) : null;
  }
}



const StyledExternalLinkIcon = styled(ExternalLinkIcon)`
  cursor: pointer;
  color: #888;
  border: 0;
  padding: 0.5rem 0.7rem;
  background-color: transparent;
  font-size: 0.8571em;
  &:hover {
    text-decoration: none;
    i {
      color: #3b5998;
    }
  }
`;

const StyledIconList = styled.div`
  text-align: center;
  width: 100%;
  padding: auto 15px;
  margin: auto;
`;
const StyledTextMuted = styled.div`
  text-align: center;
  color: #6c757d;
`;

const StyledTitle = styled.h4`
  text-align: center;
  font-size: 1.714em;
  font-weight: 700;
  line-height: 1.45em;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const StyledFooter = styled.footer`
  padding: 24px 0;
`;
