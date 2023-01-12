import { Component } from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";

const Wrapper = styled.div`
  background-color: ${Colors.Dark500};
  font-family: "Hiragino Kaku Gothic Pro";
  .content {
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(6,auto);
    gap: 3rem;
    height: 128px;
    align-items: center;
    color: ${Colors.Light};
    background: ${Colors.Dark500};
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <div className="content">
          <div className="item">会員登録</div>
          <div className="item">運営会社</div>
          <div className="item">利用規約</div>
          <div className="item">個人情報の取扱について</div>
          <div className="item">特定商取引法に基づく表記</div>
          <div className="item">お問い合わせ</div>
        </div>
      </Wrapper>
    );
  }
}

export default Footer;
