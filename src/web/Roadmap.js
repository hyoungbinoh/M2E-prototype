import React from "react";
import styled from "styled-components";

const Roadmap = () => {
  return (
    <div>
      <Title>Roadmap</Title>
      <RoadmapWrapTop>
        <hr />
        <RoadmapTop>
          <h3>Q4.2022</h3>
          <RoadmapInfo><p>⦁</p><p>UI/UX Design</p></RoadmapInfo>
          <RoadmapInfo><p>⦁</p><p>Game Design</p></RoadmapInfo>
          <RoadmapInfo><p>⦁</p><p>Launched a Website and social networks</p></RoadmapInfo>
          <RoadmapTopSpot />
        </RoadmapTop>
        <hr />
        <RoadmapTop>
          <h3>Q2.2023</h3>
          <RoadmapInfo><p>⦁</p><p>In-app marketplace</p></RoadmapInfo>
          <RoadmapInfo><p>⦁</p><p>Public round of token sale on launchpads and Whitelists</p></RoadmapInfo>
          <RoadmapInfo><p>⦁</p><p>Token listing on DEX/CEX</p></RoadmapInfo>
          <RoadmapTopSpot />
        </RoadmapTop>
        <hr />
        <RoadmapTop>
          <h3>Q4.2023</h3>
          <RoadmapInfo><p>⦁</p><p>Launching</p></RoadmapInfo>
          <RoadmapTopSpot />
        </RoadmapTop>
        <hr />
        <RoadmapTop>
          <h3>Q2.2024</h3>
          <RoadmapInfo><p>⦁</p><p>AR Service open</p></RoadmapInfo>
          <RoadmapTopSpot />
        </RoadmapTop>
      </RoadmapWrapTop>
      <RoadmapLine />
      <RoadmapWrapBottom>
        <hr style={{ marginLeft: "17.5rem" }} />
        <RoadmapBottom>
          <h3>Q1.2023</h3>
          <RoadmapInfo><p>⦁</p><p>marketplace Launching</p></RoadmapInfo>
          <RoadmapInfo><p>⦁</p><p>Genesis NFT Presale</p></RoadmapInfo>
          <RoadmapBottomSpot />
        </RoadmapBottom>
        <hr />
        <RoadmapBottom>
          <h3>Q3.2023</h3>
          <RoadmapInfo><p>⦁</p><p>Mobile App Launching</p></RoadmapInfo>
          <RoadmapInfo><p>⦁</p><p>Beta service</p></RoadmapInfo>
          <RoadmapBottomSpot />
        </RoadmapBottom>
        <hr />
        <RoadmapBottom>
          <h3>Q1.2024</h3>
          <RoadmapInfo><p>⦁</p><p>Game play update</p></RoadmapInfo>
          <RoadmapBottomSpot />
        </RoadmapBottom>
      </RoadmapWrapBottom>
    </div>
  );
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

const RoadmapWrapTop = styled.div`
  margin-top: 10rem;
  display: flex;
  transition: all 2s ease;
  & hr {
    bottom: 0;
    margin: 2rem 0px 0px 0px;
    background: #9c3293;
    border: 0;
    height: 28rem;
    width: 0.2rem;
    transition: all 2s ease;
  }
`

const RoadmapTop = styled.div`
  margin: 0;
  height: 30rem;
  width: 35rem;
  text-align: left;
  position: relative;
  transition: all 2s ease;

  & h3 {
    margin: 0px 0px 1rem 2rem; 
    color: #fc46b0;
    font-size: 3rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 900;
    transition: all 2s ease;
  }
`

const RoadmapInfo = styled.div`
  display: flex;
  margin: 0px 3rem 0px 2rem;
  transition: all 2s ease;

  & p {
    color: #fff;
    margin: 0.5rem 0rem 0.5rem 2rem;
    font-size: 2rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 600;
    opacity: 0.8;
    transition: all 2s ease;
  }
`

const RoadmapTopSpot = styled.div`
  left: -4%;
  bottom: -6%;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 23px;
  background-color: #fc46b0;
  position: absolute;
  box-shadow: 0 0 2rem 2rem #fc46b046;
  transition: all 2s ease;
`

const RoadmapLine = styled.hr`
  margin: 0px;
  background: #461241;
  border: 0;
  height: 1rem;
  transition: all 2s ease;
`

const RoadmapWrapBottom = styled.div`
  display: flex;
  
  & hr {
    margin: 0px;
    background: #9c3293;
    border: 0;
    height: 28rem;
    width: 0.2rem;
    transition: all 2s ease;
  }
`

const RoadmapBottom = styled.div`
  position: relative;
  margin: 0;
  height: 30rem;
  width: 35rem;
  text-align: left;
  transition: all 2s ease;

  & h3 {
    margin: 15rem 0px 0px 2rem; 
    color: #fc46b0;
    font-size: 3rem;
    font-family: 'Pretendard Variable', Pretendard;
    font-weight: 900;
    transition: all 2s ease;
  }
`

const RoadmapBottomSpot = styled.div`
  left: -4%;
  top: -6%;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 23px;
  background-color: #fc46b0;
  position: absolute;
  box-shadow: 0 0 2rem 2rem #fc46b046;
  transition: all 2s ease;
`

export default Roadmap;