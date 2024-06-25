import { css } from "@emotion/react";

export const blockCss = css`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  padding: 0;
  overflow: hidden;
  margin-right: 30px;
`;
export const mainContentWrapCss = css`
  display: flex;
  flex-direction: column;
  padding: 23px 24px 16px 24px;
  border-bottom: 1px solid rgba(249, 249, 249, 0.08);
`;

export const imageCss = css`
  width: 200px;
  height: 248px;
  object-fit: contain;
  margin: 0 auto 34px auto;
`;

export const labelsCss = css`
  font-size: 12px;
  line-height: 150%;
  color: rgba(249, 249, 249, 0.5);
  & > span {
    color: white;
  }
`;

export const footerWrapCss = css`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
`;

export const earnBlockCss = css`
  display: flex;
  align-items: center;
  & > svg {
    margin-left: 6px;
    height: 20px;
    width: 20px;
  }
`;

export const claimBlockCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const statsRowCss = (marginBottom: number) => css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${marginBottom}px;
`;

export const navCss = css`
  display: flex;
  & div:first-of-type {
    margin-right: 19px;
  }
`;
