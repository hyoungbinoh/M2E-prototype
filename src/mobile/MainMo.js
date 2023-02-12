import React from "react";
import {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";

const MainMo = () =>{
  const [position, setPosition] = useState(0);

  function onScroll(){
      setPosition(window.scrollY);
  }

  const viewport = window.innerHeight

  useEffect(() => {
      window.addEventListener('scroll',onScroll)
      return() => {
          window.removeEventListener('scroll',onScroll)
      }
  }, [])

    return(
        <div>
            <Logo src="img/StepWAR.svg" alt="StepWAR"/>
            <Title>M2E, but Better</Title>
            <Bubble1 src="img/Bubble1.svg" alt="Bubble1" 
            style={position < viewport ? {left: "calc(50% - 110px)", opacity: "1"} : {left: "calc(50% - 160px)", opacity:"0"}}
            /> 
            <Bubble2 src="img/Bubble2.svg" alt="Bubble2" 
            style={position < viewport ? {left: "calc(50% + 100px)", opacity: "1"} : {left: "calc(50% + 150px)", opacity:"0"}}
            /> 
            <MainImage src="img/MainImage.svg" alt="MainImage"/>
            <StoreBox>
            <Store href="#" >
                <div><p>Coming soon</p></div> 
                <img src="img/appstore.svg" alt="App Store"/>
            </Store>
            <Store href="#" >
                <div><p>Coming soon</p></div> 
                <img src="img/playstore.svg" alt="Google Play"/>
            </Store>   
            </StoreBox>
        </div>
    );
};


const Logo = styled.img`
  color: white;
  width: 178px;
  margin: 11vh auto 1vh auto;
`

const Title = styled.h1`
  background: linear-gradient(to right, #fff, #efc3fe);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 30px;
  font-family: 'Pretendard Variable', Pretendard;
  font-weight: 600;
  margin: 0px auto;
`

const bubble1Animation = keyframes`
from{
  opacity: 0;
  left: calc(50% - 160px);
}

to{
  opacity: 1;
  left: calc(50% - 110px);
}
`

const Bubble1 = styled.img`
  width: 150px;
  position: absolute;
  left: calc(50% - 110px);
  top: calc(11vh + 90px);
  transform: translate(-50%, -50%);
  transition: all 2s ease;
  animation: ${bubble1Animation} 2s ease;
  z-index: 5;
`

const bubble2Animation = keyframes`
from{
  opacity: 0;
  left: calc(50% + 150px);
}

to{
  opacity: 1;
  left: calc(50% + 100px);
}
`

const Bubble2 = styled.img`
  width: 90px;
  position: absolute;
  left: calc(50% + 100px);
  top: calc(11vh + 90px);
  transform: translate(-50%, -50%);
  transition: all 2s ease;
  animation: ${bubble2Animation} 2s ease;
  z-index: -5;
`

const MainImage = styled.img`
  margin: 6vh auto;
  width: 272px;
  transition: all 2s ease;
`

const StoreBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Store = styled.a`
  position: relative;
  margin: 1vh;

  & div {
    position: absolute;
    width: 160px;
    height: 47px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -55%);
    z-index: 1;
    background-color: rgb(0, 0, 0, 0.6);
    border-radius: 8px;
    text-decoration: none;
    color: #fff;
  }

  & p {
    font-size: 16px;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
  }

  & img {
    width: 160px;
    z-index: 0;
  }
`

export default MainMo;