import { SerializedStyles } from "@emotion/react";
import React, { useContext, useEffect } from "react";
import { Block } from "../ui/Block/Block";
import { Heading } from "../ui/Heading/Heading";
import { Subtitle } from "../ui/Subtitle/Subtitle";
import * as s from "./styles";
import { ReactComponent as Hexagon } from "../../static/assets/svg/hexagon.svg";
import { ReactComponent as PixIcon } from "../../static/assets/svg/token.svg";
import { ReactComponent as Wev3Icon } from "../../static/assets/svg/web3-logo.svg";
import { Button } from "../ui/Button";
import Chart from "../Chart/Chart";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";
import { dataType } from "../pages/Dashboard/AuthDashboard/AuthDashboard";
import useContract from "../../api/swr/useContract";
import { useWeb3React } from "@web3-react/core";
import { chartCreate } from "../../helpers/helpers";
import useSWR from "swr";
import { StateContext } from "../../context/Context";

const WalletPortfolio = ({
  addCss,
  data,
  updateData,
}: {
  addCss: SerializedStyles;
  data: dataType;
  updateData: () => void;
}) => {
  const { t } = useTranslation();
  const { myContracts } = useContract();
  const { account } = useWeb3React();

  const { state, dispatch } = useContext(StateContext);
  console.log(state);

  const handleClaim = async () => {
    try {
      let r = await myContracts.stakeContract.claim().send({ from: account });
      console.log(r);
      updateData();
    } catch (e) {
      console.log(e);
    }
  };

  if (!data) {
    return <Loader />;
  }
  return (
    <>
      <Block addCss={addCss}>
        <div css={s.mainWrap}>
          <Hexagon css={s.backgroundImage} />
          <div css={s.headerWrap}>
            <div>
              <Heading
                label={t("dashboard.wallet-portfolio.title").capitalize()}
                variant={"medium"}
              />
              <Subtitle
                label={t("dashboard.wallet-portfolio.subtitle").capitalize()}
                variant={"large"}
              />
            </div>
            <div>
              <Block addCss={s.headingButtonWrap}>
                <>
                  <div css={s.rewardContainer}>
                    <div css={s.flexContainer}>
                      <div css={s.green}>+ </div>
                      <Subtitle
                        label={t(
                          "dashboard.wallet-portfolio.rewards"
                        ).capitalize()}
                        variant={"medium"}
                      />
                    </div>
                    <div
                      css={s.priceContainerSkel(data.reward === undefined)}
                    />
                    <div css={s.priceContainer(data.reward === undefined)}>
                      <Heading
                        label={data.reward?.toFixed(2)}
                        variant={"medium"}
                      />{" "}
                      <PixIcon css={s.pixIcon} />
                    </div>
                  </div>
                  <Button
                    variant={"primary"}
                    disabled={data.reward === 0}
                    label={t("dashboard.wallet-portfolio.claim")}
                    addCss={s.calmBtn}
                    onClick={handleClaim}
                  />
                </>
              </Block>
            </div>
          </div>
          <div css={s.chartWrap}>
            <Chart
              data={chartCreate(data.transactions, data.balance, account)}
            />
          </div>
          <div css={s.statsItemsWrap}>
            <div css={s.statWrap}>
              <div css={s.flexContainer}>
                <Wev3Icon css={s.statIcon} />
                <Subtitle
                  label={t("dashboard.wallet-portfolio.wallet").capitalize()}
                  variant={"medium"}
                />
              </div>
              <div>
                <div css={s.countContainer}>
                  <Heading
                    label={data?.balance?.toLocaleString("ja-JP")}
                    variant={"medium"}
                  />{" "}
                  <PixIcon css={s.pixIcon} />
                </div>
              </div>
            </div>

            <div css={s.statWrap}>
              <div css={s.flexContainer}>
                <Subtitle
                  label={t("dashboard.wallet-portfolio.stacked").capitalize()}
                  variant={"medium"}
                />
              </div>
              <div>
                <div css={s.countContainer}>
                  <Heading
                    label={data?.staked?.toLocaleString("ja-JP")}
                    variant={"medium"}
                  />{" "}
                  <PixIcon css={s.pixIcon} />
                </div>
              </div>
            </div>

            <div css={s.statWrap}>
              <div css={s.flexContainer}>
                <Subtitle
                  label={t(
                    "dashboard.wallet-portfolio.withdrawable"
                  ).capitalize()}
                  variant={"medium"}
                />
              </div>
              <div>
                <div css={s.countContainer}>
                  <Heading label={"0.00"} variant={"medium"} />{" "}
                  <PixIcon css={s.pixIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Block>
      <Block addCss={s.mobileHeadingButtonWrap}>
        <>
          <div css={s.rewardContainer}>
            <div css={s.flexContainer}>
              <div css={s.green}>+ </div>
              <Subtitle
                label={t("dashboard.wallet-portfolio.rewards").capitalize()}
                variant={"medium"}
              />
            </div>
            <div css={s.priceContainerSkel(data.reward === undefined)} />
            <div css={s.priceContainer(data.reward === undefined)}>
              <Heading label={data.reward?.toFixed(2)} variant={"medium"} />{" "}
              <PixIcon css={s.pixIcon} />
            </div>
          </div>
          <div css={s.mobileCalmBtnWrap}>
            <Button
              variant={"primary"}
              disabled
              label={t("dashboard.wallet-portfolio.claim")}
            />
          </div>
        </>
      </Block>
    </>
  );
};

export default WalletPortfolio;
