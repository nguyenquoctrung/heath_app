import React from "react";

import styled from "styled-components";
import bg from "../assets/svg/bg.svg";
import { Colors } from "../styles/theme";

const Hexagon = styled.div<{ background: string }>`
  background: url(${(props) => props.background});
  background-size: contain;
  background-position: center;
  .box-5 {
    width: 0;
    border-bottom: 30px solid transparent;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
  }

  .box-6 {
    width: 0;
    border-top: 30px solid transparent;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
  }
  .box-7 {
    width: 104px;
    height: 60px;
    background-color: transparent;
    .label {
      color:  ${Colors.Light};
      font-family: "Inter";
    }
  }
`;

interface IHexagonMenuProps {
  title: string;
  icon: string;
}

export const HexagonMenu: React.FunctionComponent<IHexagonMenuProps> = ({
  title,
  icon,
}) => {
  return (
    <Hexagon background={bg}>
      <div className="box-5"></div>
      <div className="box-7">
        <img src={icon} alt={title} />
        <div className="label">{title}</div>
      </div>
      <div className="box-6"></div>
    </Hexagon>
  );
};

export default HexagonMenu;
