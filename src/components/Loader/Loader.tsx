import React from "react";
import * as s from "./styles";

export default function Loader({ absolute = false }: { absolute?: boolean }) {
  return (
    <div css={s.baseCss(absolute)}>
      <div className="circle-loader" />
    </div>
  );
}
