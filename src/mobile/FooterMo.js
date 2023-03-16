import React from "react";
import styled from "styled-components";

const FooterMo = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <FooterWarp>
      <FooterBox>
        <PolicyWrap>
          <Logo src="img/WhiteLogo.svg" alt="WhiteLogo" />
          <PolicyBox>
            <PolicyTitle>Company</PolicyTitle>
            <PolicyInfo>Privacy Policy and Terms of Service</PolicyInfo>
          </PolicyBox>
          <PolicyBox>
            <PolicyTitle>About</PolicyTitle>
            <PolicyInfo>Elite Policy</PolicyInfo>
          </PolicyBox>
          <PolicyBox>
            <PolicyTitle>Careers</PolicyTitle>
            <PolicyInfo>Elite Biometrics Privacy Policy</PolicyInfo>
          </PolicyBox>
        </PolicyWrap>
        <InformationWrap>
          <Button>
            <p>Email Address</p>
            <img src="img/EmailNarrow.svg" alt="EmailNarrow" />
          </Button>
          <Copyright>&copy; {year} StepWAR</Copyright>
        </InformationWrap>
      </FooterBox>
    </FooterWarp>
  )
}

const FooterWarp = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 450px;
  transition: all 2s ease;
  background: #111;
  z-index: 10;
  overflow: hidden;
`

const FooterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`

const InformationWrap = styled.div`
  margin-top: 20px;
  width: 335px;
  transition: all 2s ease;
`

const Logo = styled.img`
  width: 88px;
  margin: 0px 247px 40px 0px;
  float: left;
  transition: all 2s ease;
`

const Button = styled.button`
  display: flex;
  width: 335px;
  height: 56px;
  margin-bottom: 20px;
  transition: all 2s ease;
  color: #fff;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(0, 0, 0, 0);
  border: solid 0px;
  border-radius: 30px;
  z-index: 5;
  & ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 30px;
    background: linear-gradient(to right, #FC46B0, #53C9EC);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
            mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude; 
  }
  & p {
    font-family: 'Pretendard Variable', Pretendard;
    font-size: 14px;
    font-weight: 600;
    margin-right: 180px;
    transition: all 2s ease;
  }
  & img {
    width: 12px;
    transition: all 2s ease;
  }
`

const Copyright = styled.p`
  font-family: 'Pretendard';
  font-size: 12px;
  transition: all 2s ease;
  font-weight: 400;
  color: #fff;
  opacity: 0.3;
  float: left;
`

const PolicyWrap = styled.div`
  width: 335px;
  transition: all 2s ease;
`

const PolicyBox = styled.div`
  color: #fff;
  opacity: 0.6;
  transition: all 2s ease;
  margin: 20px 0px;
`

const PolicyTitle = styled.h3`
  width: 320px;
  text-align: left;
  font-family: 'Pretendard';
  transition: all 2s ease;
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
`

const PolicyInfo = styled.p`
  font-size: 14px;
  text-align: left;
  font-family: 'Pretendard';
  transition: all 2s ease;
  font-weight: 400;
  margin: 10px 0px;
`

export default FooterMo