import React from "react";

import styled from "styled-components";

const Chart = styled.div`
  width: 100%;

  .chart {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 40px;
    line-height: 160px;
    height: 160px;
    color: #fff;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    width: 100%;
  }
`;

interface IChartDateProps {
  percent: number;
}

export const ChartDate: React.FunctionComponent<IChartDateProps> = ({
  percent,
}) => {
  return (
    <Chart>
      <div className="box">
        <div
          className="chart"
          data-percent={percent}
          data-scale-color="#ffb400"
        >
          {percent}%
        </div>
      </div>
    </Chart>
  );
};

export default ChartDate;
