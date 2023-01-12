import { Component } from "react";
import morning from "../assets/svg/morning.svg";
import snack from "../assets/svg/snack.svg";

import m01 from "../assets/img/m01.jpg";
import l03 from "../assets/img/l03.jpg";
import d01 from "../assets/img/d01.jpg";
import l01 from "../assets/img/l01.jpg";
import l02 from "../assets/img/l02.jpg";
import d02 from "../assets/img/d02.jpg";
import s01 from "../assets/img/s01.jpg";

import styled from "styled-components";
import { Colors } from "../styles/theme";
import Header from "../components/Header";
import ChartDate from "../components/ChartDate";
import ChartWeight from "../components/ChartWeight";
import HexagonMenu from "../components/HexagonMenu";
import ScrollButton from "../components/ScrollButton";
import Thumbnail from "../components/Thumbnail";
import Footer from "../components/Footer";

import ButtonViewMore from "../components/ButtonViewMore";

const AuthModuleWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${Colors.Light};
  font-family: "Inter";
`;

const TopPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  position: sticky;
  top: 4rem;
  z-index: 2;
  box-shadow: 1px 1px #f0ecec;
  .date {
    min-height: 20rem;
    background-image: url(${d01});
    background-position: center;
    background-size: auto;
  }
  .weight {
  }
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

const Menu = styled.div`
  display: inline-flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 2rem 0;
`;
const ThumbnailList = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const data = [
  {
    title: "05.21.Morning",
    background: m01,
  },
  {
    title: "05.21.Lunch",
    background: l03,
  },
  {
    title: "05.21.Dinner",
    background: d01,
  },
  {
    title: "05.21.Snack",
    background: l01,
  },
  {
    title: "05.20.Morning",
    background: m01,
  },
  {
    title: "05.20.Lunch",
    background: l02,
  },
  {
    title: "05.20.Dinner",
    background: d02,
  },
  {
    title: "05.21.Snack",

    background: s01,
  },
];
class Home extends Component {
  render() {
    return (
      <AuthModuleWrapper>
        <Header />
        <TopPage>
          <div className="date">
            <ChartDate percent={75} />
          </div>
          <div className="weight">
            <ChartWeight />
          </div>
        </TopPage>
        <Container>
          <Menu>
            <HexagonMenu title={"Morning"} icon={morning} />
            <HexagonMenu title={"Lunch"} icon={morning} />
            <HexagonMenu title={"Dinner"} icon={morning} />
            <HexagonMenu title={"Snack"} icon={snack} />
          </Menu>
          <ThumbnailList>
            {data?.map((item, index) => {
              return (
                <Thumbnail key={index} title={item.title} background={item.background} />
              )
            })};
          </ThumbnailList>
          <ButtonViewMore content={"記録をもっと見る"} />
          <ScrollButton />
        </Container>
        <Footer />
      </AuthModuleWrapper>
    );
  }
}

export default Home;
