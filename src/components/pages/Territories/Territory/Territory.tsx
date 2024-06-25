import React from "react";
import * as s from "./styles";
import { Heading } from "../../../ui/Heading/Heading";
import { useTranslation } from "react-i18next";
import { Subtitle } from "../../../ui/Subtitle/Subtitle";
import { ReactComponent as Pig } from "../../../../static/assets/svg/pig.svg";
import TerritoryItemsContainer from "../../../TerritiryItemsContainer/TerritiryItemsContainer";
import CustomLink from "../../../CustomLink/CustomLink";
import TerritoriesTabs from "../../../TerritoriesTabs/TerritoriesTabs";
import { HorizontalSlider } from "../../../ui/HorizontalSlider/HorizontalSlider";
import { MOCKEDTERRITORYLIST } from "../../../../constants/constants";
import TerritoriesCardExpand from "../../../TerritoriesCardExpand/TerritoriesCardExpand";
import { css } from "@emotion/react";

const Territory = ({ territory }: { territory: string }) => {
  const { t } = useTranslation();

  return (
    <div css={s.mainWrap}>
      <Heading
        label={t(`dashboard.territories.title`).capitalize()}
        variant={"large"}
        marginBottom={5}
      />
      <Subtitle
        label={t("territories.subtitle").capitalize()}
        variant={"large"}
        marginBottom={48}
      />
      <TerritoriesTabs currentTab={territory} />
      <div css={s.categoryContainer}>
        <div css={s.flexContainer}>
          <Heading
            label={t("dashboard.territory-card.list.area").capitalize()}
            variant={"medium"}
            marginBottom={8}
          />
        </div>
        <div css={s.subtitleCss(440)}>
          {`${t("territories.area.subtitle", {
            type: territory,
          })}`.capitalize()}{" "}
          <CustomLink
            label={`${t("territories.structure.link")}.`}
            href={"#"}
            underline
          />
        </div>
      </div>
      <div
        css={css`
          margin-bottom: 65px;
        `}
      >
        <HorizontalSlider height={660}>
          {MOCKEDTERRITORYLIST.map((item) => (
            <TerritoriesCardExpand key={item.type} itemId={item.type} />
          ))}
        </HorizontalSlider>
      </div>
      <div css={s.categoryContainer}>
        <div css={s.flexContainer}>
          <Heading
            label={t("dashboard.territory-card.list.sector").capitalize()}
            variant={"medium"}
            marginBottom={8}
          />
        </div>
        <div css={s.subtitleCss(455)}>
          <Subtitle
            label={t("territories.sectors.subtitle", {
              type: territory,
            }).capitalize()}
            variant={"large"}
            marginBottom={25}
          />
        </div>
        <TerritoryItemsContainer />
      </div>
      <div css={s.categoryContainer}>
        <div css={s.flexContainer}>
          <Heading
            label={t("dashboard.territory-card.list.zone").capitalize()}
            variant={"medium"}
            marginBottom={8}
          />
          <Pig css={s.pigIcon} />
        </div>
        <div css={s.subtitleCss(440)}>
          {`${t("territories.federations.subtitle", {
            type: territory,
          })}`.capitalize()}
        </div>
        <TerritoryItemsContainer />
      </div>
      <div css={s.categoryContainer}>
        <div css={s.flexContainer}>
          <Heading
            label={t("dashboard.territory-card.list.domain").capitalize()}
            variant={"medium"}
            marginBottom={8}
          />
          <Pig css={s.pigIcon} />
        </div>
        <div css={s.flexContainer}>
          <div css={s.subtitleCss(440)}>
            {`${t("territories.domains.subtitle", {
              type: territory,
            })}`.capitalize()}
          </div>
        </div>
        <TerritoryItemsContainer />
      </div>
    </div>
  );
};

export default Territory;
