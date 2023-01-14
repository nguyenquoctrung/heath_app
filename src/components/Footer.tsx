import { Component } from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";
import { Grid, Container } from "@mui/material";

const Wrapper = styled.div`
  background-color: ${Colors.Dark500};
  font-family: "Hiragino Kaku Gothic Pro";
  .content {
    max-width: 900px;
    margin: 0 auto;
    background: ${Colors.Dark500};
  }
`;
const Item = styled(Grid)`
  height: 128px;
  color: ${Colors.Light};
  font-size: 11px;
  align-items: center;
  display: flex;
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Container maxWidth="md">
          <Grid container spacing={1} sx={{ marginTop: 1 }} columns={12}>
            <Item item xs={12} sm={3} md={1} >
              会員登録
            </Item>
            <Item item xs={12} sm={3} md={1}>
              運営会社
            </Item>
            <Item item xs={12} sm={3} md={1}>
              利用規約
            </Item>
            <Item item xs={12} sm={3} md={2}>
              個人情報の取扱について
            </Item>
            <Item item xs={12} sm={3} md={2}>
              特定商取引法に基づく表記
            </Item>
            <Item item xs={12} sm={3} md={2}>
              お問い合わせ
            </Item>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;
