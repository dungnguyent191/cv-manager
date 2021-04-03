import styled from "styled-components";
import { AvatarBackground } from "../assets/img";

export const StyledBackgroundImage = styled.div`
  position: fixed;
  background-image: url(${AvatarBackground});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.2;
`;