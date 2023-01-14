import React from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";
import { List, ListItem } from "@mui/material";

const Wrapper = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${Colors.Dark500};
  justify-content: center;
  align-items: center;
  color: ${Colors.Light};
  .title {
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.15px;
    display: flex;
    item-align: center;
    .name {
      width: 6rem;
      text-align: left;
    }
    .date {
      font-size: 22px;
      line-height: 27px;
      letter-spacing: 0.11px;
    }
  }
  .content {
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${Colors.Primary300};
      border-radius: 8px;
    }
    overflow-y: auto;
    max-height: 15rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 3rem;
    padding: 1rem 2rem 0rem 2rem;
    .item {
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${Colors.Gray400};
      display: inline-flex;
      padding-bottom: 0.1rem;
      .name {
        text-align: left;
        line-height: 1.5rem;
        .kcal {
          font-size: 15px;
          line-height: 18px;
          letter-spacing: 0.075px;
          color: ${Colors.Primary300};
        }
      }
      .time {
        color: ${Colors.Primary300};
      }
    }
  }
`;

interface IExerciseProps { }

const data = {
  name: "家事全般（立位・軽い）",
  kcal: "26kcal",
  time: "10 min",
};

export const Exercise: React.FunctionComponent<IExerciseProps> = () => {
  return (
    <Wrapper>
      <div className="title">
        <div className="name">MY EXERCISE</div>
        <div className="date">2021.05.21</div>
      </div>
      <div className="content">
        {Array(50)
          .fill(data)
          .map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="name">
                  <List
                    disablePadding
                    sx={{
                      display: "flex",
                      listStyleType: "disc",
                      "& ::marker": {
                        color: Colors.Light,
                      },
                    }}
                  >
                    <ListItem
                      disablePadding
                      sx={{ display: "list-item" }}
                    >{item.name}</ListItem>
                  </List>
                  <div className="kcal">{item.kcal}</div>
                </div>
                <div className="time">{item.time}</div>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default Exercise;
