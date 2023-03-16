import React from "react";
import styled from "styled-components";

const PartnerTab = () => {
    return (
        <div>
            <Title>Partners</Title>
            <PartnerWrap style={{ marginTop: "8.8rem" }}>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner" />
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner" />
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner" />
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner" />
                </PartnerBox>
            </PartnerWrap>
            <PartnerWrap>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner" />
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner" />
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner" />
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner" />
                </PartnerBox>
            </PartnerWrap>
        </div>
    )
};

const Title = styled.h2`
  background: linear-gradient(to right, #fff, #efc3fe);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 5rem;
  font-family: 'Pretendard Variable', Pretendard;
  font-weight: 600;
  margin:  0 auto 6rem auto;
  transition: all 2s ease;
`

const PartnerWrap = styled.div`
  width: 70rem;
  height: 8rem;
  margin: 3.2rem auto;
  display: flex;
  justify-content: center;
  align-items:center;
  transition: all 2s ease;
`

const PartnerBox = styled.div`
  width: 14rem;
  height: 8rem;
  margin: 1.6rem;
  background: linear-gradient(rgba(50, 50, 50, 0.9), rgba(50, 50, 50, 0.45));
  border: 1px rgba(50, 50, 50, 0.9) solid;
  border-radius: 6px;
  transition: all 2s ease;
`

const PartnerImg = styled.img`
  width: 9rem;
  margin-top: 2rem;
  transition: all 2s ease;
`

export default PartnerTab;