import React from "react";
import ApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#84D4BC"],
  stroke: {
    width: 2,
    curve: "straight",
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    show: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
    },
  },
};

const Chart = ({ data }: { data: number[] }) => {
  return (
    <ApexChart
      options={options}
      series={[{ data, name: "course" }]}
      type={"area"}
      height={169}
    />
  );
};

export default Chart;
