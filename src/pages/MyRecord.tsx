import { Component } from "react";

import myRecommend1 from "../assets/img/MyRecommend-1.jpg";
import myRecommend2 from "../assets/img/MyRecommend-2.jpg";
import myRecommend3 from "../assets/img/MyRecommend-3.jpg";

import styled from "styled-components";
import { Colors } from "../styles/theme";
import Header from "../components/Header";
import ScrollButton from "../components/ScrollButton";
import Footer from "../components/Footer";
import Recommend from "../components/Recommend";
import MyExercise from "../components/MyExercise";
import MyDiary from "../components/MyDiary";

import ButtonViewMore from "../components/ButtonViewMore";
import ChartWeight from "../components/ChartWeight";
import { Grid, Container } from "@mui/material";

const AuthModuleWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${Colors.Light};
  font-family: "Inter";
`;


const data = [
  {
    image: myRecommend1,
    title: "BODY RECORD",
    subTitle: "自分のカラダの記録",
  },
  {
    image: myRecommend2,
    title: "MY EXERCISE",
    subTitle: "自分の運動の記録",
  },
  {
    image: myRecommend3,
    title: "MY DIARY",
    subTitle: "自分の日記",
  },
];
class MyRecord extends Component {
  render() {
    return (
      <AuthModuleWrapper>
        <Header />
        <Container maxWidth="md">
          <Grid container spacing={1} sx={{ marginTop: 2, marginBottom: 3 }} columns={12}>
            {data?.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Recommend
                    key={index}
                    title={item.title}
                    subTitle={item.subTitle}
                    background={item.image}
                  />
                </Grid>
              );
            })}
          </Grid>
          <ChartWeight />
          <MyExercise />
          <MyDiary />
          <ButtonViewMore content={"自分の日記をもっと見る"} />
          <ScrollButton />
        </Container>
        <Footer />
      </AuthModuleWrapper>
    );
  }
}

export default MyRecord;
