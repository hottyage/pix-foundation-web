import React from "react";
import { Heading } from "../../ui/Heading/Heading";
import * as s from "./styles";
import { useTranslation } from "react-i18next";
import { Subtitle } from "../../ui/Subtitle/Subtitle";
import Uniswap from "../../Uniswap/Uniswap";

const Trade = () => {
  const { t } = useTranslation();
  return (
    <div css={s.mainWrap}>
      <div css={s.headingWrap}>
        <Heading
          label={t("trade.heading").capitalize()}
          variant={"large"}
          marginBottom={13}
        />
        <Subtitle
          label={t("trade.subtitle").capitalize()}
          variant={"large"}
          marginBottom={49}
        />
      </div>
      <Uniswap />
    </div>
  );
};

export default Trade;
