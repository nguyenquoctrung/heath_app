import React from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";

const Wrapper = styled.div<{ background: string }>`
  background-size: cover;
  background-position: center;
  position: relative;
  border: 24px solid ${Colors.Primary300};
  background-color: ${Colors.Dark500};
  font-family: "Hiragino Kaku Gothic Pro";
  .image {
    background: url(${(props) => props.background});
    mix-blend-mode: luminosity;
    opacity: 0.25;
    min-height: 288px;
    background-position: center;
    background-size: cover;
  }
  .content {
    display: flex;
    justify-content: center;
    item-align: center;
    .title {
      position: absolute;
      left: 8.33%;
      right: 8.33%;
      top: 38.89%;
      bottom: 50.69%;
      font-family: "Inter";
      font-style: normal;
      font-size: 25px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.125px;
      color: ${Colors.Primary300};
    }
    .sub-title {
      position: absolute;
      top: calc(50% - 24px / 2 + 20px);
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: ${Colors.Light};
      background: ${Colors.Primary400};
      padding: 0 1rem;
    }
  }
`;

interface IRecommendProps {
  title: string;
  subTitle: string;
  background: string;
}

export const Recommend: React.FunctionComponent<IRecommendProps> = ({
  title,
  subTitle,
  background,
}) => {
  return (
    <Wrapper background={background}>
      <div className="image" />
      <div className="content">
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
    </Wrapper>
  );
};

export default Recommend;
