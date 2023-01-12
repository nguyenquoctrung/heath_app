import React from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";

const Wrapper = styled.div<{ background: string }>`
  .image{
    background: url(${(props) => props.background});
    height: 144px;
    background-position: center;
    background-size: cover;
    position: relative;
    .time{
      background: ${Colors.Primary300};
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: ${Colors.Light};
      position: absolute;
      bottom: 0;
      padding: 0 8px;
    }
  }
  .content {
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.075px;
    color: ${Colors.Dark500};
    text-align: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin: 5px 0;
  }
  .hashtag{
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.06px;
    color:${Colors.Primary400};
    text-align: left;
  }
`;

interface IArticleProps {
  image: string;
  time: string;
  content: string;
  hashtag: string;
}

export const Article: React.FunctionComponent<IArticleProps> = ({
  image,
  time,
  hashtag,
  content,
}) => {
  return (
    <Wrapper background={image}>
      <div className="image">
        <div className="time">{time}</div>
      </div>
      <div className="content">{content}</div>
      <div className="hashtag">{hashtag}</div>
    </Wrapper>
  );
};

export default Article;
