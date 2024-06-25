import { css } from "@emotion/react";

export const mainWrapperCss = css`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const mainBlockWrapperCss = css`
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 30px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(249, 249, 249, 0.16); ;
`;

export const secondBlockCss = css`
  height: 229px;
`;

export const cardContent = css`
  display: flex;
`;
export const cardImageWrap = css`
  min-width: 254px;
  position: relative;
`;
export const cardImageCss = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const maximizeIconCss = css`
  position: absolute;
  bottom: 77px;
  right: 74px;
`;

export const cardStats = css`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const priceCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;
`;

export const logoCss = css`
  margin-left: 7px;
  margin-right: 9px;
  height: 20px;
  width: 20px;
`;

export const priceUsd = css`
  font-size: 12px;
  line-height: 18px;
  color: rgba(249, 249, 249, 0.5);
`;

export const expectedDateCss = css`
  font-size: 12px;
  line-height: 18px;
  color: rgba(249, 249, 249, 0.5);
  & > span {
    color: white;
  }
`;

export const cardNav = css`
  padding-top: 100px;
  padding-bottom: 83px;
  min-width: 205px;
  display: flex;
  justify-content: space-between;
`;

export const btnCss = css`
  display: block;
  width: auto;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 2px;
  padding: 15px 17px;
`;
