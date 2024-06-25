import { css } from "@emotion/react";

export const linkCss = (underline?: boolean) => css`
  color: #2147ff;
  font-size: 16px;
  text-decoration-color: #2147ff;
  text-decoration: ${underline ? "underline" : "none"};
`;
