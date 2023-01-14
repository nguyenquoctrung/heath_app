import React from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";
import { Grid } from "@mui/material";
const Wrapper = styled.div`
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  .title {
    letter-spacing: 0.15px;
    display: flex;
    item-align: center;
    font-size: 22px;
    line-height: 27px;
  }
  .item {
    text-align: justify;
    padding: 0.8rem;
    border-bottom: 1px solid ${Colors.Gray400};
    border: 1px solid ${Colors.Gray400};
    .time {
      width: 6rem;
      text-align: left;
      font-size: 18px;
      line-height: 22px;
    }
    .content {
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      font-weight: 300;
      font-size: 12px;
      line-height: 17px;
    }
  }
`;

interface IDiaryProps { }

const data = {
  content:
    "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  time: "2021.05.21 23:25",
};

export const Diary: React.FunctionComponent<IDiaryProps> = () => {
  return (
    <Wrapper>
      <div className="title">MY DIARY</div>
      <Grid container spacing={1} sx={{ marginTop: 2, marginBottom: 2 }} columns={12}>
        {Array(8)
          .fill(data)
          .map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <div className="item" key={index}>
                  <div className="time">{item.time}</div>
                  <div className="content">{item.content}</div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </Wrapper>
  );
};

export default Diary;
