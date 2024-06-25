import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../static/assets/svg/token.svg";
import { ReactComponent as Twitter } from "../../../static/assets/svg/twitter-icon.svg";
import { ReactComponent as Youtube } from "../../../static/assets/svg/youtube-icon.svg";
import { ReactComponent as Medium } from "../../../static/assets/svg/medium-icon.svg";
import { ReactComponent as ArrowRight } from "../../../static/assets/svg/arrow-right.svg";
import { ReactComponent as Planet } from "../../../static/assets/svg/planet.svg";
import { ReactComponent as MobilePlanet } from "../../../static/assets/svg/planet-mobile.svg";
import * as s from "./styles";
import { useLocation } from "react-router-dom";
import { Heading } from "../../ui/Heading/Heading";
import { useTranslation } from "react-i18next";
import { Subtitle } from "../../ui/Subtitle/Subtitle";
import EmailInput from "../../ui/EmailInput/EmailInput";
import { FOOTERLINKS } from "../../../constants/constants";

const socialMediaLinks = [
  { icon: Twitter, path: "https://twitter.com/" },
  { icon: Youtube, path: "https://www.youtube.com/" },
  { icon: Medium, path: "https://medium.com/" },
];

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [email, setEmail] = useState("");
  return (
    <div css={s.wrapperCss}>
      <div css={s.containerCss}>
        <div css={s.headerWrapperCss}>
          <div css={s.logoBlockCss}>
            <Logo />
            <div>
              IX
              <br />
              <span>Foundation</span>
            </div>
          </div>
          <div css={s.socialMediaBlockWrapperCss}>
            {socialMediaLinks.map((item) => (
              <a href={item.path} key={item.path}>
                <item.icon />
              </a>
            ))}
          </div>
        </div>
        <main css={s.mainContentCss}>
          <div css={s.col}>
            <Heading
              label={t("footer.subscribe.title").capitalize()}
              variant="small"
              marginBottom={3}
            />
            <Subtitle
              label={t("footer.subscribe.subTitle").capitalize()}
              variant="medium"
              marginBottom={14}
            />
            <EmailInput
              placeholder={t(
                "footer.subscribe.email-input.placeholder"
              ).capitalize()}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              addCss={s.inputCss}
            />
            <div css={s.mobileSocialMediaBlockWrapperCss}>
              {socialMediaLinks.map((item) => (
                <a href={item.path} key={item.path}>
                  <item.icon />
                </a>
              ))}
            </div>
            <Subtitle
              label={t("footer.subscribe.disclaimer.title").capitalize()}
              variant="medium"
              addCss={s.disclaimerCss}
            />
            <Subtitle
              label={t("footer.subscribe.disclaimer.text")}
              variant="medium"
              addCss={s.disclaimerTextCss}
            />
          </div>
          <div css={s.col}>
            <ul css={s.footerLinksListCss}>
              {FOOTERLINKS.map((link) =>
                link.disabled ? (
                  <li key={link.title}>
                    <div>
                      {t(link.title).capitalize()}
                      {link.disabled && <span>TBA</span>}
                    </div>
                  </li>
                ) : (
                  <li key={link.title}>
                    <a
                      css={location.pathname === link.path && s.activeLinkCss}
                      href={link.path}
                    >
                      {t(link.title).capitalize()}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div css={s.col}>
            <ul>
              <li>
                <a
                  css={s.btnLinkCss}
                  href={"https://wallet.pix.foundation/"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div>
                    <Heading
                      variant="small"
                      label={t(
                        "footer.links.wallet-ix-foundation.title"
                      ).capitalize()}
                    />
                    <Subtitle
                      label={t(
                        "footer.links.wallet-ix-foundation.subtitle"
                      ).capitalize()}
                      variant="medium"
                    />
                  </div>
                  <ArrowRight />
                </a>
              </li>
            </ul>
          </div>
        </main>
        <ul css={s.footerCss}>
          <li> © 2021 Amelia Systems AG.</li>
          {/*<li>*/}
          {/*  <a href={"/"}>{t("footer.footer-links.disclaimer").capitalize()}</a>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a href={"/"}>{t("token Terms").capitalize()}</a>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a href={"/"}>{t("footer.footer-links.privacy").capitalize()}</a>*/}
          {/*</li>*/}
        </ul>
      </div>
      <Planet css={s.planetCss} />
      <MobilePlanet css={s.mobilePlanetCss} />
    </div>
  );
};
