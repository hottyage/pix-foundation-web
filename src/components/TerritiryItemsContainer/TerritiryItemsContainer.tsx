import React from "react";
import { Block } from "../ui/Block/Block";
import * as s from "./styles";
import { useTranslation } from "react-i18next";
import { Subtitle } from "../ui/Subtitle/Subtitle";

const TerritoryItemsContainer = () => {
  const { t } = useTranslation();
  return (
    <Block addCss={s.blockCss}>
      <div css={s.mainWrap}>
        <Subtitle
          variant={"large"}
          label={t("territories.sectors.no-sector").capitalize()}
        />
      </div>
    </Block>
  );
};

export default TerritoryItemsContainer;
