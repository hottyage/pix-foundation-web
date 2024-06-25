import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { useTranslation } from "react-i18next";
import { CirculatingSupplyBlock } from "../../../CirculatingSupplyBlock/CirculatingSupplyBlock";
import { StatsBlock } from "../../../StatsBlock/StatsBlock";
import { Heading } from "../../../ui/Heading/Heading";
import { Subtitle } from "../../../ui/Subtitle/Subtitle";
import WalletPortfolio from "../../../WalletPortfolio/WalletPortfolio";
import {
  balanceABI,
  landmarkABI,
  MOCKEDTERRITORYLIST,
  rateABI,
  secondsPerDay,
  stakeABI,
  tokenDivider,
} from "../../../../constants/constants";
import { LiquidityPoolBlock } from "../../../LiquidityPoolBlock/LiquidityPoolBlock";
import ComingSoon from "../../../ComingSoon/ComingSoon";
import { useWeb3React } from "@web3-react/core";
import { useUser } from "../../../../api/swr/useUser";
import useContract from "../../../../api/swr/useContract";
import Loader from "../../../Loader/Loader";
import dayjs from "dayjs";
import MainHeading from "../../../MainHeading/MainHeading";
import { css } from "@emotion/react";
import { LPStaking } from "../../../LPStaking/LPStaking";
import { HorizontalSlider } from "../../../ui/HorizontalSlider/HorizontalSlider";
import { TerritoryCard } from "../../../TerritoryCard/TerritoryCard";
import LandmarkItemContainer from "../../../LandmarkItemContainer/LandmarkItemContainer";
import { Contract } from "web3-eth-contract";

export type transactionType = {
  from: string;
  to: string;
  value: string;
  timeStamp: string;
};

export type dataType = {
  staked: number;
  balance: number;
  distributionToday: number;
  totalSupply: number;
  totalStaked: number;
  reward: number;
  allowance: number;
  pixPrice: number;
  yieldDay: number;
  transactions: transactionType[];
  userLandMarksCount: number;
};

export const AuthDashboard = () => {
  const { t } = useTranslation();

  const { library } = useWeb3React();

  const Contract = library.eth.Contract;
  const { User } = useUser();
  const { myContracts, mutate: saveContract } = useContract();

  const [data, setData] = useState<dataType>();

  const updateData = async (
    sContract: any,
    bContract: any,
    rContract: any,
    lContract: any
  ) => {
    try {
      let balance = await bContract.balanceOf(User).call({ from: User });
      let totalSupply = await bContract.totalSupply().call();
      let staked = await sContract.stakedAmounts(User).call({ from: User });
      let rewardRate = await sContract.rewardRate().call();
      let totalStaked = await sContract.totalStaked().call();

      let userLandMarksCount = await lContract
        .balanceOf(User)
        .call({ from: User });

      const reward = await sContract.rewards(User).call({ from: User });
      const allowance = await bContract
        .allowance(User, "0x9aAc9C43B75A3Be89368b0ac6ba75B9e6AD3566E")
        .call({ from: User });

      const { USD: ethRate } = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
      ).then((r) => r.json());

      const { result: fromBlock } = await fetch(
        `https://api.polygonscan.com/api?module=block&action=getblocknobytime&timestamp=${dayjs()
          .add(-7, "day")
          .unix()}&closest=before&apikey=D7MK73D4NUZUHCE38F6ABHJMFZX6S9VPTW`
      ).then((r) => r.json());

      const { result: transactions } = await fetch(
        `https://api-testnet.polygonscan.com//api?module=account&action=tokentx&address=${User}&startblock=${fromBlock}&endblock=99999999&page=1&offset=999&sort=asc&apikey=D7MK73D4NUZUHCE38F6ABHJMFZX6S9VPTW`
      ).then((r) => r.json());

      const reserves = await rContract.getReserves().call();
      // const pixPriceUSDT =
      //   (reserves._reserve0 / reserves._reserve1 / 10 ** 6) * ethRate;
      //
      // const rewardPerToken =
      //   (await sContract.rewardPerToken().call()) / tokenDivider;

      const duration = await sContract.DURATION().call();
      const yieldDay = (((rewardRate / duration) * 86400) / 10 ** 18) * ethRate;

      setData({
        balance: balance / tokenDivider,
        staked: staked / tokenDivider,
        distributionToday: Math.round(
          (rewardRate * secondsPerDay) / tokenDivider
        ),
        totalSupply: totalSupply / tokenDivider,
        totalStaked: Math.round(totalStaked / tokenDivider),
        reward: reward / tokenDivider,
        allowance: allowance,
        pixPrice: (reserves._reserve0 / reserves._reserve1 / 10 ** 6) * ethRate,
        yieldDay,
        transactions: transactions.filter(
          (el: any) => el.tokenSymbol === "IXT"
        ),
        userLandMarksCount: userLandMarksCount,
      });
    } catch (e) {
      console.log(e, "dsdsd");
    }
  };

  useEffect(() => {
    const req = async (count: number) => {
      if (count > 3) {
        return;
      }
      try {
        const stakeContract = new Contract(
          stakeABI,
          "0x9aAc9C43B75A3Be89368b0ac6ba75B9e6AD3566E"
        );

        const balanceContract = new Contract(
          balanceABI,
          "0xae5039fc6D8360008419E169d54F1C81c665c55D"
        );

        const rateContract = new Contract(
          rateABI,
          "0xAC559786dB41429ba65150349161da680CFd6152"
        );

        const landmarkContract = new Contract(
          landmarkABI,
          "0x86D5B7f00eF93244eC53A2Ae982F8E5AF47B4Fd7"
        );

        Promise.all([
          stakeContract,
          balanceContract,
          rateContract,
          landmarkContract,
        ]).then(
          ([
            stakeContract,
            balanceContract,
            rateContract,
            landmarkContract,
          ]) => {
            updateData(
              stakeContract.methods,
              balanceContract.methods,
              rateContract.methods,
              landmarkContract.methods
            );

            saveContract(
              {
                balanceContract: balanceContract.methods,
                stakeContract: stakeContract.methods,
                rateContract: rateContract.methods,
                landmarksContract: landmarkContract.methods,
              },
              false
            );
          }
        );
      } catch (e) {
        console.log(e, "retry");
        req(count + 1);
      }
    };
    req(1);
  }, [User]);

  if (!myContracts || !data) {
    return <Loader />;
  }

  return (
    <section css={s.sectionWrapperCss}>
      <div css={s.mainBlockCss}>
        <div
          css={css`
            grid-area: 1 / 1 / 3 / 3;
          `}
        >
          <MainHeading />
        </div>

        <div css={s.walletWrapperCss}>
          <WalletPortfolio
            addCss={s.walletBlockCss}
            data={data}
            updateData={() =>
              updateData(
                myContracts.stakeContract,
                myContracts.balanceContract,
                myContracts.rateContract,
                myContracts.landmarkContract
              )
            }
          />
        </div>
        <div css={s.circulatingWrapperCss}>
          <CirculatingSupplyBlock
            amount={data.totalSupply - data.totalStaked}
            target={data.totalSupply}
            addCss={s.circulatingSupplyBlockCss}
          />
        </div>
        <div css={s.distributionWrapperCss}>
          <StatsBlock
            label={t("dashboard.distribution-today").capitalize()}
            value={data.distributionToday}
            addCss={s.statsBlockCss}
          />
        </div>
        {/*<div css={s.proposalWrapperCss}>*/}
        {/*  <StatsBlock*/}
        {/*    label={t("dashboard.proposal-power").capitalize()}*/}
        {/*    value={0}*/}
        {/*    addCss={s.statsBlockCss}*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div css={s.votingWrapperCss}>*/}
        {/*  <StatsBlock*/}
        {/*    label={t("dashboard.voting-power").capitalize()}*/}
        {/*    value={0.0}*/}
        {/*    addCss={s.statsBlockCss}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
      <div css={s.tradingRewardsWrapperCss}>
        <Heading
          label={t("dashboard.trading-rewards.title").capitalize()}
          variant="large"
          marginBottom={8}
        />
        <Subtitle
          label={t("dashboard.trading-rewards.subTitle").capitalize()}
          variant="large"
          marginBottom={24}
        />
        <div css={s.rewardsBlockWrapperCss}>
          {/*<CountDownBlock*/}
          {/*  addCss={s.rewardBlockCss}*/}
          {/*  date="2021-12-28T23:59:59+01:00"*/}
          {/*/>*/}
          {/*<RewardPoolBlock addCss={s.rewardBlockCss} value={3835616} />*/}
          {/*<TradingRewardsBlock addCss={s.rewardBlockCss} />*/}
          <ComingSoon />
        </div>
      </div>
      <div css={s.landmarksBlockCss}>
        <Heading
          label={t("dashboard.landmarks.title").capitalize()}
          variant="large"
          marginBottom={8}
        />
        <Subtitle
          label={t("dashboard.landmarks.subTitle").capitalize()}
          variant="large"
          marginBottom={24}
        />
        {new Array(data.userLandMarksCount).fill(0).map((el, i) => (
          <LandmarkItemContainer id={i} key={i} />
        ))}
        {/*<ComingSoon />*/}
      </div>
      <div css={s.territoriesBlockCss}>
        <Heading
          label={t("dashboard.territories.title").capitalize()}
          variant="large"
          marginBottom={8}
        />
        <Subtitle
          label={t("dashboard.territories.subTitle").capitalize()}
          variant="large"
          marginBottom={24}
        />
        <HorizontalSlider height={286}>
          {MOCKEDTERRITORYLIST.map((item) => (
            <TerritoryCard
              amount={item.amount}
              type={item.type}
              sectors={item.sectors}
              domains={item.domains}
              federation={item.federations}
              key={item.type}
              itemId={item.type}
            />
          ))}
        </HorizontalSlider>
      </div>
      <div css={s.stakingBlockCss}>
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
            withStake
            addCss={s.liquidityPullBlockCss}
            data={data}
            updateData={() =>
              updateData(
                myContracts.stakeContract,
                myContracts.balanceContract,
                myContracts.rateContract,
                myContracts.landmarkContract
              )
            }
          />
          <LPStaking
            withStake
            addCss={s.liquidityPullBlockCss}
            data={data}
            updateData={() =>
              updateData(
                myContracts.stakeContract,
                myContracts.balanceContract,
                myContracts.rateContract,
                myContracts.landmarkContract
              )
            }
          />
          {/*<SuggestPullBlock addCss={s.suggestPoolBlockCss} />*/}
        </div>
      </div>
    </section>
  );
};
