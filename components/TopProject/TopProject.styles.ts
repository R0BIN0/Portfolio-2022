// General
import styled from "styled-components";

// Variables
import { colors, fontSize } from "../../config/variables";

// Types

export const ButtonBack = styled.a`
  background-color: white;
  position: fixed;
  right: 6rem;
  top: 6rem;
  font-size: ${fontSize.LG};
  font-weight: 500;
  color: ${colors.PRIMARY};
  z-index: 1000;
  line-height: 0.8;
  padding: 0.75rem 1rem;
  border-radius: 50px;

  @media screen and (max-width: 1250px) {
    right: 3rem;
    top: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: ${fontSize.MD};
  }

  @media screen and (max-width: 768px) {
    right: 1.5rem;
    top: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 800px;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 500px;
  }

  @media screen and (max-width: 500px) {
    height: 400px;
  }
`;
