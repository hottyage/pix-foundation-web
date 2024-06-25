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
  border-radius: 24px;
  padding: 26px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const closeBtnCss = css`
  position: absolute;
  cursor: pointer;
  top: 27px;
  right: 24px;
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

export const buttonCss = (padding: number, marginBottom: number) => css`
  border: 1px solid transparent;
  background: #27272a;
  border-radius: 16px;
  margin-bottom: ${marginBottom}px;
  color: white;
  display: flex;
  align-items: center;
  padding: ${padding}px;
  cursor: pointer;
  transition: border 0.3s ease-in-out;
  &:hover {
    border: 1px solid #ff6647;
  }
  &:disabled {
    background: rgba(249, 249, 249, 0.02);
    cursor: not-allowed;
    &:hover {
      border: 1px solid transparent;
    }
  }
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
