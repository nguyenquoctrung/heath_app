import React from "react";

import styled from "styled-components";
import { Colors } from "../styles/theme";

const Hexagon = styled.div<{ background: string }>`
  height: 234px;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  .label {
    padding: 0.5rem;
    background: ${Colors.Primary300};
    width: 50%;
    bottom: 0;
    position: absolute;
    color: ${Colors.Light}
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
