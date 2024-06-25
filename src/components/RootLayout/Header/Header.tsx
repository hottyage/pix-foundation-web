import React, { useEffect, useState } from "react";
import {
  MenuIcon,
  XIcon,
  SpeakerphoneIcon,
  ExclamationIcon,
} from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../static/assets/svg/token.svg";
import { ReactComponent as ArrowDown } from "../../../static/assets/svg/arrow-down.svg";
import { ReactComponent as Web3Logo } from "../../../static/assets/svg/web3-logo.svg";
import { CustomSelect } from "../../ui/CustomSelect";
import i18n from "i18next";
import { LANGUAGES } from "../../../constants/constants";
import { Button } from "../../ui/Button";
import { useTranslation } from "react-i18next";
import * as s from "./styles";
import { SelectWalletModal } from "../../SelectWalletModal/SelectWalletModal";
import BurgerMenuBtn from "../../ui/BurgerMenuBtn/BurgerMenuBtn";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as ArrowRight } from "../../../static/assets/svg/arrow-right.svg";
import { ReactComponent as MobileNavLogo } from "../../../static/assets/svg/token.svg";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";
import { css } from "@emotion/react";
import LogoutModal from "../../LogoutModal/LogoutModal";
import { IFrameModal } from "../../IFrameModal/IFrameModal";
const Header = ({
  connectWeb3,
  account,
}: {
  connectWeb3: any;
  account?: string | null;
}) => {
  const [headerOnTop, setHeaderOnTop] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activate } = useWeb3React();

  const listenScrollEvent = (event: Event) => {
    if (window.scrollY < 20) {
      return setHeaderOnTop(true);
    } else if (window.scrollY > 30) {
      return setHeaderOnTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  const { t } = useTranslation();

  const [isIFrameModalShown, SetIFrameModalShown] = useState(false);
  const [isSelectModalShown, SetSelectModalShown] = useState(false);
  const [isLogoutModalShown, setLogoutModalShown] = useState(false);

  const activeLinkStyle = {
    color: "#FFFFFF",
    backgroundColor: "rgba(249, 249, 249, 0.08)",
    padding: "12px 16px",
  };

  const walletconnect = new WalletConnectConnector({
    rpc: {
      1: "https://polygon-mumbai.infura.io/v3/efcfd900e2f64994937857c9ba0c1894",
    },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });

  const connectWeb3Handler = async (account: string) => {
    await connectWeb3();
    if (account) {
      SetSelectModalShown(false);
      localStorage.setItem("LAST_WALLET_USED", "MetaMask");
    }
  };
  return (
    <>
      <div css={s.mainWrapCss(headerOnTop)}>
        <div css={s.baseCss}>
          <div css={s.colCss}>
            <Link to={"/"} css={s.linkCss}>
              <Logo />
            </Link>

            <div css={s.selectContainerCss}>
              <CustomSelect
                onChange={(val: any) => {
                  i18n.changeLanguage(val.value);
                }}
                options={LANGUAGES}
                value={
                  LANGUAGES.find((el) => el.value === i18n.language) || {
                    label: "English",
                    value: "en",
                  }
                }
              />
            </div>
          </div>
          <div css={s.navColCss}>
            <Button
              variant={"primary"}
              addCss={s.navLinkCss}
              onClick={() => SetIFrameModalShown(true)}
            >
              Buy IXT
            </Button>
            <NavLink
              activeStyle={activeLinkStyle}
              exact
              to={"/"}
              css={s.navLinkCss}
            >
              {t("header.menu.dashboard")}
            </NavLink>
            {/*<NavLink*/}
            {/*  activeStyle={activeLinkStyle}*/}
            {/*  to={"/history"}*/}
            {/*  css={s.navLinkCss}*/}
            {/*>*/}
            {/*  {t("header.menu.history")}*/}
            {/*</NavLink>*/}
            <NavLink
              activeStyle={activeLinkStyle}
              to={"/planet-ix"}
              css={s.navLinkCss}
            >
              {t("header.menu.planet-ix")}
            </NavLink>
            {/*<Button variant="transparent" addCss={s.notificationBtnCss}>*/}
            {/*  <Notification />*/}
            {/*</Button>*/}
            <div
              css={css`
                position: relative;
              `}
            >
              <Button
                rounded
                variant={"primary"}
                addCss={s.connectBtn}
                onClick={
                  account
                    ? () => setLogoutModalShown(true)
                    : () => SetSelectModalShown(true)
                }
              >
                <Web3Logo />
                {account ? (
                  <div>
                    <p>
                      {`${account.substr(0, 6)}····${account.substr(-4, 4)}`}
                    </p>
                    <ArrowDown />
                  </div>
                ) : (
                  <p>Connect WEB3</p>
                )}
              </Button>
              {isLogoutModalShown && (
                <LogoutModal onClose={() => setLogoutModalShown(false)} />
              )}
            </div>
            <BurgerMenuBtn
              setMobileMenuOpen={setMobileMenuOpen}
              isMobileMenuOpen={isMobileMenuOpen}
            />
          </div>
        </div>
      </div>
      {isSelectModalShown && (
        <SelectWalletModal
          isOpen={isSelectModalShown}
          onClose={() => SetSelectModalShown(false)}
          walletconnect={() => {
            activate(walletconnect);
            localStorage.setItem("LAST_WALLET_USED", "WalletConnect");
            SetSelectModalShown(false);
          }}
          connectWeb3={connectWeb3Handler}
        />
      )}
      {isIFrameModalShown && (
        <IFrameModal
          isOpen={isIFrameModalShown}
          onClose={() => SetIFrameModalShown(false)}
        />
      )}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            css={s.mobileMenuWrapCss}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 700 }}
            transition={{ type: "easeInOut" }}
          >
            <div css={s.mobileMenuContainer}>
              <div css={s.mobileNavHeader}>
                <MobileNavLogo />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <ArrowRight />
                </button>
              </div>
              <div css={s.mobileNavList}>
                <NavLink exact to={"/"}>
                  {t("header.menu.dashboard")}
                </NavLink>
                <NavLink to={"/history"}>{t("header.menu.history")}</NavLink>
                <NavLink to={"/planet-ix"}>
                  {t("header.menu.planet-ix")}
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
