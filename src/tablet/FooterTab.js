import React from "react";
import styled from "styled-components";

const FooterTab = () => {
  const now = new Date();
  const year = now.getFullYear();

    return(
        <>
        <FooterWarp>
            <FooterBox>
              <InformationWrap>
                <Logo src="img/WhiteLogo.svg" alt="WhiteLogo"/>
                <Information>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem elit ipsum neque, donec justo viverra viverra ac. Nulla non massa, sed nibh proin dui nec, erat est. Placerat feugiat integer amet gravida. Quis diam suspendisse nulla dignissim malesuada eget purus turpis.</Information>
                <Button>
                  <p>Email Address</p>
                  <img src="img/EmailNarrow.svg" alt="EmailNarrow" />
                </Button>
                <Copyright>&copy; {year} StepWAR</Copyright>
              </InformationWrap>
              <PolicyWrap>
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
                <PolicyBox>
                  <PolicyTitle>Press</PolicyTitle>
                  <PolicyInfo>Elite Financial Privacy Notice</PolicyInfo>
                </PolicyBox>
                <PolicyBox>
                  <PolicyTitle>Notice</PolicyTitle>
                  <PolicyInfo>Elite Terms of Service</PolicyInfo>
                </PolicyBox>
                <PolicyBox>
                  <PolicyTitle>Company</PolicyTitle>
                  <PolicyInfo>Elite Trade Desk Terms of Service</PolicyInfo>
                </PolicyBox>
              </PolicyWrap>
            </FooterBox>
        </FooterWarp>
        </>
    )
}

const FooterWarp = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 46.7rem;
  transition: all 2s ease;
  background: #111;
  border-top: 1px rgba(225, 225, 225, 0.3) solid;
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
  align-items: center;
  justify-content: center;
`

const InformationWrap = styled.div`
  margin: auto 5vw;
  width: 35rem;
  transition: all 2s ease;
`

const Logo = styled.img`
  width: 12rem;
  float: left;
  transition: all 2s ease;
`

const Information = styled.p`
  margin: 5.2rem auto 3.2rem auto;
  font-size: 1.4rem;
  font-family: 'Pretendard Variable', Pretendard;
  font-weight: 400;
  line-height: 2.1rem;
  transition: all 2s ease;
  color: #fff;
  float: left;
  text-align: left;
  opacity: 0.6;
`

const Button = styled.button`
  display: flex;
  width: 30.4rem;
  height: 5.6rem;
  margin: 2rem 0;
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
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 12rem;
    transition: all 2s ease;
  }
  & img {
    width: 1.4rem;
    transition: all 2s ease;
  }
`

const Copyright = styled.p`
  font-family: 'Pretendard';
  font-size: 1.4rem;
  transition: all 2s ease;
  font-weight: 400;
  color: #fff;
  opacity: 0.3;
  float: left;
`

const PolicyWrap = styled.div`
  margin: auto 3vw;
  width: 35rem;
  transition: all 2s ease;
`

const PolicyBox = styled.div`
  display: flex;
  color: #fff;
  opacity: 0.6;
  justify-content: left;
  transition: all 2s ease;
  align-items: center;
`

const PolicyTitle = styled.h3`
  width: 10rem;
  text-align: left;
  font-family: 'Pretendard';
  transition: all 2s ease;
  font-weight: 500;
  font-size: 1.4rem;
`

const PolicyInfo = styled.p`
  font-size: 1.4rem;
  text-align: left;
  font-family: 'Pretendard';
  transition: all 2s ease;
  font-weight: 400;
`

export default FooterTab