import React from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";

const Wrapper = styled.button`
  cursor: pointer;
  margin: 2rem 0;
  width: 25%;
  background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);
  height: 56px;
  border-radius: 0.5rem;
  color: ${Colors.Light};
  border: none;
  font-size: 18px;
`;

interface IChartDateProps {
  content: string;
  event?: () => void;
}

export const ButtonViewMore: React.FunctionComponent<IChartDateProps> = ({
  content, event
}) => {
  return (
    <Wrapper onClick={() => event ? event() : undefined}>
      {content}
    </Wrapper>
  );
};

export default ButtonViewMore;
