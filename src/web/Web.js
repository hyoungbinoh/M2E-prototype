import React from "react";
import { FullPage, Slide } from "react-full-page";
import styled from "styled-components";
import '../App.css'
import Header from "./Header";
import Main from "./Main";
import Property from "./Property";
import System from "./System";
import Token from "./Token";
import Roadmap from "./Roadmap";
import Partner from "./Partner";
import Type from "./Type";
import Background from "./Background";
import Footer from "./Footer";

const Web = () => {

    return(
        <Body>
          <FullPage duration={900} controls controlsProps={{className: "slide-navigation"}}>
          <Header/>
          <Background/>
          <Slide>
          <Container>
            <Wrapper>
              <Main/>
            </Wrapper>
          </Container>
          </Slide>
          <Slide>
          <Container>
            <Wrapper>
              <Type/>
            </Wrapper>
          </Container>
          </Slide>
          <Slide>
          <Container>
            <Wrapper>
              <Property/>
            </Wrapper>
          </Container>
          </Slide>
          <Slide>
          <Container>
            <Wrapper>
              <System/>
            </Wrapper>
          </Container>
          </Slide>
          <Slide>
          <Container>
            <Wrapper>
              <Token/>
            </Wrapper>
          </Container>
          </Slide>
          <Slide>
          <Container>
            <Wrapper>
              <Roadmap/>
            </Wrapper>
          </Container>
          </Slide>
          <Slide>
          <Container>
            <Wrapper>
              <Partner/>
            </Wrapper>
          </Container>
          </Slide>
          <Slide>
          <Container>
              <Footer/>
          </Container>
          </Slide>
          </FullPage>
        </Body>
      );
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
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`


export default Web;