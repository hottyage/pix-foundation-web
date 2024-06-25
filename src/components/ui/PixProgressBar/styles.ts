import { css } from "@emotion/react";

export const wrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
`;

export const wrapSkelCss = css`
  height: 57px;
  animation: pulse 2s infinite ease-in-out;
  margin-top: auto;
  border-radius: 5px;
`;

export const labelsCss = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 11px;
`;
export const amountValueCss = css`
  font-size: 12px;
  line-height: 18px;
  color: #f9f9f9;
  display: flex;
  align-items: center;
  & > svg {
    height: 14px;
    width: 14px;
    margin-left: 4px;
  }
`;

export const targetValueCss = css`
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: rgba(249, 249, 249, 0.5);
`;
export const meterCss = css`
  width: 100%;
  background-color: rgba(249, 249, 249, 0.08);
  border-radius: 40px;
  min-height: 2px;
  display: block;
  margin-bottom: 8px;
  & > span {
    display: block;
    background: #84d5bc;
    border-radius: 40px;
    height: 2px;
  }
`;
export const percentsCss = css`
  font-size: 12px;
  line-height: 18px;
  color: #f9f9f9;
`;
