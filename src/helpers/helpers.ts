import { transactionType } from "../components/pages/Dashboard/AuthDashboard/AuthDashboard";
import dayjs from "dayjs";
import { tokenDivider } from "../constants/constants";

export const chartCreate: (
  data: transactionType[],
  balance: number,
  address?: string | null
) => number[] = (data, balance, address) => {
  let result = [
    balance,
    ...new Array(6)
      .fill(
        dayjs()
          .set("hour", 23)
          .set("minute", 59)
          .set("second", 59)
          .add(-1, "day")
          .unix()
      )
      .map((el, i) => el - 86400 * i),
  ];

  for (let i = 1; i < result.length; i++) {
    result[i] =
      result[i - 1] +
      data
        .filter(
          (el) => +el.timeStamp > result[i] && +el.timeStamp < result[i] + 86400
        )
        .reduce((acc, el, ind, arr) => {
          if (el.to.toLowerCase() === address?.toLowerCase()) {
            return acc - +el.value / tokenDivider;
          } else {
            return acc + +el.value / tokenDivider;
          }
        }, 0);
  }

  return result.reverse();
};
