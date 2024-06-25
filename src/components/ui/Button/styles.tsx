import { css } from "@emotion/react";

export const baseCss = css`
  outline: none;
  padding: 15.5px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  border: 1px solid transparent;
  font-family: "Inter", sans-serif;

  &:active,
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: default;
    background-color: rgba(249, 249, 249, 0.16);
    border: 1px solid transparent;
    color: rgba(249, 249, 249, 0.32);
  }
`;
export const hover = css`
  &:hover {
    transition: background 0.3s ease-in-out;
    background: #ff6647;
  }
`;

export const primary = css`
  ${baseCss};
  padding: 10.5px 16px;
  background: rgba(249, 249, 249, 0.08);

  color: white;
  font-weight: 700;
  border: 1px solid rgba(249, 249, 249, 0.16);
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
`;

export const secondary = css`
  ${baseCss};
  ${hover};
  padding: 10.5px 16px;
  color: white;
  background: rgba(255, 102, 71, 0.2);

  border-color: #ff6647;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16.94px;
  letter-spacing: 2px;
  font-weight: 700;
  border-radius: 4px;
`;

export const transparent = css`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`;
export const withoutBorder = css`
  border: none;
`;
