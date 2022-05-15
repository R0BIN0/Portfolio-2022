// General
import styled from "styled-components";

// Variables
import { colors, fontSize, margin } from "../../config/variables";

// Types

type BackgroundVideo = {
  backgroundColor: string;
};

type SwitchProject = {
  textAlign: string;
};

export const TextContainer = styled.div`
  width: 100%;
  margin: 2rem 0 4rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media screen and (max-width: 500px) {
    margin: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 320px;
  margin-top: ${margin.MARGIN_7};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    max-width: none;
    width: 100%;
    height: 90px;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  width: 27.5px;
  margin-right: ${margin.MARGIN_4};
`;

export const BackgroundVideo = styled.div<BackgroundVideo>`
  width: 100%;
  height: 700px;
  padding: 2rem;
  background-color: ${({ backgroundColor }) => backgroundColor};

  video {
    width: 100%;
    max-width: 800px;
    max-height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 400px;

    video {
      max-height: 300px;
    }
  }

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

export const SwitchProject = styled.div<SwitchProject>`
  text-align: ${({ textAlign }) => textAlign};
  color: ${colors.PRIMARY_LIGHT};
  cursor: pointer;
  padding: 0 2rem;

  &:hover {
    color: ${colors.PRIMARY};
  }

  p {
    font-size: ${fontSize.XS};
  }

  h4 {
    font-size: ${fontSize.MD};
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    font-size: ${fontSize.S};
  }
`;

export const LinkProject = styled.div`
  margin: 0 0 6rem 0;
  a {
    color: ${colors.CTA};
    font-weight: 500;
    text-decoration: underline;
  }
`;
