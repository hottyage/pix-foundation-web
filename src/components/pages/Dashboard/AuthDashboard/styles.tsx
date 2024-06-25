import { css } from "@emotion/react";

export const sectionWrapperCss = css`
  margin-top: 149px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin-top: 95px;
  }
`;
export const mainBlockCss = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-bottom: 60px;
  order: 1;
  @media (max-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  @media (max-width: 570px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
  }
`;

export const walletWrapperCss = css`
  display: block;
  grid-area: 1 / 3 / 2 / 5;
  width: 100%;
  height: 100%;
  @media (max-width: 1000px) {
    grid-area: 1 / 3 / 2 / 5;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const walletBlockCss = css`
  height: 100%;
`;
export const circulatingWrapperCss = css`
  display: block;
  grid-area: 2 / 3 / 3 / 4;
  width: 100%;
  @media (max-width: 1000px) {
    grid-area: 3 / 1 / 4 / 2;
  }
`;

export const circulatingSupplyBlockCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const distributionWrapperCss = css`
  display: block;
  grid-area: 2 / 4 / 3 / 5;
  width: 100%;
  height: 100%;
  @media (max-width: 1000px) {
    grid-area: 3 / 2 / 4 / 3;
  }
`;

export const statsBlockCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const proposalWrapperCss = css`
  display: block;
  grid-area: 2 / 3 / 3 / 4;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    grid-area: 4 / 1 / 5 / 2;
  }
`;

export const votingWrapperCss = css`
  display: block;
  grid-area: 2 / 4 / 3 / 5;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    grid-area: 4 / 2 / 5 / 3;
  }
`;
export const tradingRewardsWrapperCss = css`
  order: 3;
  margin-bottom: 55px;
  //@media (max-width: 570px) {
  //  order: 3;
  //  order: 3;
  //}
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
  width: 350px;
  padding: 24px 24px 27px 24px;
  height: 200px;
`;
export const landmarksBlockCss = css`
  order: 3;
  margin-bottom: 60px;
  @media (max-width: 570px) {
    order: 5;
  }
`;
export const territoriesBlockCss = css`
  order: 4;
  margin-bottom: 60px;
  @media (max-width: 570px) {
    order: 4;
  }
`;
export const stakingBlockCss = css`
  order: 2;
  margin-bottom: 60px;
  //@media (max-width: 570px) {
  //  order: 2;
  //}
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
  height: 256px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  overflow: hidden;
  width: 100%;
  max-width: 48.56%;
  @media (max-width: 955px) {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

export const suggestPoolBlockCss = css`
  min-width: 48.56%;
  height: inherit;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;
