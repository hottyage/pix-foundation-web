import { css } from "@emotion/react";

export const headerWrap = css`
  display: flex;
  justify-content: space-between;
  @media (max-width: 570px) {
    padding-bottom: 34px;
  }
`;

export const mainWrap = css`
  position: relative;
  height: 100%;
`;

export const backgroundImage = css`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const headingButtonWrap = css`
  padding: 10px 16px;
  display: flex;
  @media (max-width: 570px) {
    display: none;
  }
`;

export const mobileHeadingButtonWrap = css`
  display: none;
  @media (max-width: 570px) {
    padding: 19px 24px;
    display: flex;
    margin-bottom: 16px;
    width: 100%;
    order: 1;
  }
`;

export const flexContainer = css`
  display: flex;
`;

export const priceContainer = (isLoading: boolean) => css`
  display: ${isLoading ? "none" : "flex"};
  margin-top: 6px;
`;

export const priceContainerSkel = (isLoading: boolean) => css`
  display: ${!isLoading ? "none" : "block"};
  border-radius: 5px;
  margin-top: 6px;
  width: 70px;
  height: 26px;
  animation: pulse 2s infinite ease-in-out;
`;

export const green = css`
  color: #14c75c;
  align-self: center;
  font-size: 12px;
  margin-right: 5px;
`;

export const pixIcon = css`
  height: 20px;
  width: 20px;
  margin-left: 7px;
`;

export const rewardContainer = css`
  margin-right: 16px;
`;

export const calmBtn = css`
  align-self: center;
  cursor: pointer;
  z-index: 10;
`;

export const mobileCalmBtnWrap = css`
  align-self: center;
  margin-left: auto;
`;

export const statsItemsWrap = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -19px;
`;

export const statWrap = css`
  display: flex;
  flex-direction: column;
  margin-right: 48px;
  margin-bottom: 19px;
`;

export const statIcon = css`
  margin-right: 8px;
  width: 16px;
  height: 15px;
`;

export const countContainer = css`
  display: flex;
  margin-top: 5px;
  align-items: center;
`;

export const chartWrap = css`
  margin: 0 -11px;
  @media (max-width: 570px) {
    display: none;
  }
`;
