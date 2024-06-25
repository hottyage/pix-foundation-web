import { css } from "@emotion/react";

export const mainContentCss = css`
  padding: 18px 24px 0 24px;
`;

export const liquidityPoolHeadingCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const lpLink = css`
  text-decoration: none;
  color: #ff6647;
  font-size: 16px;
  line-height: 150%;
`;
export const liquidityPoolStatsCss = css`
  display: flex;
  & > div {
    margin-right: 64px;
  }
  & > div:first-of-type {
    margin-right: 48px;
  }
  @media (max-width: 600px) {
    justify-content: space-between;
    & > div {
      width: 30%;
      margin-right: 0;
    }
    & > div:first-of-type {
      margin-right: 0;
    }
  }
`;
export const statsItemCss = css`
  display: flex;
  flex-direction: column;
`;
export const statsItemHeadingCss = css`
  display: flex;
  align-items: center;
  & > svg {
    height: 20px;
    width: 20px;
    margin-left: 6px;
  }
`;

export const stakeBlockCss = css`
  padding: 24px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
`;

export const amountCss = css`
  display: flex;
  flex-direction: column;
  min-width: 75px;
  border-radius: 4px;
`;

export const stakeBtnCss = css`
  padding: 15px 24px;
  margin-left: 15px;
  border-radius: 4px;
`;

export const calmBtn = css`
  align-self: start;
  cursor: pointer;
  z-index: 10;
  padding: 15px 24px;
  margin-left: 24px;
  margin-right: 20px;
  border-radius: 4px;
  &:disabled {
    opacity: 0.5;
  }
`;
