import React from "react";
import styled from "styled-components";

const RoadmapTab = () => {
    return(
        <>
            <Title>Roadmap</Title>
            <RoadmapBox>
            <RoadmapWrap>
            <RoadmapWrapTop>
                <RoadmapTop>
                    <h3>Q4.2022</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>UI/UX Design</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Game Design</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Launched a Website and social networks</p></RoadmapInfo>
                    <RoadmapTopSpot/>
                </RoadmapTop>
                <RoadmapTop>
                    <h3>Q2.2023</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>In-app marketplace</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Public round of token sale on launchpads and Whitelists</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Token listing on DEX/CEX</p></RoadmapInfo>
                    <RoadmapTopSpot/>
                </RoadmapTop>
                <RoadmapTop>
                    <h3>Q4.2023</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>Launching</p></RoadmapInfo>
                    <RoadmapTopSpot/>
                </RoadmapTop>
                <RoadmapTop>
                    <h3>Q2.2024</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>AR Service open</p></RoadmapInfo>
                    <RoadmapTopSpot/>
                </RoadmapTop>
            </RoadmapWrapTop>
            <RoadmapLine/>
            <RoadmapWrapBottom>
                <RoadmapBottom>
                    <h3>Q1.2023</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>marketplace Launching</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Genesis NFT Presale</p></RoadmapInfo>
                    <RoadmapBottomSpot/>
                </RoadmapBottom>
                <RoadmapBottom>
                    <h3>Q3.2023</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>Mobile App Launching</p></RoadmapInfo>
                    <RoadmapInfo><p>⦁</p><p>Beta service</p></RoadmapInfo>
                    <RoadmapBottomSpot/>
                </RoadmapBottom>
                <RoadmapBottom>
                    <h3>Q1.2024</h3>
                    <hr/>
                    <RoadmapInfo><p>⦁</p><p>Game play update</p></RoadmapInfo>
                    <RoadmapBottomSpot/>
                </RoadmapBottom>
            </RoadmapWrapBottom>
            </RoadmapWrap>
            </RoadmapBox>
        </>
    );
};

const Title = styled.h2`
    background: linear-gradient(to right, #fff, #efc3fe);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 5rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    margin:  0 auto 10px auto;
    transition: all 2s ease;
`

const RoadmapBox = styled.div`
    position: relative;
    width: 100%;
    height: 85rem;
    transition: all 2s ease;
`

const RoadmapWrap = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
`

const RoadmapWrapTop = styled.div`
    position: absolute;
    top: 50%;
    left: calc(50% + 13.5rem);
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
        width: 26.25rem;
        height: 1.5px;
        transition: all 2s ease;
    }
`

const RoadmapTop = styled.div`
    margin: 0;
    height: 22.5rem;
    width: 26.25rem;
    text-align: left;
    position: relative;
    transition: all 2s ease;

    & h3 {
        margin: 0px 0px 12px 15px; 
        color: #fc46b0;
        font-size: 2.25rem;
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
        margin: 1rem 0px 0px 10px;
        font-size: 1.5rem;
        font-family: 'Pretendard Variable', Pretendard;
        font-weight: 600;
        opacity: 0.8;
        transition: all 2s ease;
        line-height: 140%;
    }
` 

const RoadmapTopSpot = styled.div`
    top: 3.2rem;
    left: -10px;
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
    top: 3.8rem;
    left: 50%;
    transform: translateX(-50%);
    margin: 0px;
    background: #461241;
    border: 0;
    width: 8px;
    height: 67.8rem;
    transition: all 2s ease;
`

const RoadmapWrapBottom = styled.div`
    display: flex;
    position: absolute;
    top: 52%;
    left: calc(50% - 13.5rem);
    transform: translate(-50%, -50%);
    z-index: 2;
    flex-direction: column;
    align-items: center;
    transition: all 2s ease;
  
    & hr {
        margin: 0px;
        background: #9c3293;
        border: 0;
        width: 26.25rem;
        height: 1.5px;
        transition: all 2s ease;
    }
`

const RoadmapBottom = styled.div`
    position: relative;
    margin: 0;
    height: 22.5rem;
    width: 26.25rem;
    text-align: left;
    transition: all 2s ease;

    & h3 {
        margin: 0px 0px 12px 5px; 
        color: #fc46b0;
        font-size: 2.25rem;
        font-family: 'Pretendard Variable', Pretendard;
        font-weight: 900;
        transition: all 2s ease;
    }
`

const RoadmapBottomSpot = styled.div`
    top: 3.2rem;
    right: -10px;
    width: 14px;
    height: 14px;
    border-radius: 23px;
    background-color: #fc46b0;
    position: absolute;
    box-shadow: 0 0 2rem 2rem #fc46b046;
    transition: all 2s ease;
`

export default RoadmapTab;