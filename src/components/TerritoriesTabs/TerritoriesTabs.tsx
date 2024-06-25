import React from "react";
import * as s from "./styles";
import { ReactComponent as OutliersBadge } from "../../static/assets/svg/outliers-badge.svg";
import { ReactComponent as CommonBadge } from "../../static/assets/svg/common-badge.svg";
import { ReactComponent as UncommonBadge } from "../../static/assets/svg/uncommon-badge.svg";
import { ReactComponent as RareBadge } from "../../static/assets/svg/rare-badge.svg";
import { ReactComponent as LegendaryBadge } from "../../static/assets/svg/legendary-badge.svg";
import { Link } from "react-router-dom";

const mockedTabs = [
  { icon: OutliersBadge, value: "outliers" },
  { icon: CommonBadge, value: "common" },
  { icon: UncommonBadge, value: "uncommon" },
  { icon: RareBadge, value: "rare" },
  { icon: LegendaryBadge, value: "legendary" },
];

const TerritoriesTabs = ({ currentTab }: { currentTab: string }) => {
  return (
    <div>
      <ul css={s.classList}>
        {mockedTabs.map((tabItem, index) => (
          <li css={s.listItem} key={`${tabItem.value}_${index}`}>
            <Link
              to={tabItem.value}
              css={s.listItemBtn(currentTab === tabItem.value)}
            >
              <>
                {<tabItem.icon />} {tabItem.value}
              </>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TerritoriesTabs;
