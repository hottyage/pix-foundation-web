import { css } from "@emotion/react";

export const containerCss = css`
  margin-top: 149px;
  display: flex;
  flex-direction: column;
  @media (max-width: 990px) {
    margin-top: 95px;
  }
`;
export const blockWrapperCss = (marginBottom: number) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${marginBottom}px;
  @media (max-width: 1385px) {
    flex-direction: column;
  }
`;
export const headingBlockCss = css`
  display: flex;
  align-items: center;
  @media (max-width: 1385px) {
    width: 100%;
    margin-bottom: 22px;
  }
`;
export const headingBlocksWrap = css`
  display: flex;
  justify-content: space-between;
  align-self: self-start;
  width: 50%;
  @media (max-width: 1385px) {
    width: 100%;
  }
  @media (max-width: 625px) {
    flex-direction: column;
    margin-bottom: -24px;
  }
`;

export const flex = css`
  width: 100%;
  display: flex;
  margin-top: 16px;
  align-items: center;
`;

export const blueText = css`
  color: #84d4bc;
  font-family: Druk Wide;
  font-style: normal;
  margin-right: 25px;
  font-weight: 400;
  font-size: 38px;
  line-height: 38px;
  text-transform: uppercase;
`;

export const headingCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 1385px) {
    max-width: 100%;
  }
`;
export const headingBlockWrapperCss = (marginLeft: string) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 255px;
  height: 165px;
  margin-left: ${marginLeft};
  @media (max-width: 1385px) {
    max-width: 48%;
  }
  @media (max-width: 625px) {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

export const distributionValueSkel = css`
  margin-top: auto;
  height: 26px;
  animation: pulse 2s infinite ease-in-out;
  border-radius: 5px;
`;

export const distributionValueCss = css`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 21px;
  line-height: 26px;
  color: #ffffff;
  & > svg {
    margin-left: 6px;
    height: 20px;
    width: 20px;
  }
`;
export const pullWrapperCss = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 955px) {
    flex-direction: column;
  }
`;
export const liquidityPullBlockCss = css`
  width: 100%;
  max-width: 48.56%;
  padding: 18px 24px 38px 24px;
  @media (max-width: 955px) {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

export const liquidityPoolHeadingCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const liquidityPoolStatsCss = css`
  display: flex;
  & > div {
    margin-right: 64px;
  }
  & > div:first-of-type {
    margin-right: 48px;
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
export const suggestPoolBlockCss = css`
  min-width: 48.56%;
  padding: 24px;
`;

export const dashboardPoolBtnCss = css`
  width: unset;
  display: inline-block;
  margin-right: 24px;
  padding: 15px 24px;
  font-size: 14px;
  line-height: 16.94px;
`;

export const rewardsBlockWrapperCss = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -24px;
  margin-bottom: -24px;
  & > div {
    margin-right: 24px;
    margin-bottom: 24px;
    flex: 1;
  }
`;

export const rewardBlockCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 350px;
  padding: 24px 24px 27px 24px;
  height: 200px;
  @media (max-width: 425px) {
    min-width: 280px;
    height: 147px;
  }
`;
export const trandingRewardBlockCss = css`
  @media (max-width: 425px) {
    padding: 24px 18px 24px 24px;
    min-width: 280px;
    height: 200px;
  }
`;

export const rewardBlockLabelCss = css`
  display: flex;
  align-items: center;
  & > svg {
    margin-left: 6px;
    height: 20px;
    width: 20px;
  }
`;
export const tradingRewardsTextCss = css`
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 17px;
`;
export const dashboardRewardsBtnCss = css`
  width: unset;
  display: inline-block;
  margin-right: 16px;
  padding: 10.5px 16px;
  font-size: 14px;
  line-height: 16.94px;
`;
export const textBlockCss = css`
  padding: 20px 24px;
  & > p {
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;
