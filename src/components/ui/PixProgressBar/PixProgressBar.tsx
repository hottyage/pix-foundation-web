import React from "react";
import * as s from "./styles";
import { ReactComponent as PixLogo } from "../../../static/assets/svg/token.svg";

export const PixProgressBar = ({
  amount,
  target,
}: {
  amount: number;
  target: number;
}) => {
  const percents = (amount / target) * 100;

  if (!amount || !target) {
    return <div css={s.wrapSkelCss} />;
  }
  return (
    <div css={s.wrapperCss}>
      <div css={s.labelsCss}>
        <div css={s.amountValueCss}>
          {amount?.toLocaleString("ja-JP")}
          <PixLogo />
        </div>
        <div css={s.targetValueCss}>{target?.toLocaleString("ja-JP")}</div>
      </div>
      <div css={s.meterCss}>
        <span style={{ width: `${percents}%` }} />
      </div>
      <div css={s.percentsCss}>{percents?.toFixed(2)}%</div>
    </div>
  );
};
