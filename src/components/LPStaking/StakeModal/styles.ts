import { css } from "@emotion/react";

export const wrapperCss = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modalWrapperCss = css`
  width: 390px;
  background: #1d1d20;
  border-radius: 12px;
  padding: 26px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const closeBtnCss = css`
  position: absolute;
  top: 27px;
  right: 24px;
  cursor: pointer;
`;

export const stakeBtnCss = css`
  margin-top: 24px;
  padding: 15px 24px;
  &:disabled {
    opacity: 0.3;
  }
`;

export const amountCss = css`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 6px;
`;

export const blockCss = (padding: number, marginBottom: number) => css`
  display: flex;
  padding: ${padding}px;
  background: #27272a;
  border-radius: 16px;
  margin-bottom: ${marginBottom}px;
  align-items: center;
  & > svg {
    order: 0;
  }
  & > p {
    order: 1;
    margin-left: 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const checkBoxCss = css`
  & > span {
    color: #ff6647;
  }
`;

export const inputWrapCss = css`
  border-radius: 12px 12px 0 0;
  background-color: #2f2f31;
  display: flex;
  height: 48px;
  padding: 14px;
  justify-content: space-between;
  align-items: center;

  & > input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  & > div {
    color: #ff6647;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const subInputWrapCss = css`
  background-color: #0b0b0c;
  display: flex;
  height: 48px;
  padding: 14px;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  border-radius: 0 0 12px 12px;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const redArrowCss = css`
  height: 12px;
  width: 9px;
  margin: 4px;
  & path {
    fill: #e45555;
  }
`;

export const greenArrowCss = css`
  height: 12px;
  width: 9px;
  margin: 4px;
  & path {
    fill: #69ffd2;
  }
`;

export const stakedWrap = css`
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
`;
