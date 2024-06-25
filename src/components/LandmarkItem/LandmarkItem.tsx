import React from "react";
import { Block } from "../ui/Block/Block";
import { Heading } from "../ui/Heading/Heading";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import { ReactComponent as TokenLogo } from "../../static/assets/svg/token.svg";
import * as s from "./styles";
import { Button } from "../ui/Button";

const LandmarkItem = ({
  title,
  amount,
  image,
  isLoading = false,
}: {
  title: string;
  amount: number;
  image: any;
  isLoading?: boolean;
}) => {
  return (
    <Block addCss={s.blockCss}>
      <>
        <div css={s.labelCss(isLoading)}>
          <Heading label={title} variant="medium" marginBottom={7} />
          <img src={image} alt="item_img" />
        </div>
        <div css={s.footerWrapCss}>
          <div css={s.claimBlockCss}>
            <div>
              <div css={s.earnBlockCssSkel(isLoading)} />
              <div css={s.earnBlockCss(isLoading)}>
                <Heading label={560} variant="medium" />
                <TokenLogo />
              </div>
              <Subtitle label={"Total earnings"} variant={"medium"} />
            </div>
            <div>
              <Button variant={"primary"} label={"Claim"} disabled={true} />
            </div>
          </div>
          <div css={s.statsRowCss(8, isLoading)}>
            <Subtitle label={"Time left"} variant={"medium"} />
            <div css={s.StatSkel(isLoading)} />
            <Heading label={"2 days"} variant="medium" />
          </div>
          <div css={s.statsRowCss(8, isLoading)}>
            <Subtitle label={"Total shares"} variant={"medium"} />
            <div css={s.StatSkel(isLoading)} />
            <Heading label={10} variant="medium" />
          </div>{" "}
          <div css={s.statsRowCss(24, isLoading)}>
            <Subtitle label={"Your shares"} variant={"medium"} />
            <div css={s.StatSkel(isLoading)} />
            <Heading label={2} variant="medium" />
          </div>
          <div css={s.navCss}>
            <div>
              <Button
                variant={"secondary"}
                label={"stake"}
                disabled={isLoading}
              />
            </div>
            <div>
              <Button
                variant={"primary"}
                label={"unstake"}
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </>
    </Block>
  );
};

export default LandmarkItem;
