import React from "react";
import { useTranslation } from "react-i18next";
import { Block } from "../ui/Block/Block";
import * as s from "./styles";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import { Button } from "../ui/Button";

export const TradingRewardsBlock = ({ addCss }: { addCss: any }) => {
  const { t } = useTranslation();
  return (
    <Block transparent addCss={addCss}>
      <div>
        <Subtitle
          label={t("dashboard.rewards.trading-rewards.subTitle").capitalize()}
          variant="medium"
          marginBottom={7}
        />
        <p css={s.tradingRewardsTextCss}>
          {t("dashboard.rewards.trading-rewards.text").capitalize()}
        </p>
        <div css={s.btnWrapCss}>
          <Button
            variant="primary"
            label={t("dashboard.rewards.trading-rewards.trade-btn")}
            addCss={s.dashboardRewardsBtnCss}
          />
          <Button
            variant="primary"
            label={t("dashboard.rewards.trading-rewards.learn-more-btn")}
            addCss={s.dashboardRewardsBtnCss}
          />
        </div>
      </div>
    </Block>
  );
};
