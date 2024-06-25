import React from "react";
import { Block } from "../ui/Block/Block";
import { Heading } from "../ui/Heading/Heading";
import * as s from "../pages/Dashboard/NoAuthDashboard/styles";
import { ReactComponent as Logo } from "../../static/assets/svg/token.svg";

export const StatsBlock = ({
  addCss,
  value,
  label,
}: {
  label: string;
  value: number;
  addCss?: any;
}) => {
  return (
    <Block addCss={addCss && addCss}>
      <>
        <Heading label={label} variant="medium" />
        {value === undefined ? (
          <div css={s.distributionValueSkel} />
        ) : (
          <div css={s.distributionValueCss}>
            {Math.floor(value).toLocaleString("ja-JP")}
            {value.toFixed(2).slice(-3)}
            <Logo />
          </div>
        )}
      </>
    </Block>
  );
};
