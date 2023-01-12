import React from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";

const Wrapper = styled.div`
  font-family: "Inter";
  position: relative;
  background-color: ${Colors.Dark500};
  padding: 2rem 0;
  gap: 0.3rem;
  .title {
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.11px;
    color: ${Colors.Primary300};
  }
  .line {
    border: 1px solid ${Colors.Light};
    width: 5rem;
    margin: auto;
  }
  .sub-title {
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: ${Colors.Light};
  }
`;

interface IRecommendedProps {
  title: string;
  subTitle: string;
}

export const Recommended: React.FunctionComponent<IRecommendedProps> = ({
  title,
  subTitle,
}) => {
  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="line" />
      <div className="sub-title">{subTitle}</div>
    </Wrapper>
  );
};

export default Recommended;
