import { css } from "@emotion/react";

export const subtitleCss = (
  variant: string,
  marginBottom: number | undefined
) => css`
  font-size: ${variant === "main" ? 21 : variant === "large" ? 16 : 12}px;
  line-height: ${variant === "large" ? 24 : 18}px;
  font-weight: ${variant === "main" ? 500 : 400}px;
  color: rgba(249, 249, 249, 0.5);
  ${marginBottom ? `margin-bottom:${marginBottom}px` : ""}
`;
