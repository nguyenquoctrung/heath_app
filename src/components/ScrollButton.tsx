import React, { useState } from "react";

import styled from "styled-components";
import scroll from "../assets/svg/scroll.svg";

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: calc(50% - 50px);
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: green;
`;
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <img
        src={scroll}
        alt="scroll"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", height: 48, width: 48 }}
      />
    </Button>
  );
};

export default ScrollButton;
