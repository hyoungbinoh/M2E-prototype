import React from "react";
import {useState, useEffect} from "react";
import styled from "styled-components";

const HeaderTab = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
  })

  return(
    <Container style={scrollPosition === 0 ? {background : "transparent"} : {background : "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"}}>
      <Wrapper>
        <Logo>
          <a href="/"><img src="img/Logo.svg" alt=""/></a>
        </Logo>
        <Business>
          <a href="#"><img src="img/MarketPlace.svg" alt="marketplace"/></a>
          <a href="#"><img src="img/WhitePapers.svg" alt="whitepapers"/></a>
        </Business>
        <SocialNetworks>
          <a href="#"><img src="img/Discord.svg" alt="discord"/></a>
          <a href="#"><img src="img/Twitter.svg" alt="Twitter"/></a> 
        </SocialNetworks>
      </Wrapper>
    </Container>
  );
};

const Container =  styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 10;
`

const Wrapper = styled.div`
  position: absolute;
  width: 70rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 2s ease;
`

const Logo =  styled.div`
  transition: all 2s ease;
`

const Business = styled.div`
  display: flex;
  transition: all 2s ease;
  & a {
    margin: 1.5vw;
    transition: all 2s ease;
  }
`

const SocialNetworks =  styled.div`
  transition: all 2s ease;
  display: flex;
  & a {
    margin: 1vw;
    transition: all 2s ease;
  }
`

export default HeaderTab;

