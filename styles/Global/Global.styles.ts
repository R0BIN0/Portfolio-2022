// General
import styled from "styled-components";
import { fontSize } from "../../config/variables";

//  Types

type Flex = {
  justifyContent: string;
  alignItems: string;
  flexFlow?: boolean;
  margin?: string;
};

type Container = {
  maxWidth: string;
};

type TitleContainer = {
  margin: string;
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

export const Container = styled.div<Container>`
  width: 100%;
  height: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
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
  font-size: ${fontSize.XXL};
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;

  strong {
    font-weight: 600;
  }
`;
