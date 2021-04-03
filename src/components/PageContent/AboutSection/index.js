import * as React from "react";
import { StyledSection } from "../../../common/styled";
import { DataService } from "../../../services/data-service";

export class AboutSection extends React.Component {
  state = { data: DataService.getData() };

  render() {
    return (
      <StyledSection id="about">
        <h3>About</h3>
        <p>Hi, my name is Dũng. I play my role in this world as a developer. I code everything for food, that's it. If you want to contact me, please see information below.</p>
      </StyledSection>
    );
  }
}

