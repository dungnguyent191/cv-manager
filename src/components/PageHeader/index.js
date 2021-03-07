import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { InternalLink } from "../../common/components/InternalLink";

export const PageHeader = () => {
  return (
    <StyledPageHeader>
      <Navbar bg="dark" expand="lg">
        <StyledInternalLink className="navbar-brand" href="#page-header">
          TUANDUNG.INFO
        </StyledInternalLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <StyledInternalLink href="#about">About</StyledInternalLink>
            <StyledInternalLink href="#skill">Skills</StyledInternalLink>
            <StyledInternalLink href="#experience">
              Experience
            </StyledInternalLink>
            <StyledInternalLink href="#portfolio">Portfolio</StyledInternalLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledPageHeader>
  );
};

const StyledPageHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const StyledInternalLink = styled(InternalLink)`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.7142em;
  padding: 0.5rem 0.7rem;
  line-height: 1.625rem;
  &:active,
  &:hover {
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.1875rem;
  }
  @media (max-width: 991px) {
    display: block;
  }
`;
