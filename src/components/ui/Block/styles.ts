import { css } from "@emotion/react";

export const containerCss = (transparent: boolean | undefined) => css`
  background: ${transparent ? "transparent" : "rgba(249, 249, 249, 0.04)"};
  border: ${transparent
    ? "1px dashed rgba(249, 249, 249, 0.32);"
    : "1px solid rgba(249, 249, 249, 0.08)"};
  border-radius: 12px;
  padding: 24px;
`;
