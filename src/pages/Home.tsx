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
import CircularStatic from "../components/CircularStatic";
import ChartWeight from "../components/ChartWeight";
import HexagonMenu from "../components/HexagonMenu";
import ScrollButton from "../components/ScrollButton";
import Thumbnail from "../components/Thumbnail";
import Footer from "../components/Footer";
import ButtonViewMore from "../components/ButtonViewMore";
import { Grid } from "@mui/material";

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
  .date {
    min-height: 20rem;
    background-image: url(${d01});
    background-position: center;
    background-size: auto;
    display: flex;
    justify-content: center;
    align-items: center;
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
const MenuItem = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
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
            <CircularStatic />
          </div>
          <div className="weight">
            <ChartWeight />
          </div>
        </TopPage>
        <Container>
          <Grid container spacing={1} sx={{ marginTop: 2 }} columns={12}>
            <MenuItem item xs={12} sm={6} md={3} lg={3}>
              <HexagonMenu title={"Morning"} icon={morning} />
            </MenuItem>
            <MenuItem item xs={12} sm={6} md={3} lg={3}>
              <HexagonMenu title={"Lunch"} icon={morning} />
            </MenuItem>
            <MenuItem item xs={12} sm={6} md={3} lg={3}>
              <HexagonMenu title={"Dinner"} icon={morning} />
            </MenuItem>
            <MenuItem item xs={12} sm={6} md={3} lg={3}>
              <HexagonMenu title={"Snack"} icon={snack} />
            </MenuItem>
          </Grid>

          <Grid container spacing={1} sx={{ marginTop: 2 }} columns={12}>
            {data?.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Thumbnail
                    key={index}
                    title={item.title}
                    background={item.background}
                  />
                </Grid>
              );
            })}
          </Grid>
          <ButtonViewMore content={"記録をもっと見る"} />
          <ScrollButton />
        </Container>
        <Footer />
      </AuthModuleWrapper>
    );
  }
}

export default Home;
