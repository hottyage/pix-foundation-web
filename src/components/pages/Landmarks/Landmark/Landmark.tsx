import React from "react";
import * as s from "./styles";
import { Block } from "../../../ui/Block/Block";
import { Heading } from "../../../ui/Heading/Heading";
import { ReactComponent as IxLogo } from "../../../../static/assets/svg/token.svg";
import { ReactComponent as MaximizeIcon } from "../../../../static/assets/svg/maximize.svg";
import { Button } from "../../../ui/Button";
import landmarkImage from "../../../../static/assets/landmark.png";

const Landmark = () => {
  return (
    <Block addCss={s.mainWrapperCss}>
      <>
        <div css={s.mainBlockWrapperCss}>
          <Heading
            label={"Golden Bridge"}
            variant={"medium"}
            marginBottom={12}
          />
          <div css={s.cardContent}>
            <div css={s.cardImageWrap}>
              <img src={landmarkImage} css={s.cardImageCss} alt={"landmark"} />
              <Button variant={"transparent"}>
                <MaximizeIcon css={s.maximizeIconCss} />
              </Button>
            </div>
            <div css={s.cardStats}>
              <div css={s.priceCss}>
                <Heading label={"+27,200"} variant={"medium"} />
                <IxLogo css={s.logoCss} />
                <span css={s.priceUsd}>(≈45,650 USD) </span>
              </div>
              <div css={s.expectedDateCss}>
                expected dividend payout on <span>September 28 2021.</span>
              </div>
            </div>
            <div css={s.cardNav}>
              <Button variant={"primary"} label={"LOCATE"} addCss={s.btnCss} />
              <Button variant={"secondary"} label={"Sell"} addCss={s.btnCss} />
            </div>
          </div>
          <div css={s.expectedDateCss}>
            until the next epoch on <span>September 28.</span>
          </div>
        </div>
        <div css={s.secondBlockCss}></div>
      </>
    </Block>
  );
};

export default Landmark;
