import React from "react";
import { css } from "@emotion/react";
import * as s from "./styles";

type ButtonProps = {
  label?: string;
  variant: keyof typeof s;
  children?: React.ReactNode;
  onClick?: () => void;
  addCss?: any;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  withoutBorder?: boolean;
  rounded?: boolean;
};

export const Button = ({
  label,
  variant,
  children,
  addCss,
  withoutBorder,
  rounded,
  ...props
}: ButtonProps) => {
  const style = [s[variant]];
  if (rounded) {
    style.push(
      css`
        border-radius: 8px;
      `
    );
  }
  if (withoutBorder) {
    style.push(
      css`
        border: none;
      `
    );
  }
  return (
    <button css={[style, addCss]} {...props}>
      {label || children}
    </button>
  );
};
