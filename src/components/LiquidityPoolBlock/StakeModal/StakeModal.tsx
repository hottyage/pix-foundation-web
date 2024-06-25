import React, { useEffect, useRef, useState } from "react";
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
import { toast } from "react-toastify";
import CustomToast from "../../CustomToast/CustomToast";

const StakeModal = ({
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
  const [isLoading, setIsLoading] = useState(true);

  const { myContracts } = useContract();
  const { User } = useUser();
  const [amount, setAmount] = useState<any>(undefined);

  useEffect(() => {
    const checkAllowance = async () => {
      if (!data.allowance || data.allowance < 1000000000000000000000000) {
        try {
          await myContracts.balanceContract
            .approve(
              "0x9aAc9C43B75A3Be89368b0ac6ba75B9e6AD3566E",
              "100000000000000000000000000000000000"
            )
            .send({ from: User });
          await updateData();
          setIsLoading(false);
        } catch (e) {
          console.log(e);
          onClose();
        }
      } else {
        setIsLoading(false);
      }
    };
    checkAllowance();
  }, []);

  const handleStake = async () => {
    try {
      setIsLoading(true);
      await myContracts.stakeContract
        .stake(BigInt(+amount * 1000000000000000000).toString())
        .send({
          from: User,
        })
        .on("transactionHash", function (hash: any) {
          toast(
            <CustomToast
              title={t("dashboard.staking.liquidity-pool.modal.onchange.title")}
              text={t("dashboard.staking.liquidity-pool.modal.onchange.text", {
                amount,
              })}
              link={{
                title: t(
                  "dashboard.staking.liquidity-pool.modal.onchange.link"
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
        })
        .then((r: any) => console.log("stake response: ", r));
      toast(
        <CustomToast
          title={t("dashboard.staking.liquidity-pool.modal.onchange.title")}
          text={t("dashboard.staking.liquidity-pool.modal.onsuccess.text")}
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
          label={t("dashboard.staking.liquidity-pool.modal.title").capitalize()}
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
          {t("dashboard.staking.liquidity-pool.modal.amount")}
        </div>
        <div>
          <div css={s.inputWrapCss}>
            <input
              value={amount}
              type={"number"}
              placeholder={"0"}
              onChange={({ target }) => setAmount(target.value)}
            />
            <div onClick={() => setAmount(data.balance.toFixed(2))}>MAX</div>
          </div>
          <div css={s.subInputWrapCss}>
            <p> {t("dashboard.staking.liquidity-pool.modal.wallet")}</p>
            <div>
              <span>{data.balance?.toLocaleString("ja-JP")}</span>
              <RightArrow css={s.redArrowCss} />
              <span>
                {(data.balance - (amount || 0))?.toLocaleString("ja-JP")}
              </span>
            </div>
          </div>
        </div>
        <div css={s.stakedWrap}>
          <div css={s.subInputWrapCss}>
            <p> {t("dashboard.staking.liquidity-pool.modal.staked")}</p>
            <div>
              <span>{data.staked?.toLocaleString("ja-JP")}</span>
              <RightArrow css={s.greenArrowCss} />
              <span>
                {(data.staked + (+amount || 0))?.toLocaleString("ja-JP")}
              </span>
            </div>
          </div>
        </div>
        <div>
          <Button
            variant="secondary"
            label={t("dashboard.staking.liquidity-pool.modal.btn")}
            addCss={s.stakeBtnCss}
            disabled={+amount > data.balance}
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

export default StakeModal;
