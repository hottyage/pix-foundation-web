import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "../../../ui/Heading/Heading";
import { Subtitle } from "../../../ui/Subtitle/Subtitle";
import { Block } from "../../../ui/Block/Block";
import * as s from "./styles";
import { CirculatingSupplyBlock } from "../../../CirculatingSupplyBlock/CirculatingSupplyBlock";
import { StatsBlock } from "../../../StatsBlock/StatsBlock";
import { CountDownBlock } from "../../../CountDownBlock/CountDownBlock";
import { RewardPoolBlock } from "../../../RewardPoolBlock/RewardPoolBlock";
import { TradingRewardsBlock } from "../../../TradingRewardsBlock/TradingRewardsBlock";
import { LiquidityPoolBlock } from "../../../LiquidityPoolBlock/LiquidityPoolBlock";
import {
  balanceABI,
  secondsPerDay,
  stakeABI,
  tokenDivider,
} from "../../../../constants/constants";
import { dataType } from "../AuthDashboard/AuthDashboard";
import Loader from "../../../Loader/Loader";
import Web3 from "web3";
import { css } from "@emotion/react";
import MainHeading from "../../../MainHeading/MainHeading";
import { LPStaking } from "../../../LPStaking/LPStaking";

const web3 = new Web3(
  "https://polygon-mumbai.infura.io/v3/efcfd900e2f64994937857c9ba0c1894"
);
const Contract = web3.eth.Contract;

export const NoAuthDashboard = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<dataType>();

  const updateData = async (sContract: any, bContract: any) => {
    let totalSupply = await bContract.totalSupply().call();

    let rewardRate = await sContract.rewardRate().call();
    let totalStaked = await sContract.totalStaked().call();

    setData({
      balance: 0,
      staked: 0,
      distributionToday: Math.round(
        (rewardRate * secondsPerDay) / tokenDivider
      ),
      totalSupply: totalSupply / tokenDivider,
      totalStaked: Math.round(totalStaked / tokenDivider),
      reward: 0,
      allowance: 0,
      yieldDay: 0,
      transactions: [],
      pixPrice: 0,
      userLandMarksCount: 0,
    });
  };

  useEffect(() => {
    const req = async () => {
      const stakeContract = await new Contract(
        //@ts-ignorer
        stakeABI,
        "0x9aAc9C43B75A3Be89368b0ac6ba75B9e6AD3566E"
      );

      const balanceContract = await new Contract(
        //@ts-ignorer
        balanceABI,
        "0xae5039fc6D8360008419E169d54F1C81c665c55D"
      );

      updateData(stakeContract.methods, balanceContract.methods);
    };
    req();
  }, []);

  if (!data) {
    return <Loader />;
  }

  return (
    <div css={s.containerCss}>
      <div css={s.blockWrapperCss(80)}>
        <MainHeading />
        <div css={s.headingBlocksWrap}>
          <CirculatingSupplyBlock
            amount={data.totalSupply - data.totalStaked}
            target={data.totalSupply}
            addCss={s.headingBlockWrapperCss}
          />
          <StatsBlock
            label={t("dashboard.distribution-today").capitalize()}
            value={data.distributionToday}
            addCss={s.headingBlockWrapperCss}
          />
        </div>
      </div>
      <div css={s.blockWrapperCss(67)}>
        <div style={{ width: "100%" }}>
          <Heading
            label={t("dashboard.staking-title").capitalize()}
            variant="large"
            marginBottom={8}
          />
          <Subtitle
            label={t("dashboard.staking-subTitle").capitalize()}
            marginBottom={24}
            variant="large"
          />
          <div css={s.pullWrapperCss}>
            <LiquidityPoolBlock
              data={data}
              updateData={() => {}}
              addCss={s.liquidityPullBlockCss}
              withStake={false}
            />
            <LPStaking
              addCss={s.liquidityPullBlockCss}
              data={data}
              updateData={() => {}}
              withStake={false}
            />
            {/*<SuggestPullBlock addCss={s.suggestPoolBlockCss} />*/}
          </div>
        </div>
      </div>
      <div css={s.blockWrapperCss(67)}>
        <div style={{ width: "100%" }}>
          <Heading
            label={t("dashboard.rewards.title").capitalize()}
            variant="large"
            marginBottom={8}
          />
          <Subtitle
            label={t("dashboard.rewards.subTitle").capitalize()}
            variant="large"
            marginBottom={24}
          />
          <div css={s.rewardsBlockWrapperCss}>
            <CountDownBlock
              addCss={s.rewardBlockCss}
              date="2022-09-26T23:59:59+00:00"
            />
            <RewardPoolBlock addCss={s.rewardBlockCss} value={3835616} />
            <TradingRewardsBlock addCss={s.trandingRewardBlockCss} />
          </div>
        </div>
      </div>
      <div css={s.blockWrapperCss(67)}>
        <div style={{ width: "100%" }}>
          <Heading
            label={t("dashboard.territories.title").capitalize()}
            variant="large"
            marginBottom={8}
          />
          <Subtitle
            label={t("dashboard.territories.subTitle").capitalize()}
            variant="large"
            marginBottom={25}
          />
          {/*<Block addCss={s.textBlockCss}>*/}
          {/*  <p>{t("dashboard.territories.text").capitalize()}</p>*/}
          {/*</Block>*/}
          <Block addCss={css(`padding: 20px 24px;`)}>
            <p>{t("dashboard.connect-your-web3")}</p>
          </Block>
        </div>
      </div>
      <div css={s.blockWrapperCss(67)}>
        <div style={{ width: "100%" }}>
          <Heading
            label={t("dashboard.landmarks.title").capitalize()}
            variant="large"
            marginBottom={8}
          />
          <Subtitle
            label={t("dashboard.landmarks.subTitle").capitalize()}
            variant="large"
            marginBottom={25}
          />
          <Block addCss={css(`padding: 20px 24px;`)}>
            <p>{t("dashboard.connect-your-web3")}</p>
          </Block>
        </div>
      </div>
      <div css={s.blockWrapperCss(120)}>
        <div style={{ width: "100%" }}>
          <Heading
            label={t("dashboard.proposals.title").capitalize()}
            variant="large"
            marginBottom={8}
          />
          <Subtitle
            label={t("dashboard.proposals.subTitle").capitalize()}
            variant="large"
            marginBottom={25}
          />
          {/*<Block addCss={s.textBlockCss}>*/}
          {/*  <p>{t("dashboard.proposals.text").capitalize()}</p>*/}
          {/*</Block>*/}
          <Block addCss={css(`padding: 20px 24px;`)}>
            <p>{t("dashboard.no-proposals")}</p>
          </Block>
        </div>
      </div>
    </div>
  );
};
