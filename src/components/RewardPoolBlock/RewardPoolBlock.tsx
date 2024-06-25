import React from "react";
import { Block } from "../ui/Block/Block";
import { Heading } from "../ui/Heading/Heading";
import { ReactComponent as Logo } from "../../static/assets/svg/token.svg";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import { useTranslation } from "react-i18next";
import * as s from "./styles";

export const RewardPoolBlock = ({
  addCss,
  value,
}: {
  addCss: any;
  value: number;
}) => {
  const { t } = useTranslation();
  return (
    <Block addCss={addCss}>
      <>
        <Heading
          label={t("dashboard.rewards.reward-pool.title").capitalize()}
          variant="medium"
        />
        <div>
          <div css={s.rewardBlockLabelCss}>
            <Heading label={value.toLocaleString("ja-JP")} variant="medium" />
            <Logo />
          </div>
          <Subtitle
            label={t("dashboard.rewards.reward-pool.subTitle")}
            variant="medium"
          />
        </div>
      </>
    </Block>
  );
};
