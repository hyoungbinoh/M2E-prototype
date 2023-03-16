import React from "react"
import styled, { keyframes } from "styled-components"

import Slide from "./Slide"

const Type = () => {
  return (
    <>
      <Information>
        <h2>What is StepWAR</h2>
        <p>StepWar is the second generation of P2E application that consists</p>
        <p style={{ marginBottom: "6rem" }}>Fit-fi, Game Fi and Social Fi.</p>
      </Information>
      <Slide style={{ float: "left" }} />
      <Bubble1 src="img/Bubble1.svg" alt="Bubble1" />
      <Bubble2 src="img/Bubble2.svg" alt="Bubble2" />
    </>
  )
}

const Information = styled.div`
  transition: all 2s ease;

  & h2 {
    background: linear-gradient(to right, #fff, #efc3fe);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 7rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    margin: 14rem auto 4rem auto;
    transition: all 2s ease;
  }
  
  & p {
    color: #fff;
    font-size: 2rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 400;
    margin: 2rem auto;
    transition: all 2s ease;
  }
`

const bubble1Animation = keyframes`
0%{
  top: 78rem;
}

50%{
  top: 81rem;
}

100%{
  top: 78rem;
}
`

const Bubble1 = styled.img`
  width: 36.4rem;
  position: absolute;
  left: calc(50% - 45rem);
  top: 81rem;
  transform: translate(-50%, -50%);
  transition: all 2s ease;
  animation: ${bubble1Animation} 4s ease infinite;
  z-index: 5;
`

const bubble2Animation = keyframes`
0%{
  top: 83rem;
}

50%{
  top: 86rem;
}

100%{
  top: 83rem;
}
`

const Bubble2 = styled.img`
  width: 26rem;
  position: absolute;
  left: calc(50% + 49rem);
  top: 83rem;
  transform: translate(-50%, -50%);
  transition: all 2s ease;
  animation: ${bubble2Animation} 4s ease infinite;
  z-index: -5;
`

export default Type
