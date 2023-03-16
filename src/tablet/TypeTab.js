import React, { Suspense } from "react"
import styled from "styled-components"
import { Canvas } from "@react-three/fiber"
import WalkerShoe from "../component/WalkerShoe";
import JoggerShoe from "../component/JoggerShoe";
import RunnerShoe from "../component/RunnerShoe";
import AllRounderShoe from "../component/AllRounerderShoe";

const TypeTab = () => {
  return (
    <>
      <Information>
        <h2>What is StepWAR</h2>
        <p>StepWar is the second generation of P2E application </p>
        <p style={{ marginBottom: "2.5rem" }}>that consists Fit-fi, Game Fi and Social Fi.</p>
      </Information>
      <Container>
        <Wrapper>
          <InfoBox>
            <CanvasWrap>
              <Canvas>
                <Suspense fallback={null}>
                  <WalkerShoe />
                </Suspense>
              </Canvas>
            </CanvasWrap>
            <ShoeInfo>
              <ShoeType src="img/Walker.svg" alt="Walker" style={{ width: "7.8rem" }} />
              <ShoeDistance src="img/1-5km.svg" alt="1-5km/h" style={{ width: "9.15rem" }} />
            </ShoeInfo>
          </InfoBox>
          <InfoBox>
            <CanvasWrap>
              <Canvas>
                <Suspense fallback={null}>
                  <RunnerShoe />
                </Suspense>
              </Canvas>
            </CanvasWrap>
            <ShoeInfo>
              <ShoeType src="img/Runner.svg" alt="Runner" style={{ width: "9.34rem" }} />
              <ShoeDistance src="img/8-18km.svg" alt="8-18km/h" style={{ width: "11.67rem" }} />
            </ShoeInfo>
          </InfoBox>
        </Wrapper>
        <Wrapper>
          <InfoBox>
            <CanvasWrap >
              <Canvas>
                <Suspense fallback={null}>
                  <JoggerShoe />
                </Suspense>
              </Canvas>
            </CanvasWrap>
            <ShoeInfo>
              <JoggerType src="img/Jogger.svg" alt="Jogger" style={{ width: "8.12rem" }} />
              <JoggerDistance src="img/5-10km.svg" alt="5-10km/h" style={{ width: "10.23rem" }} />
            </ShoeInfo>
          </InfoBox>
          <InfoBox>
            <CanvasWrap>
              <Canvas>
                <Suspense fallback={null}>
                  <AllRounderShoe />
                </Suspense>
              </Canvas>
            </CanvasWrap>
            <ShoeInfo>
              <ShoeType src="img/AllRounder.svg" alt="AllRounder" style={{ width: "13.72rem" }} />
              <ShoeDistance src="img/1-18km.svg" alt="1-18km/h" style={{ width: "9.91rem" }} />
            </ShoeInfo>
          </InfoBox>
        </Wrapper>
      </Container>
    </>
  )
}

const Information = styled.div`
  transition: all 2s ease;
  position: relative;
  z-index: 5;

  & h2 {
    background: linear-gradient(to right, #fff, #efc3fe);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 5rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    margin: 8.4rem auto 2.4rem auto;
    transition: all 2s ease;
  }
  
  & p {
    color: #fff;
    font-size: 2rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 400;
    margin: 1.2rem auto;
    transition: all 2s ease;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 5;
`

const Wrapper = styled.div`
    display: flex;
`

const CanvasWrap = styled.div`
  height: 29.25rem;
  margin-bottom: -18.75rem;
  overflow: visible;
  :hover {
    cursor: all-scroll;
  };
`

const InfoBox = styled.div`
    width: 29.25rem;
    margin: 2.7rem;
`

const ShoeInfo = styled.div`
    width: 29.25rem;
    height: 16.88rem;
    border-image: linear-gradient(to right, #FC46B0, #53C9EC) 1;
    border-width: 2px;
    border-style: solid;
    color: #fff;
`

const ShoeType = styled.img`
    display: block;
    margin: 7.5rem auto 1.3rem auto;
    transition: all 2s ease;    
`

const ShoeDistance = styled.img`
    display: block;
    margin: 1.3rem auto 4.78rem auto;
    transition: all 2s ease;
`

const JoggerType = styled.img`
    display: block;
    margin: 7.5rem auto 0.94rem auto;
    transition: all 2s ease;    
`

const JoggerDistance = styled.img`
    display: block;
    margin: 0.94rem auto 4.44rem auto;
    transition: all 2s ease;
`

export default TypeTab
