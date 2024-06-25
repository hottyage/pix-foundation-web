import { css } from "@emotion/react";

export const mainWrapperCss = (height?: number) => css`
  position: relative;
  height: ${height ? height + "px" : "279px"};
  width: 100%;
  max-width: 100%;
`;

export const sliderWrapperCss = css`
  position: absolute;
  left: 0;
  width: calc(100% + (100vw - 100%) / 2);
  .react-horizontal-scrolling-menu--wrapper {
    position: relative;
    padding-top: 35px;
    flex-wrap: wrap;
    justify-content: center;
    & > .leftArrow {
      position: absolute;
      top: -35px;
      right: calc(100vw - 97%) !important;
    }
    & > .rightArrow {
      position: absolute;
      top: -35px;
      right: calc(100vw - 100%) !important;
    }
    & > .rightArrow,
    & > .leftArrow {
      border: none;
      background-color: transparent;
      &:disabled {
        & > svg {
          path {
            fill-opacity: 0.32;
          }
        }
      }
      @media (max-width: 767px) {
        display: none !important;
        padding-top: 0 !important;
      }
    }
    @media (max-width: 767px) {
      padding-top: 32px !important;
    }
  }

  .react-horizontal-scrolling-menu--scroll-container {
    flex-basis: 100%;
    flex-shrink: 0;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    order: 1; /* order: 1; for top position */
  }
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
`;
