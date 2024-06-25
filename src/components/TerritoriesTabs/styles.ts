import { css } from "@emotion/react";

export const classList = css`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(249, 249, 249, 0.4);
  margin-bottom: 48px;
`;

export const listItem = css`
  display: flex;
`;

export const listItemBtn = (active: boolean) => css`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  margin-right: 32px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${active ? "#f9f9f9" : "rgba(249, 249, 249, 0.5)"};
  border-bottom: ${active ? "2px solid #ff6647" : "2px solid transparent"};
  margin-bottom: -1px;
  text-decoration: none;
  & > svg {
    margin-right: 8px;
  }
`;
