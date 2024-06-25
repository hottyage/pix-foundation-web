import { css } from "@emotion/react";

export const mainWrap = css`
  padding-top: 160px;
  padding-bottom: 94px;
`;

export const flexContainer = css`
  display: flex;
`;

export const pigIcon = css`
  margin-left: 5px;
`;

export const categoryContainer = css`
  margin-bottom: 47px;
`;

export const subtitleCss = (maxWidth?: number | undefined) => css`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  color: rgba(249, 249, 249, 0.5);
  margin-bottom: 25px;
  max-width: ${maxWidth + "px" || "auto"};
`;

export const linkCss = css`
  color: #2147ff;
  font-size: 16px;
  text-decoration-color: #2147ff;
`;
