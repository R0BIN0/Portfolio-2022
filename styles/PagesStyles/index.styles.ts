// General
import styled from "styled-components";
import { colors } from "../../config/variables";

export const LineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1250px;
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
    top: 175px;
    right: -65px;
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

export const CardContainer = styled.div`
  @media screen and (max-width: 1250px) {
    margin-top: 6rem;
  }

  .card-separation {
    width: 100%;
    @media screen and (max-width: 1250px) {
      margin-top: 4rem;
    }
  }
`;
