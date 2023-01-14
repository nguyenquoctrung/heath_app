import { Component } from "react";

import column1 from "../assets/img/column-1.jpg";
import column2 from "../assets/img/column-2.jpg";
import column3 from "../assets/img/column-3.jpg";
import column4 from "../assets/img/column-4.jpg";
import column5 from "../assets/img/column-5.jpg";
import column6 from "../assets/img/column-6.jpg";
import column7 from "../assets/img/column-7.jpg";
import column8 from "../assets/img/column-8.jpg";

import styled from "styled-components";
import { Colors } from "../styles/theme";
import Header from "../components/Header";
import ScrollButton from "../components/ScrollButton";
import Footer from "../components/Footer";
import Article from "../components/Article";
import Recommended from "../components/Recommended";
import ButtonViewMore from "../components/ButtonViewMore";
import { Grid } from "@mui/material";
const AuthModuleWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${Colors.Light};
  font-family: "Inter";
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 5rem;
  flex: 1;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
`;
const data = [
  {
    image: column1,
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: "2021.05.17 23:25",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    image: column2,
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: "2021.05.17 23:25",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    image: column3,
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: "2021.05.17 23:25",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    image: column4,
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: "2021.05.17 23:25",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    image: column5,
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: "2021.05.17 23:25",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    image: column6,
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: "2021.05.17 23:25",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    image: column7,
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: "2021.05.17 23:25",
    hashtag: "#魚料理  #和食  #DHA",
  },
  {
    image: column8,
    content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    time: "2021.05.17 23:25",
    hashtag: "#魚料理  #和食  #DHA",
  },
];
class ColumnPage extends Component {
  render() {
    return (
      <AuthModuleWrapper>
        <Header />
        <Container>
          <Grid container spacing={1} sx={{ marginTop: 2 }} columns={12}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Recommended title={"RECOMMENDED COLUMN"} subTitle={"オススメ"} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Recommended title={"RECOMMENDED DIET"} subTitle={"ダイエット"} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Recommended title={"RECOMMENDED BEAUTY"} subTitle={"美容"} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Recommended title={"RECOMMENDED HEALTH"} subTitle={"健康"} />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ marginTop: 2 }} columns={12}>
            {data.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Article
                    key={index}
                    image={item.image}
                    content={item.content}
                    hashtag={item.hashtag}
                    time={item.time}
                  />{" "}
                </Grid>
              );
            })}
          </Grid>
          <ButtonViewMore content={"コラムをもっと見る"} />
          <ScrollButton />
        </Container>
        <Footer />
      </AuthModuleWrapper>
    );
  }
}

export default ColumnPage;
