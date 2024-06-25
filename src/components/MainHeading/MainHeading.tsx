import React from "react";
import * as s from "../pages/Dashboard/NoAuthDashboard/styles";
import { css } from "@emotion/react";
import { Heading } from "../ui/Heading/Heading";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import { ReactComponent as HelpIcon } from "../../static/assets/svg/help-icon.svg";
import IconLink from "../icon-link/IconLink";
import { ReactComponent as LaunchIcon } from "../../static/assets/svg/launch-icon.svg";
import { ReactComponent as AddIcon } from "../../static/assets/svg/add-icon.svg";
import { useTranslation } from "react-i18next";

const MainHeading = () => {
  const { t } = useTranslation();
  return (
    <div css={s.headingBlockCss}>
      <div css={s.headingCss}>
        <div
          css={css`
            max-width: 430px;
          `}
        >
          <Heading
            label={t("no-auth.dashboard.title").capitalize()}
            marginBottom={48}
            variant={"main"}
          />
        </div>
        <Subtitle
          label={t("no-auth.dashboard.subTitle").capitalize()}
          variant="main"
        />
        <div css={s.flex}>
          <p css={s.blueText}>705.29% APY</p>
          <HelpIcon />
        </div>
        <div
          css={css`
            height: 16px;
          `}
        />
        <div css={s.flex}>
          <IconLink href={""} Icon={LaunchIcon} label={"Buy IXT"} />
          <IconLink href={""} Icon={AddIcon} label={"Add to wallet"} />
        </div>
      </div>
    </div>
  );
};

export default MainHeading;
