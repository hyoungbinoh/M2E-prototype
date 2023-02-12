import React from "react";
import styled from "styled-components";

const PartnerMo = () => {
    return(
        <div>
            <Title>Partners</Title>
            <PartnerWrap>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner"/>
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner"/>
                </PartnerBox>
            </PartnerWrap>
            <PartnerWrap>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner"/>
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner"/>
                </PartnerBox>
            </PartnerWrap>
            <PartnerWrap>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner"/>
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner"/>
                </PartnerBox>
            </PartnerWrap>
            <PartnerWrap style={{marginBottom:"360px"}}>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner"/>
                </PartnerBox>
                <PartnerBox>
                    <PartnerImg src="img/WhiteLogo.svg" alt="partner"/>
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
  font-size: 30px;
  font-family: 'Pretendard Variable', Pretendard;
  font-weight: 600;
  margin:  50px auto 30px auto;
  transition: all 2s ease;
`

const PartnerWrap = styled.div`
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items:center;
  transition: all 2s ease;
`

const PartnerBox = styled.div`
  width: 140px;
  height: 80px;
  margin: 6px;
  background: linear-gradient(rgba(50, 50, 50, 0.9), rgba(50, 50, 50, 0.45));
  border: 1px rgba(50, 50, 50, 0.9) solid;
  border-radius: 8px;
  transition: all 2s ease;
`

const PartnerImg = styled.img`
  width: 90px;
  margin-top: 20px;
  transition: all 2s ease;
`

export default PartnerMo;