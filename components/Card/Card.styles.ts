import styled from "styled-components";
import { colors, fontSize, margin, padding } from "../../config/variables";

export const CardBox = styled.div`
  width: 100%;
  height: 275px;
  margin-bottom: ${margin.MARGIN_4};
  display: grid;
  grid-template-columns: 300px 1fr;
  background-color: ${colors.PRIMARY};
  cursor: pointer;
  transition: transform 200ms cubic-bezier(1, 0, 0, 1) 0ms;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    font-size: ${fontSize.S};
    height: 400px;
    margin-bottom: ${margin.MARGIN_8};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
  }
`;

export const CardLeft = styled.div`
  width: 100%;
  height: 100%;
  padding: ${padding.PADDING_6};
  .card-top-title {
    color: ${colors.PRIMARY_LIGHT};
    font-size: ${fontSize.S};
    font-weight: 500;
    margin-bottom: ${margin.MARGIN_1};
  }

  .card-title {
    color: #fff;
    font-size: ${fontSize.XXL};
    font-weight: 700;
  }

  .technologies-title {
    font-size: ${fontSize.S};
    color: #fff;
    font-weight: 700;
  }

  .icon-container {
    width: 18px;
    margin-right: ${margin.MARGIN_2};
  }
`;

export const CardRight = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .img-container {
    background-color: blanchedalmond;
    width: 100%;
    height: 100%;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: ${colors.PRIMARY};
      opacity: 0.2;
    }
  }
`;
