import { Component } from "react";
import logo from "../assets/svg/logo.svg";
import records from "../assets/svg/records.svg";
import challenge from "../assets/svg/challenge.svg";
import notice from "../assets/svg/notice.svg";
import icon_menu from "../assets/svg/icon_menu.svg";

import styled from "styled-components";
import { Colors } from "../styles/theme";

const Wrapper = styled.div`
  background-color: ${Colors.Dark500};
  font-family: "Hiragino Kaku Gothic Pro";
  position: sticky;
  top: 0rem;
  z-index: 2;
  box-shadow: 1px 1px ${Colors.Gray200};
  .container {
    max-width: 900px;
    margin: 0 auto;
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    background-color: ${Colors.Dark500};
    img {
      max-height: 3rem;
    }
    .menu {
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 1rem;
      .item {
        display: inline-flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
      }
      .label {
        color: ${Colors.Light};
      }
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <img src={logo} alt="logo" />
          <div className="menu">
            <div className="item">
              <img src={records} alt="records" />
              <div className="label"> 自分の記録</div>
            </div>

            <div className="item">
              <img src={challenge} alt="challenge" />
              <div className="label">チャレンジ</div>
            </div>
            <div className="item">
              <img src={notice} alt="notice" />
              <div className="label">お知らせ</div>
            </div>
            <div className="item">
              <img src={icon_menu} alt="icon_menu" />
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Header;
