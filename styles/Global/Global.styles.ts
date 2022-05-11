// General
import styled from "styled-components";

//  Types

type Flex = {
  justifyContent: string;
  alignItems: string;
  flexFlow?: boolean;
};

type Container = {
  maxWidth: string;
};

// =================================== FLEX ===================================

export const Flex = styled.div<Flex>`
  height: 100%;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-flow: ${({ flexFlow }) => flexFlow && "column"};
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

// =================================== TITLE ===================================

export const Title = styled.h1`
  font-size: 2rem;
`;
