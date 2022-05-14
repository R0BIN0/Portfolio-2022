// General
import styled from "styled-components";

// Variables
import { colors, margin } from "../../config/variables";

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
  width: 30px;
  margin-right: ${margin.MARGIN_2};
`;

export const BackgroundVideo = styled.div`
  width: 100%;
  height: 700px;
  padding: 2rem;
  background-color: ${colors.PRIMARY};

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
