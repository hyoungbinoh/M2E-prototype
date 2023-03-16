import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import '../App.css'

import HeaderPage from "./HeaderPage";
import MainMo from "./MainMo";
import TypeMo from "./TypeMo";
import PropertyMo from "./PropertyMo";
import SystemMo from "./SystemMo";
import TokenMo from "./TokenMo";
import RoadmapMo from "./RoadmapMo";
import PartnerMo from "./PartnerMo";
import FooterMo from "./FooterMo";
import BackgroundMo from "./BackgroundMo";

const Mobile = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
  })

  const [Menu, SetMenu] = useState(false);

  return (
    <Body>
      <HeaderMo style={scrollPosition === 0 ? { background: "transparent" } : { background: "linear-gradient(rgba(17, 17, 17, 1), rgba(17, 17, 17, 0.7), rgba(17, 17, 17, 0))" }}>
        <HeaderWrap>
          <Logo>
            <a href="/"><img src="img/Logo.svg" alt="" /></a>
          </Logo>
          <HambergerBar>
            <button onClick={() => { SetMenu((e) => !e) }}><img src={Menu ? "img/XBar.svg" : "img/HambergerBar.svg"} alt="discord" /></button>
          </HambergerBar>
        </HeaderWrap>
      </HeaderMo>
      <BackgroundMo />
      {Menu ?
        <HeaderPage /> :
        <>
          <Container>
            <Wrapper>
              <MainMo />
            </Wrapper>
          </Container>
          <ContainerMo>
            <TypeMo />
          </ContainerMo>
          <ContainerMo>
            <PropertyMo />
          </ContainerMo>
          <ContainerMo>
            <SystemMo />
          </ContainerMo>
          <ContainerMo>
            <TokenMo />
          </ContainerMo>
          <ContainerMo>
            <RoadmapMo />
          </ContainerMo>
          <ContainerMo>
            <PartnerMo />
            <ToTop onClick={() => {
              window.scrollTo({
                top: 0, left: 0, behavior: 'smooth'
              })
            }}>
              <img src="img/MoveTop.svg" alt="top-btn" />
            </ToTop>
          </ContainerMo>
          <ContainerMo>
            <FooterMo />
          </ContainerMo>
        </>
      }

    </Body>
  )
}

const Body = styled.div`
  margin: 0;
  padding: 0;
  background-color: #000;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000;

  @supports (-webkit-touch-callout: none) { 
  height: -webkit-fill-available;
}
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`

const ContainerMo = styled.div`
  overflow: hidden;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000;
`

const ToTop = styled.div`
    position: absolute;
    z-index: 5;
    bottom: 10px;
    right: 10px;
`

const HeaderMo = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 10;
`

const HeaderWrap = styled.div`
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

export default Mobile