import React from "react";
import styled from "styled-components";

const Token = () => {
  return (
    <div>
      <Information>
        <h2>Tokenomics</h2>
        <p>User-friendly Tokenomics</p>
        <p>for Sustaining Ecosystem Maintenance.</p>
      </Information>
      <TokenWrap>
        <TokenInfo>
          <img src="img/SWT.svg" alt="SWT" />
          <div>
            <p>SWT Utility Token</p>
            <h3>Unlimited supply</h3>
          </div>
        </TokenInfo>
        <TokenInfo>
          <img src="img/SMT.svg" alt="SMT" />
          <div>
            <p>SMT Governance Token</p>
            <h3>1,000,000,000 supply</h3>
          </div>
        </TokenInfo>
      </TokenWrap>
    </div>
  );
};

const Information = styled.div`
  & h2 {
    background: linear-gradient(to right, #fff, #efc3fe);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 7rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    margin: 4rem auto;
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

const TokenWrap = styled.div`
  display: flex;
`

const TokenInfo = styled.div`
  z-index: 5;
  & img {
    margin-top: 10rem;
    width: 24rem;
    transition: all 2s ease;
  }
  & div {
    margin: 5rem;
    width: 50rem;
    height: 15rem;
    transition: all 2s ease;
    border: 2px rgba(255, 255, 255, 0.2) solid;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.08);
    color: #fff;
  }
  & div > p {
    margin-top: 2.7rem;
    font-size: 2rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    transition: all 2s ease;
  }
  & div > h3 {
    margin: 1rem;
    font-size: 4rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    transition: all 2s ease;
  }
`

export default Token;