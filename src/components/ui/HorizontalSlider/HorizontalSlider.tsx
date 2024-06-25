import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows/Arrows";
import * as s from "./styles";

// type territoryItem = {
//   type: string;
//   federations: number;
//   domains: number;
//   sectors: number;
//   amount: number;
// };

export const HorizontalSlider = ({
  children,
  height,
}: {
  children: any;
  height?: number;
}) => {
  return (
    <div css={height ? s.mainWrapperCss(height) : s.mainWrapperCss()}>
      <div css={s.sliderWrapperCss}>
        <ScrollMenu
          onWheel={onWheel}
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
        >
          {children}
        </ScrollMenu>
      </div>
    </div>
  );
};

function onWheel(apiObj: any, ev: React.WheelEvent): void {
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
