// General
import styled from "styled-components";

// Variables
import { colors, fontSize } from "../../config/variables";

// Types

type ImageContainer = {
  backgroundColor: string;
};

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

export const ImageContainer = styled.div<ImageContainer>`
  width: 100%;
  height: 800px;
  position: relative;

  .img-loader {
    width: 100%;
    height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
  }

  .loader {
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader > div {
    background-color: white;
    height: 100%;
    width: 6px;
    margin: 0 2px;
    animation: grow 1.2s infinite ease-in-out;
    opacity: 0.1;
  }

  .loader .rect2 {
    animation-delay: -1.1s;
  }

  .loader .rect3 {
    animation-delay: -1s;
  }

  .loader .rect4 {
    animation-delay: -0.9s;
  }

  .loader .rect5 {
    animation-delay: -0.8s;
  }

  @keyframes grow {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }

  @media screen and (max-width: 768px) {
    height: 500px;
  }

  @media screen and (max-width: 500px) {
    height: 400px;
  }
`;
