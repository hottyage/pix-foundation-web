import React, { useEffect, useRef } from "react";
import * as s from "./styles";
import { Heading } from "../ui/Heading/Heading";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";
import quickSwap from "../../static/assets/png/quick.png";
import sushiSwap from "../../static/assets/png/sushi.png";
import { ReactComponent as CloseIcon } from "../../static/assets/svg/close-icon.svg";
import { ReactComponent as WalletLogo } from "../../static/assets/svg/wallet-icon-big.svg";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import useOnClickOutside from "../../hooks/useClickOutside";
const ModelViewer = require("@metamask/logo");

export const IFrameModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useDisableBodyScroll(isOpen);
  // const [privacy, setPrivacy] = useState(false);
  // const handleChange = () => {
  //   setPrivacy(!privacy);
  // };

  const { t } = useTranslation();

  const modalContainerRef = useRef(null);
  const ref = useRef<HTMLButtonElement>(null);
  useOnClickOutside(modalContainerRef, onClose);

  useEffect(() => {
    const viewer = new ModelViewer({
      pxNotRatio: true,
      width: 34,
      height: 34,
      followMouse: true,
      slowDrift: false,
    });

    const Logo: any = viewer.container;

    ref?.current?.appendChild(Logo);

    return () => ref?.current?.removeChild(Logo);
  }, [ref]);

  return (
    <div css={s.wrapperCss}>
      <div css={s.modalWrapperCss} ref={modalContainerRef}>
        <Heading
          label={t("iframe-modal.title").capitalize()}
          variant="medium"
          marginBottom={26}
        />
        {/*<div css={s.blockCss(16, 24)}>*/}
        {/*  <CheckBox*/}
        {/*    checked={privacy}*/}
        {/*    setChecked={handleChange}*/}
        {/*    label={*/}
        {/*      <div css={s.checkBoxCss}>*/}
        {/*        <Trans components={{ span: <span /> }}>*/}
        {/*          {t("connect-wallet-modal.checkbox")}*/}
        {/*        </Trans>*/}
        {/*      </div>*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}
        <div
          className="h-[400px] sm:h-[610px] mt-4"
          css={s.connectIframeWrapperCss}
        >
          <iframe
            src="https://li.finance/embed?fromChain=eth&fromToken=0x0000000000000000000000000000000000000000&toChain=pol&toToken=0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe"
            width="100%"
            style={{
              border: 0,
              borderRadius: "10px",
              margin: "0px auto",
              display: "block",
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />
        </div>
        <Heading
          label={t("iframe-modal.subtitle").capitalize()}
          variant="medium"
          marginBottom={16}
        />
        <div css={s.exchangeWrapperCss}>
          <Button
            variant={"primary"}
            addCss={s.exchangeBtnWrapperCss1}
            onClick={() =>
              (window.location.href =
                "https://quickswap.exchange/#/swap?inputCurrency=0xc2132d05d31c914a87c6611c10748aeb04b58e8f&outputCurrency=0xe06bd4f5aac8d0aa337d13ec88db6defc6eaeefe")
            }
          >
            QuickSwap
          </Button>
          <Button
            variant={"primary"}
            addCss={s.exchangeBtnWrapperCss2}
            onClick={() =>
              (window.location.href = "https://app.sushi.com/swap")
            }
          >
            SushiSwap
          </Button>
        </div>
        <Button variant="transparent" addCss={s.closeBtnCss} onClick={onClose}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};
