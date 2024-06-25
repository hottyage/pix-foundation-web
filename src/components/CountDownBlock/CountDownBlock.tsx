import React from "react";
import { Block } from "../ui/Block/Block";
import { Heading } from "../ui/Heading/Heading";
import { Timer } from "../ui/Timer/Timer";
import { useTranslation } from "react-i18next";

export const CountDownBlock = ({
  addCss,
  date,
}: {
  addCss: any;
  date: string;
}) => {
  const { t } = useTranslation();
  return (
    <Block addCss={addCss}>
      <>
        <Heading
          label={t("dashboard.rewards.countdown-block.title").capitalize()}
          variant="medium"
        />
        <Timer date={new Date(date)} />
      </>
    </Block>
  );
};
