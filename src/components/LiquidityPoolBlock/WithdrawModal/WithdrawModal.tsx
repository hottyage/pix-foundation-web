import React, { useRef, useState } from "react";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";
import { useTranslation } from "react-i18next";
import * as s from "./styles";
import { Heading } from "../../ui/Heading/Heading";
import { Button } from "../../ui/Button";
import { ReactComponent as CloseIcon } from "../../../static/assets/svg/close-icon.svg";
import useOnClickOutside from "../../../hooks/useClickOutside";
import { ReactComponent as RightArrow } from "../../../static/assets/svg/RightArrow.svg";
import useContract from "../../../api/swr/useContract";
import { useUser } from "../../../api/swr/useUser";
import Loader from "../../Loader/Loader";
import { dataType } from "../../pages/Dashboard/AuthDashboard/AuthDashboard";
import { css } from "@emotion/react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import CustomToast from "../../CustomToast/CustomToast";

const WithdrawModal = ({
  updateData,
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  data: dataType;
  updateData: () => void;
  onClose: () => void;
}) => {
  useDisableBodyScroll(isOpen);
  const { t } = useTranslation();
  const modalContainerRef = useRef(null);
  useOnClickOutside(modalContainerRef, onClose);
  // const [privacy, setPrivacy] = useState(false);

  const { myContracts } = useContract();
  const { User } = useUser();
  const [amount, setAmount] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<any>(false);

  const handleStake = async () => {
    try {
      setIsLoading(true);
      await myContracts.stakeContract
        .unstake(BigInt(+amount * 1000000000000000000).toString())
        .send({
          from: User,
        })
        .on("transactionHash", function (hash: any) {
          toast(
            <CustomToast
              title={t(
                "dashboard.staking.liquidity-pool.withdraw.onchange.title"
              )}
              text={t(
                "dashboard.staking.liquidity-pool.withdraw.onchange.text",
                { amount }
              )}
              link={{
                title: t(
                  "dashboard.staking.liquidity-pool.withdraw.onchange.link"
                ),
                href: `https://etherscan.io/tx/${hash}`,
              }}
            />,
            {
              hideProgressBar: true,
              autoClose: false,
            }
          );
          onClose();
        });
      toast(
        <CustomToast
          title={t("dashboard.staking.liquidity-pool.withdraw.onchange.title")}
          text={t("dashboard.staking.liquidity-pool.withdraw.onsuccess.text")}
        />,
        {
          hideProgressBar: true,
          autoClose: false,
        }
      );
      updateData();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  if (!data) {
    return <Loader />;
  }

  return (
    <div css={s.wrapperCss}>
      <div css={s.modalWrapperCss} ref={modalContainerRef}>
        {isLoading && <Loader absolute />}
        <Heading
          label={t(
            "dashboard.staking.liquidity-pool.withdraw.title"
          ).capitalize()}
          variant="medium"
          marginBottom={26}
        />
        {/*<div css={s.blockCss(16, 24)}>*/}
        {/*  <CheckBox*/}
        {/*    checked={privacy}*/}
        {/*    setChecked={() => setPrivacy(!privacy)}*/}
        {/*    label={*/}
        {/*      <div css={s.checkBoxCss}>*/}
        {/*        <Trans components={{ span: <span /> }}>*/}
        {/*          {t("connect-wallet-modal.checkbox")?.capitalize()}*/}
        {/*        </Trans>*/}
        {/*      </div>*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}
        <div css={s.amountCss}>
          {t("dashboard.staking.liquidity-pool.withdraw.amount")}
        </div>
        <div>
          <div css={s.inputWrapCss}>
            <input
              value={amount}
              type={"number"}
              placeholder={"0"}
              onChange={({ target }) => setAmount(target.value)}
            />
            <div onClick={() => setAmount(data.staked.toFixed(2))}>MAX</div>
          </div>
          <div css={s.subInputWrapCss}>
            <p> {t("dashboard.staking.liquidity-pool.modal.staked")}</p>
            <div>
              <span>{data.staked?.toLocaleString("ja-JP")}</span>
              <RightArrow css={s.redArrowCss} />
              <span>
                {(data.staked - (amount || 0))?.toLocaleString("ja-JP")}
              </span>
            </div>
          </div>
        </div>
        <div css={s.stakedWrap}>
          <div css={s.subInputWrapCss}>
            <p style={{ maxWidth: 70, lineHeight: "18px" }}>
              {" "}
              {t("dashboard.staking.liquidity-pool.withdraw.available")}
            </p>
            <span
              css={css`
                display: block;
              `}
            >
              <p>{dayjs().format("DD/MM/YYYY, HH:mm")}</p>
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: end;
                  margin-top: 2px;
                `}
              >
                <span>{data.balance?.toLocaleString("ja-JP")}</span>
                <RightArrow css={s.greenArrowCss} />
                <span>
                  {(data.balance + (+amount || 0))?.toLocaleString("ja-JP")}
                </span>
              </div>
            </span>
          </div>
        </div>
        <div>
          <Button
            variant="secondary"
            label={t("dashboard.withdraw.liquidity-pool.modal.btn")}
            addCss={s.stakeBtnCss}
            disabled={+amount > data.staked}
            onClick={handleStake}
          />
        </div>
        <Button variant="transparent" addCss={s.closeBtnCss} onClick={onClose}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};

export default WithdrawModal;
