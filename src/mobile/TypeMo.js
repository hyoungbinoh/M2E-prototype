import React, {Suspense} from "react"
import styled from "styled-components"
import {Canvas} from "@react-three/fiber"
import WalkerShoe from "../component/WalkerShoe";
import JoggerShoe from "../component/JoggerShoe";
import RunnerShoe from "../component/RunnerShoe";
import AllRounderShoe from "../component/AllRounerderShoe";

const TypeMo = () =>{
  return(
    <>
      <Information>
        <h2>What is StepWAR</h2>
        <p>StepWar is the second generation of P2E application </p> 
        <p style={{marginBottom:"50px"}}>that consists Fit-fi, Game Fi and Social Fi.</p>
      </Information>
      <Container>
        <InfoBox>
          <CanvasWrap>
            <Canvas>
              <Suspense fallback={null}>
                <WalkerShoe/>
              </Suspense>
            </Canvas>
          </CanvasWrap>
          <ShoeInfo>
            <ShoeType src="img/Walker.svg" alt="Walker" style={{width: "56.96px"}}/>
            <ShoeDistance src="img/1-5km.svg" alt="1-5km/h" style={{width: "60.53px"}}/>
          </ShoeInfo>
        </InfoBox>
        <InfoBox>
          <CanvasWrap >
            <Canvas>
              <Suspense fallback={null}>
                <JoggerShoe/>
              </Suspense>
            </Canvas>
          </CanvasWrap>
          <ShoeInfo>
            <JoggerType src="img/Jogger.svg" alt="Jogger" style={{width: "60.77px"}}/>
            <JoggerDistance src="img/5-10km.svg" alt="5-10km/h" style={{width: "68.29px"}}/>
          </ShoeInfo>
        </InfoBox>
        <InfoBox>
          <CanvasWrap>
            <Canvas>
              <Suspense fallback={null}>
                <RunnerShoe/>
              </Suspense>
            </Canvas>
          </CanvasWrap>
          <ShoeInfo>
            <ShoeType src="img/Runner.svg" alt="Runner" style={{width: "58px"}}/>
            <ShoeDistance src="img/8-18km.svg" alt="8-18km/h" style={{width: "67.38px"}}/>
          </ShoeInfo>
        </InfoBox>
        <InfoBox>
          <CanvasWrap>
            <Canvas>
              <Suspense fallback={null}>
                <AllRounderShoe/>
              </Suspense>
            </Canvas>
          </CanvasWrap>
          <ShoeInfo>
            <ShoeType src="img/AllRounder.svg" alt="AllRounder" style={{width: "88.81px"}}/>
            <ShoeDistance src="img/1-18km.svg" alt="1-18km/h" style={{width: "68.09px"}}/>
          </ShoeInfo>
        </InfoBox>
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
    font-size: 30px;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    margin: 100px auto 40px auto;
    transition: all 2s ease;
  }
  
  & p {
    color: #fff;
    font-size: 15px;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 400;
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

const CanvasWrap = styled.div`
  height: 190px;
  margin-bottom: -120px;
  overflow: visible;
  :hover {
    cursor: all-scroll;
  };
`

const InfoBox = styled.div`
    width: 188px;
    margin: 10px 0px;
`

const ShoeInfo = styled.div`
    width: 188px;
    height: 111px;
    border-image: linear-gradient(to right, #FC46B0, #53C9EC) 1;
    border-width: 2px;
    border-style: solid;
    color: #fff;
`

const ShoeType = styled.img`
    display: block;
    margin: 49px auto 10px auto;    
`

const ShoeDistance = styled.img`
    display: block;
    margin: 10px auto 45px auto;
`

const JoggerType = styled.img`
    display: block;
    margin: 47px auto 7px auto;    
`

const JoggerDistance = styled.img`
    display: block;
    margin: 7px auto 45px auto;
`

export default TypeMo
