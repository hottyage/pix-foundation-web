import { css } from "@emotion/react";

export const baseCss = (absolute: boolean) => css`
  position: ${absolute ? "absolute" : "fixed"};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #000000;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle-loader {
    margin-bottom: 32px;
    border: 2px solid #1d1d20;
    border-left-color: #ff6647;
    animation: loader-spin 1.2s infinite linear;
    position: relative;
    display: inline-block;
    vertical-align: top;
    border-radius: 50%;
    width: 96px;
    height: 96px;

    &.loader-64 {
      width: 64px;
      height: 64px;
    }

    &.loader-fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 1000;
    }

    &.loader-absolute {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 1000;
    }
  }

  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
