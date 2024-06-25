import React, { ReactElement } from "react";
import * as s from "./styles";

export const Block = ({
  children,
  addCss,
  transparent,
}: {
  children: ReactElement;
  addCss?: any;
  transparent?: boolean;
}) => <div css={[s.containerCss(transparent), addCss]}>{children}</div>;
