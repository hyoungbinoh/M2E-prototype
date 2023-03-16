import React from "react"
import styled from "styled-components"

import MainTab from "./MainTab"
import TypeTab from "./TypeTab"
import PropertyTab from "./PropertyTab"
import SystemTab from "./SystemTab"
import TokenTab from "./TokenTab"
import RoadmapTab from "./RoadmapTab"
import PartnerTab from "./PartnerTab"
import FooterTab from "./FooterTab"
import HeaderTab from "./HeaderTab"
import BackgroundTab from "./BackgroundTab"

const Tablet = () => {
  return (
    <Body>
      <BackgroundTab />
      <HeaderTab />
      <Container>
        <Wrapper>
          <MainTab />
        </Wrapper>
      </Container>
      <ContainerTab style={{ height: "100rem" }}>
        <Wrapper>
          <TypeTab />
        </Wrapper>
      </ContainerTab>
      <ContainerTab style={{ height: "65rem" }}>
        <Wrapper>
          <PropertyTab />
        </Wrapper>
      </ContainerTab>
      <ContainerTab style={{ height: "70rem" }}>
        <Wrapper>
          <SystemTab />
        </Wrapper>
      </ContainerTab>
      <ContainerTab style={{ height: "65rem" }}>
        <Wrapper>
          <TokenTab />
        </Wrapper>
      </ContainerTab>
      <ContainerTab style={{ height: "105rem" }}>
        <Wrapper>
          <RoadmapTab />
        </Wrapper>
      </ContainerTab>
      <ContainerTab style={{ height: "100rem" }}>
        <Wrapper style={{ top: "25%" }}>
          <PartnerTab />
        </Wrapper>
        <ToTop onClick={() => {
          window.scrollTo({
            top: 0, left: 0, behavior: 'smooth'
          })
        }}>
          <img src="img/MoveTop.svg" alt="top-btn" />
        </ToTop>
      </ContainerTab>
      <ContainerTab style={{ height: "47.7rem" }}>
        <FooterTab />
      </ContainerTab>
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
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000;
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const ContainerTab = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000;
  transition: all 2s ease;
`

const ToTop = styled.div`
    position: absolute;
    z-index: 5;
    bottom: 10px;
    right: 15px;
`

export default Tablet
