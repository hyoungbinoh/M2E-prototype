import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderMo = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
  })

  const [Menu, SetMenu] = useState(false);

  return (
    <Container style={scrollPosition === 0 ? { background: "transparent" } : { background: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))" }}>
      <Wrapper>
        <Logo>
          <a href="/"><img src="img/Logo.svg" alt="" /></a>
        </Logo>
        <HambergerBar>
          <button onClick={() => { SetMenu((e) => !e) }}><img src={Menu ? "img/XBar.svg" : "img/HambergerBar.svg"} alt="discord" /></button>
        </HambergerBar>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 10;
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  margin: 0px 28vw;
  transition: all 2s ease;
`

const HambergerBar = styled.div`
  margin: 0px 24vw;
  transition: all 2s ease;
  display: flex;
  & button {
    margin: 8px;
    border: none;
    outline: none;
    background: none;
  }
`

export default HeaderMo;