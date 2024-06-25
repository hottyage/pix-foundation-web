import React from "react";
import * as s from "./styles";

export const Heading = ({
  label,
  marginBottom,
  variant,
}: {
  label: string | number | React.ReactNode;
  marginBottom?: number;
  variant: "large" | "medium" | "small" | "main";
}) => {
  if (label === undefined) {
    return <div css={s.headingSkel(variant, marginBottom)} />;
  }

  if (variant === "large") {
    return <h3 css={s.headingCss(marginBottom, variant)}>{label}</h3>;
  } else {
    return <h4 css={s.headingCss(marginBottom, variant)}>{label}</h4>;
  }
};
