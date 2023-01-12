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

const RecommendsList = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  width: 100%;
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
        <Container>
          <RecommendsList>
            {data?.map((item, index) => {
              return (
                <Recommend
                  key={index}
                  title={item.title}
                  subTitle={item.subTitle}
                  background={item.image}
                />
              );
            })}
          </RecommendsList>
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
