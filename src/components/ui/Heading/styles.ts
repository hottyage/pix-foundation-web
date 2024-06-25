import { css } from "@emotion/react";

export const headingCss = (
  marginBottom: number | undefined,
  variant: string
) => css`
  font-weight: ${variant === "main"
    ? 400
    : variant === "large"
    ? 400
    : variant === "medium"
    ? 500
    : 400};
  font-size: ${variant === "main"
    ? 38
    : variant === "large"
    ? 28
    : variant === "medium"
    ? 21
    : 16}px;
  line-height: ${variant === "main"
    ? 38
    : variant === "large"
    ? 34
    : variant === "medium"
    ? 26.25
    : 24}px;
  color: #ffffff;
  ${marginBottom ? `margin-bottom: ${marginBottom}px` : ""};
  ${(variant === "large" || variant === "main") &&
  "font-family: 'Druk Wide Medium', sans-serif;"}
  ${(variant === "large" || variant === "main") && "text-transform: uppercase;"}
`;

export const headingSkel = (
  variant: string,
  marginBottom: number | undefined
) => css`
  height: ${variant === "main"
    ? 38
    : variant === "large"
    ? 34
    : variant === "medium"
    ? 26.25
    : 24}px;
  width: 80px;
  animation: pulse 2s infinite ease-in-out;
  ${marginBottom ? `margin-bottom: ${marginBottom}px` : ""};
`;
