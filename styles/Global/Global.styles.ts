// General
import styled from "styled-components";
import { colors, fontSize } from "../../config/variables";

//  Types

type Flex = {
  justifyContent: string;
  alignItems: string;
  flexFlow?: boolean;
  margin?: string;
};

type Container = {
  maxWidth: string;
  padding?: string;
};

type TitleContainer = {
  margin?: string;
};

// =================================== FLEX ===================================

export const Flex = styled.div<Flex>`
  height: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-flow: ${({ flexFlow }) => flexFlow && "column nowrap"};
  margin: ${({ margin }) => margin};
  position: relative;
`;

// =================================== CONTAINER ===================================

export const Container = styled.section<Container>`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  margin: 0 auto;
  padding: ${({ padding }) => (padding ? `${padding} 4rem` : "0 4rem")};

  @media screen and (max-width: 500px) {
    padding: ${({ padding }) => (padding ? `${padding} 2rem` : "0 2rem")};
  }
`;

// =================================== TITLE CONTAINER ===================================

export const TitleContainer = styled.div<TitleContainer>`
  margin: ${({ margin }) => margin};
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
`;

// =================================== TITLE ===================================

export const Title = styled.h1`
  color: ${colors.PRIMARY};
  font-size: ${fontSize.XL};
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1rem;

  strong {
    font-weight: 700;
  }
`;
