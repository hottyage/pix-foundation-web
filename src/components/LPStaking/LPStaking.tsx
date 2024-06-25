import React, { useState } from "react";
import * as s from "./styles";
import { Heading } from "../ui/Heading/Heading";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import { ReactComponent as Logo } from "../../static/assets/svg/token.svg";
import { ReactComponent as LPIcon } from "../../static/assets/svg/lp-icons.svg";
import { ReactComponent as TIcon } from "../../static/assets/svg/t-icon.svg";
import { Block } from "../ui/Block/Block";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";
import StakeModal from "./StakeModal/StakeModal";
import { dataType } from "../pages/Dashboard/AuthDashboard/AuthDashboard";
import { css } from "@emotion/react";
import WithdrawModal from "./WithdrawModal/WithdrawModal";
import useContract from "../../api/swr/useContract";
import { useWeb3React } from "@web3-react/core";

export const LPStaking = ({
  addCss,
  withStake,
  data,
  updateData,
}: {
  addCss: any;
  updateData: () => void;
  withStake: boolean;
  data: dataType;
}) => {
  const { t } = useTranslation();
  const { myContracts } = useContract();
  const { account } = useWeb3React();

  const handleClaim = async () => {
    try {
      let r = await myContracts.stakeContract.claim().send({ from: account });
      console.log(r);
      updateData();
    } catch (e) {
      console.log(e);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  return (
    <Block addCss={addCss}>
      <>
        <div css={withStake && s.mainContentCss}>
          <div css={s.liquidityPoolHeadingCss}>
            <div>
              <Heading
                label={t("dashboard.lp-staking.title").capitalize()}
                variant="medium"
              />
              <a
                css={s.lpLink}
                href={"/#/vdvd"}
                target={"_blank"}
                rel="noreferrer"
              >
                {t("dashboard.lp-staking.link").capitalize()}
              </a>
            </div>
            <LPIcon height={32} />
          </div>
          <div css={s.liquidityPoolStatsCss}>
            <div css={s.statsItemCss}>
              <div css={s.statsItemHeadingCss}>
                <Heading
                  label={`${(data.totalStaked / 1000000).toFixed(2)}M`}
                  variant="medium"
                />
                <Logo />
              </div>
              <Subtitle
                label={t(
                  "dashboard.staking.liquidity-pool.item.pool-size"
                ).capitalize()}
                variant="medium"
              />
            </div>
            <div css={s.statsItemCss}>
              <div css={s.statsItemHeadingCss}>
                <Heading label={data.yieldDay.toFixed(2)} variant="medium" />
                <Logo />
              </div>
              <Subtitle
                label={t(
                  "dashboard.staking.liquidity-pool.item-yield"
                ).capitalize()}
                variant="medium"
              />
            </div>
            <div css={s.statsItemCss}>
              <div css={s.statsItemHeadingCss}>
                <Heading
                  label={withStake ? data.staked?.toLocaleString("ja-JP") : "-"}
                  variant="medium"
                />
                <TIcon />
              </div>
              <Subtitle
                label={t(
                  "dashboard.staking.liquidity-pool.item-stake"
                ).capitalize()}
                variant="medium"
              />
            </div>
          </div>
        </div>
        {withStake && (
          <div css={s.stakeBlockCss}>
            <div css={s.amountCss}>
              <Heading label={data.reward?.toFixed(2)} variant="medium" />
              <Subtitle
                label={t(
                  "dashboard.staking.liquidity-pool.subTitle"
                ).capitalize()}
                variant="medium"
              />
            </div>
            <div
              css={css`
                display: flex;
              `}
            >
              <Button
                variant={"primary"}
                disabled={data.reward === 0}
                label={t("dashboard.wallet-portfolio.claim")}
                addCss={s.calmBtn}
                onClick={handleClaim}
              />
              <Button
                variant="secondary"
                label={t("dashboard.staking.liquidity-pool.button")}
                addCss={s.stakeBtnCss}
                onClick={() => setIsModalOpen(true)}
              />
              {data.staked > 0 && (
                <Button
                  variant="primary"
                  label={t("dashboard.staking.liquidity-pool.withdraw")}
                  addCss={s.stakeBtnCss}
                  onClick={() => setIsWithdrawOpen(true)}
                />
              )}
            </div>
          </div>
        )}
        {isModalOpen && (
          <StakeModal
            isOpen={isModalOpen}
            data={data}
            updateData={updateData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        {isWithdrawOpen && (
          <WithdrawModal
            isOpen={isWithdrawOpen}
            data={data}
            updateData={updateData}
            onClose={() => setIsWithdrawOpen(false)}
          />
        )}
      </>
    </Block>
  );
};
