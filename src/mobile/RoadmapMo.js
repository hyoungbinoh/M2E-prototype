import React from "react";
import styled from "styled-components";

const RoadmapMo = () => {
    return(
        <div>
            <Title>Roadmap</Title>
            <RoadmapBox>
            <RoadmapWrap>
            <RoadmapWrapTop>
                <RoadmapTop style={{height: "276px"}}>
                    <h3>Q4.2022</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>UI/UX Design</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Game Design</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Launched a Website and social networks</p></RoadmapInfo>
                    <RoadmapTopSpot style={{top: "9%"}}/>
                </RoadmapTop>
                <RoadmapTop style={{height: "310px"}}>
                    <h3>Q2.2023</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>In-app marketplace</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Public round of token sale on launchpads and Whitelists</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Token listing on DEX/CEX</p></RoadmapInfo>
                    <RoadmapTopSpot style={{top: "8%"}}/>
                </RoadmapTop>
                <RoadmapTop style={{height: "190px"}}>
                    <h3>Q4.2023</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>Launching</p></RoadmapInfo>
                    <RoadmapTopSpot style={{top: "13%"}}/>
                </RoadmapTop>
                <RoadmapTop style={{height: "88px"}}>
                    <h3>Q2.2024</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>AR Service open</p></RoadmapInfo>
                    <RoadmapTopSpot style={{top: "28%"}}/>
                </RoadmapTop>
            </RoadmapWrapTop>
            <RoadmapLine/>
            <RoadmapWrapBottom>
                <RoadmapBottom style={{height: "310px"}}>
                    <h3>Q1.2023</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>marketplace Launching</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Genesis NFT Presale</p></RoadmapInfo>
                    <RoadmapBottomSpot style={{top: "8%"}}/>
                </RoadmapBottom>
                <RoadmapBottom  style={{height: "213px"}}>
                    <h3>Q3.2023</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>Mobile App Launching</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Beta service</p></RoadmapInfo>
                    <RoadmapBottomSpot style={{top: "12%"}}/>
                </RoadmapBottom>
                <RoadmapBottom  style={{height: "88px"}}>
                    <h3>Q1.2024</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>Game play update</p></RoadmapInfo>
                    <RoadmapBottomSpot style={{top: "28%"}}/>
                </RoadmapBottom>
            </RoadmapWrapBottom>
            </RoadmapWrap>
            </RoadmapBox>
        </div>
    );
};

const Title = styled.h2`
    background: linear-gradient(to right, #fff, #efc3fe);
    background-clip: text;
      -webkit-background-clip: text;
    color: transparent;
    font-size: 30px;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    margin:  50px auto 10px auto;
    transition: all 2s ease;
`

const RoadmapBox = styled.div`
    position: relative;
    width: 100%;
    height: 880px;
`

const RoadmapWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 339px;
    height: 880px;
    margin: 0px auto 50px auto;
    display: flex;
    /* justify-content: center; */
`

const RoadmapWrapTop = styled.div`
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    z-index: 2;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    transition: all 2s ease;
    & hr {
        margin: 0px;
        background: #9c3293;
        border: 0;
        width: 170px;
        height: 1.5px;
        transition: all 2s ease;
    }
`

const RoadmapTop = styled.div`
    margin: 0;
    width: 170px;
    text-align: left;
    position: relative;
    transition: all 2s ease;

    & h3 {
        margin: 0px 0px 12px 15px; 
        color: #fc46b0;
        font-size: 16px;
        font-family: 'Pretendard Variable', Pretendard;
        font-weight: 900;
        transition: all 2s ease;
    }
`

const RoadmapInfo = styled.div`
    display: flex;
    transition: all 2s ease;

    & p {
        color: #fff;
        margin: 13px 0px 0px 10px;
        font-size: 12px;
        font-family: 'Pretendard Variable', Pretendard;
        font-weight: 600;
        opacity: 0.8;
        transition: all 2s ease;
        line-height: 140%;
    }
` 

const RoadmapTopSpot = styled.div`
    left: -4%;
    width: 14px;
    height: 14px;
    border-radius: 23px;
    background-color: #fc46b0;
    position: absolute;
    box-shadow: 0 0 2rem 2rem #fc46b046;
    transition: all 2s ease;
`

const RoadmapLine = styled.hr`
    position: absolute;
    top: 51%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0px;
    background: #461241;
    border: 0;
    width: 8px;
    height: 775px;
    transition: all 2s ease;
`

const RoadmapWrapBottom = styled.div`
    display: flex;
    position: absolute;
    top: 56%;
    left: 25%;
    transform: translate(-50%, -50%);
    z-index: 2;
    flex-direction: column;
    align-items: center;
  
    & hr {
        margin: 0px;
        background: #9c3293;
        border: 0;
        width: 170px;
        height: 1.5px;
        transition: all 2s ease;
    }
`

const RoadmapBottom = styled.div`
    position: relative;
    margin: 0;
    width: 170px;
    text-align: left;
    transition: all 2s ease;

    & h3 {
        margin: 0px 0px 12px 5px; 
        color: #fc46b0;
        font-size: 16px;
        font-family: 'Pretendard Variable', Pretendard;
        font-weight: 900;
        transition: all 2s ease;
    }
`

const RoadmapBottomSpot = styled.div`
    right:-4%;
    width: 14px;
    height: 14px;
    border-radius: 23px;
    background-color: #fc46b0;
    position: absolute;
    box-shadow: 0 0 2rem 2rem #fc46b046;
    transition: all 2s ease;
`

export default RoadmapMo;