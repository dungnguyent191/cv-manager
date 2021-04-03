import React from "react";
import * as AnimationHelper from "../assets/js/animation";
import { PageHeader } from "../components/PageHeader";
import { PageFooter } from "../components/PageFooter";
import { PageContent } from "../components/PageContent";
import { useEffect } from "react";
import { StyledBackgroundImage } from "./styled";

const Main = () => {
  useEffect(() => {
    AnimationHelper.init();
  }, []);
  return (
    <>
      <StyledBackgroundImage />
      <PageHeader />
      <PageContent />
      <PageFooter />
    </>
  );
};

export default Main;
