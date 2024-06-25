import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: start;
  padding: 0;
  cursor: pointer;
`;

export const input = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
  padding: 0;
`;
export const span = css`
  margin-top: 3px;
  width: 19px;
  height: 19px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: 1px solid rgba(249, 249, 249, 0.08);
  background-color: rgba(249, 249, 249, 0.08);

  & > .checkmark {
    min-width: 19px;
    min-height: 19px;
    background: #2147ff;
    border: 1px solid rgba(249, 249, 249, 0.32);
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease-in-out;
    & > svg {
      height: 11px;
      width: 9px;
    }
  }
`;
export const paragraph = (checked: boolean) => css`
  margin-left: 11px;
  font-size: 16px;
  line-height: 24px;
  color: #f9f9f9;
`;
