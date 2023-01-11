import { Component } from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  height: 12.8rem;
  background-color: ${Colors.Dark500};
  justify-content: center;
  align-items: center;
  color: ${Colors.Light};
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <div className="item">会員登録</div>
        <div className="item">運営会社</div>
        <div className="item">利用規約</div>
        <div className="item">個人情報の取扱について</div>
      </Wrapper>
    );
  }
}

export default Footer;
