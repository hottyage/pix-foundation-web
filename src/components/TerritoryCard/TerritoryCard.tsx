import React from "react";
import { Block } from "../ui/Block/Block";
import * as s from "./styles";
import { useTranslation } from "react-i18next";
import { Heading } from "../ui/Heading/Heading";
import { ReactComponent as TerritoryBadge } from "../../static/assets/svg/territory-badge.svg";
import { ReactComponent as TokenLogo } from "../../static/assets/svg/token.svg";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export const TerritoryCard = ({
  type,
  itemId,
  federation,
  domains,
  sectors,
  amount,
}: {
  type: string;
  itemId: string;
  federation: number;
  domains: number;
  sectors: number;
  amount: number;
}) => {
  const { t } = useTranslation();

  const svgColors = {
    legendary: "rgba(255, 212, 95, 0.4)",
    rare: "rgba(255, 108, 166, 0.4)",
    uncommon: "rgba(0, 198, 192, 0.4)",
    common: "rgba(83, 243, 131, 0.4)",
    outliers: "rgba(255, 212, 95, 0.4)",
  } as any;

  return (
    <Link to={`/territories/${type}`} css={s.linkCss}>
      <Block addCss={s.blockCss}>
        <>
          <div css={s.mainContentCss}>
            <div css={s.labelCss}>
              <Heading
                label={t(`dashboard.territory-card.${type}`).capitalize()}
                variant="medium"
              />
              <TerritoryBadge
                css={css`
                  & path {
                    stroke: ${svgColors[type]};
                    fill: ${svgColors[type]};
                  }
                `}
              />
            </div>
            <ul css={s.territoryListCss}>
              <li>
                <Heading label={federation} variant="medium" />
                <Subtitle
                  label={t("dashboard.territory-card.list.area").capitalize()}
                  variant="large"
                />
              </li>
              <li>
                <Heading label={domains} variant="medium" />
                <Subtitle
                  label={t("dashboard.territory-card.list.sector").capitalize()}
                  variant="large"
                />
              </li>
              <li>
                <Heading label={sectors} variant="medium" />
                <Subtitle
                  label={t("dashboard.territory-card.list.zone").capitalize()}
                  variant="large"
                />
              </li>
              <li>
                <Heading label={sectors} variant="medium" />
                <Subtitle
                  label={t("dashboard.territory-card.list.domain").capitalize()}
                  variant="large"
                />
              </li>
            </ul>
          </div>
          <div css={s.footerContentCss}>
            <div css={s.amountCss}>
              <Heading
                label={`${Math.floor(amount).toLocaleString("ja-JP")}${amount
                  .toFixed(1)
                  .slice(-2)}`}
                variant="medium"
              />
              <TokenLogo />
            </div>
            <Subtitle
              label={t("dashboard.territory-card.list.total").capitalize()}
              variant="medium"
            />
          </div>
        </>
      </Block>
    </Link>
  );
};
