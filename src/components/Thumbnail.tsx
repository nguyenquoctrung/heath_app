import React from "react";

import styled from "styled-components";

const Hexagon = styled.div<{ background: string }>`
  height: 23rem;
  width: 23rem;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  .label {
    padding: 0.5rem;
    background: #ffcc21;
    width: 50%;
    bottom: 0;
    position: absolute;
    color: #fff;
  }
`;

interface IThumbnailProps {
  title: string;
  background: string;
}

export const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({
  title,
  background,
}) => {
  return (
    <Hexagon background={background}>
      <div className="label">{title}</div>
    </Hexagon>
  );
};

export default Thumbnail;
