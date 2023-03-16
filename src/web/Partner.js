import React from "react";
import styled from "styled-components";

const Partner = () => {
    return (
        <div>
            <Title>Partners</Title>
            <PartnerWrap style={{ marginTop: "13.4rem" }}>
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
  font-size: 7rem;
  font-family: 'Pretendard Variable', Pretendard;
  font-weight: 600;
  margin:  2rem auto 6rem auto;
  transition: all 2s ease;
`

const PartnerWrap = styled.div`
  width: 118rem;
  height: 17rem;
  margin: 3.2rem;
  display: flex;
  justify-content: center;
  align-items:center;
  transition: all 2s ease;
`

const PartnerBox = styled.div`
  width: 27.3rem;
  height: 17rem;
  margin: 1.6rem;
  background: linear-gradient(rgba(50, 50, 50, 0.9), rgba(50, 50, 50, 0.45));
  border: 1px rgba(50, 50, 50, 0.9) solid;
  border-radius: 12px;
  transition: all 2s ease;
`

const PartnerImg = styled.img`
  width: 17rem;
  margin-top: 5rem;
  transition: all 2s ease;
`

export default Partner;