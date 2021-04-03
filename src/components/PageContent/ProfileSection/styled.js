import styled from "styled-components";
import { ExternalLinkIcon } from "../../../common/components";


export const StyledProfileTitle = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const StyledExternalLinkIcon = styled(ExternalLinkIcon)`
  height: 3.6rem;
  width: 3.6rem;
  font-size: 0.6rem;
  margin: 30px 5px 0;
  border-radius: 30px;
  background-color: #888;
  color: #ffffff;
  display: inline-block;
  vertical-align: middle;
  i {
    transform: translateY(100%);
  }
`;

export const StyledSocialIconsGroup = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
`;
