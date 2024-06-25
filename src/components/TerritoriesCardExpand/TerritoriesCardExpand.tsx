import React from "react";
import * as s from "./styles";
import { Block } from "../ui/Block/Block";
import { Heading } from "../ui/Heading/Heading";
import mockedImage from "../../static/assets/png/mocked-area-img.png";
import { Trans } from "react-i18next";
import { Button } from "../ui/Button";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import { ReactComponent as TokenLogo } from "../../static/assets/svg/token.svg";

const options = { month: "long", day: "numeric" };
const date: any = new Date("2021-10-28T23:59:59+01:00");

const TerritoriesCardExpand = ({ itemId }: { itemId: any }) => {
  return (
    <Block addCss={s.blockCss}>
      <>
        <div css={s.mainContentWrapCss}>
          <Heading label={"Area 1"} variant="medium" marginBottom={32} />
          <img src={mockedImage} alt="territories_item_img" css={s.imageCss} />
          <div css={s.labelsCss}>
            <Trans
              i18nKey="dashboard.rewards.timer.label"
              values={{
                date: date.toLocaleString("en-US", options),
              }}
              components={{ span: <span /> }}
            />
          </div>
        </div>
        <div css={s.footerWrapCss}>
          <div css={s.claimBlockCss}>
            <div>
              <div css={s.earnBlockCss}>
                <Heading label={560} variant="medium" />
                <TokenLogo />
              </div>
              <Subtitle label={"Total earned this epoch"} variant={"medium"} />
            </div>
            <div>
              <Button variant={"primary"} label={"Claim"} disabled={true} />
            </div>
          </div>
          <div css={s.statsRowCss(8)}>
            <Subtitle label={"Quantity owned"} variant={"medium"} />
            <Heading label={100} variant="medium" />
          </div>
          <div css={s.statsRowCss(24)}>
            <Subtitle label={"Quantity staked"} variant={"medium"} />
            <Heading label={25} variant="medium" />
          </div>
          <div css={s.navCss}>
            <div>
              <Button variant={"secondary"} label={"stake"} />
            </div>
            <div>
              <Button variant={"primary"} label={"unstake"} />
            </div>
          </div>
        </div>
      </>
    </Block>
  );
};

export default TerritoriesCardExpand;
