import React, { useEffect, useRef } from "react";
import * as s from "./styles";
import { Heading } from "../ui/Heading/Heading";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";
import { ReactComponent as CloseIcon } from "../../static/assets/svg/close-icon.svg";
import { ReactComponent as WalletLogo } from "../../static/assets/svg/wallet-icon-big.svg";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import useOnClickOutside from "../../hooks/useClickOutside";
const ModelViewer = require("@metamask/logo");

export const SelectWalletModal = ({
  isOpen,
  onClose,
  connectWeb3,
  walletconnect,
}: {
  isOpen: boolean;
  onClose: () => void;
  connectWeb3: any;
  walletconnect: any;
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
          label={t("connect-wallet-modal.title").capitalize()}
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
        <button
          css={s.buttonCss(19.33, 16)}
          ref={ref}
          // disabled={!privacy}
          onClick={connectWeb3}
        >
          <p>Meta Mask</p>
        </button>
        <button
          css={s.buttonCss(16, 0)}
          // disabled={!privacy}
          onClick={walletconnect}
        >
          <WalletLogo />
          <p>WalletConnect</p>
        </button>
        <Button variant="transparent" addCss={s.closeBtnCss} onClick={onClose}>
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};
