// General
import { motion } from "framer-motion";
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

type Text = {
  maxWidth?: string;
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

export const Title = styled(motion.h1)`
  color: ${colors.PRIMARY};
  font-size: ${fontSize.XL};
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 1rem;

  strong {
    font-weight: 700;
  }
`;

// =================================== TEXT TITLE ===================================

export const TextTitle = styled(motion.h3)`
  color: ${colors.PRIMARY};
  font-size: ${fontSize.MD};
  font-weight: 700;
  margin-bottom: 1rem;
`;

// =================================== TEXT ===================================

export const Text = styled(motion.p)<Text>`
  color: ${colors.PRIMARY_LIGHT};
  font-size: ${fontSize.S};
  line-height: 1.75;
  font-weight: 500;
  max-width: ${({ maxWidth }) => maxWidth};
  margin: ${({ margin }) => margin};

  & strong {
    font-weight: 700;
  }

  & i {
    font-style: italic;
  }

  & span {
    color: ${colors.CTA};
  }
`;

// =================================== LINE CONTAINER ===================================

export const LineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1250px;
  height: 100%;
  margin: 0 auto;

  .line-border {
    width: 100%;
    height: 100%;
    position: absolute;
    border-right: 2px solid ${colors.SECONDARY};
    @media screen and (max-width: 1500px) {
      display: none;
    }
  }

  .line-absolute {
    position: absolute;
    top: 260px;
    right: -70px;
    transform: rotate(90deg);
    opacity: 0.5;
  }

  .line-title {
    font-weight: 500;
    color: ${colors.SECONDARY_DARK};
    margin-right: 0.75rem;
    height: 20px;
  }

  .line-arrow {
    width: 45px;
    height: 2px;
    transition: all 500ms cubic-bezier(1, 0, 0, 1) 0ms;
    background-color: ${colors.SECONDARY_DARK};
  }

  .line-arrow::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: ${colors.SECONDARY_DARK};
    right: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    border-radius: 30px;
  }

  .line-arrow::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: ${colors.SECONDARY_DARK};
    right: 0;
    transform: rotate(-45deg);
    transform-origin: 100% 0%;
    border-radius: 30px;
  }
`;

// =================================== PAGE TRANSITION ===================================

export const PageTransition = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: ${colors.PRIMARY};
  z-index: 10000;
`;
