import { css } from "@emotion/react";

export const baseCss = css`
  min-height: 100vh;
  background-color: #0b0b0c;
  position: relative;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const containerCss = css`
  max-width: 1440px;
  width: 100%;
  padding: 0 166px;
  margin: 0 auto;
  min-height: 100%;
  flex: 1 0 auto;
  @media (max-width: 1024px) {
    padding: 0 83px;
  }
  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;
