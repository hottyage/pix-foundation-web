import { css } from "@emotion/react";

export const linkCss = css`
  text-decoration: none;
`;

export const blockCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 255px;
  width: 255px;
  min-height: 286px;
  padding: 0;
  overflow: hidden;
  margin-right: 30px;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: rgba(249, 249, 249, 0.5);
  }
`;
export const mainContentCss = css`
  padding: 24px 24px 18px 24px;
  border-bottom: 1px solid rgba(249, 249, 249, 0.08); ;
`;

export const labelCss = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
`;

export const territoryListCss = css`
  & > li {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
    & > h4 {
      margin-right: 7px;
    }
  }
`;
export const footerContentCss = css`
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 16px 24px 19px 24px;
`;

export const amountCss = css`
  display: flex;
  align-items: center;
  & > svg {
    height: 20px;
    width: 20px;
    margin-left: 6px;
  }
`;
