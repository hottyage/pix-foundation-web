import { css } from "@emotion/react";

export const wrapperCss = css`
  background-color: #1d1d20;
  position: relative;
`;
export const containerCss = css`
  max-width: 1440px;
  width: 100%;
  padding: 71px 166px 42px 166px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  @media (max-width: 1024px) {
    padding: 71px 83px;
  }
  @media (max-width: 600px) {
    padding: 71px 16px 0 16px;
  } ;
`;

export const headerWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 67px;
`;
export const logoBlockCss = css`
  display: flex;
  align-items: center;
  & > svg {
    height: 64px;
    width: 64px;
  }

  & > div {
    margin-left: 18px;
    font-weight: 700;
    font-size: 21px;
    line-height: 21px;
    color: #ffffff;
    & > span {
      font-weight: 400;
    }
  }
`;

export const socialMediaBlockWrapperCss = css`
  display: flex;
  & > a {
    margin-right: 32px;
  }
  & > a:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const mainContentCss = css`
  width: 100%;
  display: flex;
  margin-bottom: 104px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }
`;

export const col = css`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const inputCss = css`
  margin-bottom: 43px;
  max-width: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 27px;
    & > input {
      width: 100%;
    }
  }
`;

export const mobileSocialMediaBlockWrapperCss = css`
  display: none;
  & > a {
    margin-right: 32px;
  }
  & > a:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 44px;
  }
`;

export const disclaimerCss = css`
  font-weight: 700;
`;
export const disclaimerTextCss = css`
  max-width: 321px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;
export const footerLinksListCss = css`
  margin: 0 auto;
  padding-left: 57px;
  display: flex;
  flex-direction: column;
  & > li:last-of-type {
    margin-bottom: 0;
  }
  & > li {
    margin-bottom: 26px;
    display: flex;
    align-items: center;
    & > a,
    & > div {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 16px;
      line-height: 24px;
      color: rgba(249, 249, 249, 0.5);
      transition: color 0.3s ease-in-out;
      a:hover {
        color: #f9f9f9;
      }
      & > span {
        margin-left: 10px;
        display: block;
        padding: 7px 5px;
        background-color: #27272a;
        border-radius: 8px;
        font-size: 12px;
        line-height: 18px;
        color: rgba(249, 249, 249, 0.5);
      }
    }
    & > div {
      cursor: not-allowed;
    }
    & > a {
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    padding-left: 0;
    margin: 0 auto 40px 0;
  }
`;

export const btnLinkCss = css`
  margin-left: auto;
  width: 100%;
  max-width: 248px;
  text-decoration: none;
  background-color: rgba(249, 249, 249, 0.04);
  border: 1px solid rgba(249, 249, 249, 0.16);
  border-radius: 8px;
  padding: 15px;
  transition: border-color 0.3s ease-in-out;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 24px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  position: relative;
  z-index: 2;
  cursor: pointer;
  &:hover {
    border-color: #f9f9f9;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

export const footerCss = css`
  display: flex;
  & > li {
    margin-right: 31px;
    font-size: 12px;
    line-height: 18px;
    color: rgba(249, 249, 249, 0.5);
    & > a {
      text-decoration: none;
      font-size: 12px;
      line-height: 18px;
      color: rgba(249, 249, 249, 0.5);
      transition: color 0.3s ease-in-out;
      &:hover {
        color: #f9f9f9;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & > li {
      margin-bottom: 24px;
    }
  }
`;
export const planetCss = css`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const mobilePlanetCss = css`
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const activeLinkCss = css`
  color: rgba(249, 249, 249, 1) !important;
`;
