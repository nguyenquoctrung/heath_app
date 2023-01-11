import React from "react";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface IChartweightProps {}

export const ChartWeight: React.FunctionComponent<IChartweightProps> = () => {
  const options: Highcharts.Options = {
    title: {
      text: "",
      align: "left",
    },

    subtitle: {
      text: "",
      align: "left",
    },

    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
    },

    xAxis: {
      categories: [
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "1月",
        "2月",
        "3月",
        "4月",
      ],
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    series: [
      {
        name: "",
        type: "line",
        data: [20, 19, 15, 16, 15, 14, 16, 14, 14, 13, 11, 12],
      },
      {
        name: "",
        type: "line",
        data: [20, 18, 16, 15, 13, 14, 12, 11, 9, 8, 7, 7],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "vertical",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartWeight;
