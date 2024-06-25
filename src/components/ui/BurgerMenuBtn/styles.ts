import { css } from "@emotion/react";

export const burgerMenuCss = css`
  display: none;
  z-index: 60;
  & > button {
    border: 0;
    background: transparent;
  }
  @media (max-width: 990px) {
    display: flex;
  }
`;

export const burgerIconContainerCss = css`
  .burger-container {
    position: relative;
    width: 24px;
    height: 24px;
  }
  .burger {
    cursor: pointer;
    display: block;
    height: 24px;
    width: 24px;
    padding: 4px 3px;
  }
  .burger span {
    background: #bdbfc2;
    display: block;
    width: 18px;
    height: 1px;
    margin-bottom: 4px;
    position: relative;
    top: 0;
    transition: all ease-in-out 0.4s;
  }
  .burger-container.open span:nth-of-type(2),
  .burger-container.open span:nth-of-type(3) {
    width: 0;
    opacity: 0;
  }
  .burger-container.open span:nth-of-type(1) {
    transform: rotate(-45deg);
    top: 7px;
    height: 2px;
    width: 20px;
  }
  .burger-container.open span:nth-of-type(4) {
    transform: rotate(45deg);
    top: -9px;
    height: 2px;
    width: 20px;
  }
`;
