import React from "react";
import { useTranslation } from "react-i18next";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import { Heading } from "../ui/Heading/Heading";
import { Button } from "../ui/Button";
import { Block } from "../ui/Block/Block";
import * as s from "./styles";
import { css } from "@emotion/react";

export const SuggestPullBlock = ({ addCss }: { addCss: any }) => {
  const { t } = useTranslation();
  return (
    <Block transparent addCss={addCss}>
      <>
        <Subtitle
          label={t("dashboard.staking.suggest-pool.subtitle").capitalize()}
          variant="medium"
          marginBottom={7}
        />
        <Heading
          label={t("dashboard.staking.suggest-pool.title").capitalize()}
          variant="medium"
          marginBottom={23}
        />
        <div
          css={css`
            margin-top: auto;
            margin-bottom: -24px;
            & > button:first-of-type {
              margin-right: 24px;
            }
            & > button {
              margin-bottom: 24px;
            }
          `}
        >
          <Button
            variant="primary"
            label="Trade"
            addCss={s.dashboardPoolBtnCss}
          />
          <Button
            variant="primary"
            label="discord"
            addCss={s.dashboardPoolBtnCss}
          />
        </div>
      </>
    </Block>
  );
};
