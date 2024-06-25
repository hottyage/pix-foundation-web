import React from "react";
import { Block } from "../ui/Block/Block";
import { Heading } from "../ui/Heading/Heading";
import { PixProgressBar } from "../ui/PixProgressBar/PixProgressBar";
import { useTranslation } from "react-i18next";

export const CirculatingSupplyBlock = ({
  addCss,
  amount,
  target,
}: {
  amount: number;
  target: number;
  addCss?: any;
}) => {
  const { t } = useTranslation();
  return (
    <Block addCss={addCss && addCss}>
      <>
        <Heading
          variant="medium"
          label={t("dashboard.circulating-supply").capitalize()}
        />
        <PixProgressBar amount={amount} target={target} />
      </>
    </Block>
  );
};
