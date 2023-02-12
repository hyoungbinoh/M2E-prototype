import React from "react";
import {useState, useRef, useEffect, Suspense} from "react";
import {Canvas} from "@react-three/fiber"
import styled from "styled-components";

import WalkerShoe from "../component/WalkerShoe";
import JoggerShoe from "../component/JoggerShoe";
import RunnerShoe from "../component/RunnerShoe";
import AllRounderShoe from "../component/AllRounerderShoe";

const Slide = () => {
    const slideRef = useRef(null);
    const [currentImg, setCurrentImg] = useState(0);
    const IMG_WIDTH = 54;
    const slideRange = currentImg * IMG_WIDTH;

    useEffect(() => {
        currentImg === 0 ? slideRef.current.style.transition = "" : slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${slideRange}rem)`;
        const timer =  setInterval(() => {
            setCurrentImg(prev => (prev === 4 ? 0 : prev));
        }, 500)
        return () => {
            clearInterval(timer);
        }
    }, [currentImg]
    );

    const nextSlide = () => {
        if (currentImg === 4) return;
        setCurrentImg(currentImg + 1);
    };



    return(
        <Body>
            <Container>
                <Wrapper ref={slideRef} >   
                    <InfoBox>
                        <CanvasWrap>
                            <Canvas>
                                <Suspense fallback={null}>
                                    <WalkerShoe/>
                                </Suspense>
                            </Canvas>
                        </CanvasWrap>
                        <Infomation>
                            <ShoeType src="img/Walker.svg" alt="Walker" style={{width: "10.5rem"}}/>
                            <ShoeDistance src="img/1-5km.svg" alt="1-5km/h" style={{width: "12.3rem"}}/>
                        </Infomation>
                    </InfoBox>
                    <InfoBox>
                        <CanvasWrap >
                            <Canvas>
                                <Suspense fallback={null}>
                                    <JoggerShoe/>
                                </Suspense>
                            </Canvas>
                        </CanvasWrap>
                        <Infomation>
                            <JoggerType src="img/Jogger.svg" alt="Jogger" style={{width: "12.6rem"}}/>
                            <JoggerDistance src="img/5-10km.svg" alt="5-10km/h" style={{width: "13.7rem"}}/>
                        </Infomation>
                    </InfoBox>
                    <InfoBox>
                        <CanvasWrap >
                            <Canvas>
                                <Suspense fallback={null}>
                                    <RunnerShoe/>
                                </Suspense>
                            </Canvas>
                        </CanvasWrap>
                        <Infomation>
                            <ShoeType src="img/Runner.svg" alt="Runner" style={{width: "10.9rem"}}/>
                            <ShoeDistance src="img/8-18km.svg" alt="8-18km/h" style={{width: "13.8rem"}}/>
                        </Infomation>
                    </InfoBox>
                    <InfoBox>
                        <CanvasWrap >
                            <Canvas>
                                <Suspense fallback={null}>
                                    <AllRounderShoe/>
                                </Suspense>
                            </Canvas>
                        </CanvasWrap>
                        <Infomation>
                            <ShoeType src="img/AllRounder.svg" alt="AllRounder" style={{width: "18.5rem"}}/>
                            <ShoeDistance src="img/1-18km.svg" alt="1-18km/h" style={{width: "13.3rem"}}/>
                        </Infomation>
                    </InfoBox>
                    <InfoBox>
                    <CanvasWrap>
                        <Canvas>
                            <Suspense fallback={null}>
                                <WalkerShoe/>
                            </Suspense>
                        </Canvas>
                    </CanvasWrap>
                        <Infomation>
                            <ShoeType src="img/Walker.svg" alt="Walker" style={{width: "10.5rem"}}/>
                            <ShoeDistance src="img/1-5km.svg" alt="1-5km/h" style={{width: "12.3rem"}}/>
                        </Infomation>
                    </InfoBox>
                    <InfoBox>
                        <CanvasWrap >
                            <Canvas>
                                <Suspense fallback={null}>
                                    <JoggerShoe/>
                                </Suspense>
                            </Canvas>
                        </CanvasWrap>
                        <Infomation>
                            <JoggerType src="img/Jogger.svg" alt="Jogger" style={{width: "12.6rem"}}/>
                            <JoggerDistance src="img/5-10km.svg" alt="5-10km/h" style={{width: "13.7rem"}}/>
                        </Infomation>
                    </InfoBox>
                    <InfoBox>
                        <CanvasWrap >
                            <Canvas>
                                <Suspense fallback={null}>
                                    <RunnerShoe/>
                                </Suspense>
                            </Canvas>
                        </CanvasWrap>
                        <Infomation>
                            <ShoeType src="img/Runner.svg" alt="Runner"  style={{width: "10.9rem"}}/>
                            <ShoeDistance src="img/8-18km.svg" alt="8-18km/h" style={{width: "13.8rem"}}/>
                        </Infomation>
                    </InfoBox>
                </Wrapper> 
            </Container>
            <ButtonContainer>
                <Button onClick={nextSlide}><img src="img/SlideNarrow.svg" alt="SlideNarrow"/></Button>
            </ButtonContainer>
        </Body>    
    )

}

const Body = styled.div`
    display: flex;
`

const Container = styled.div`
    position: relative;
    float: right;
    margin: auto;
    width: 162rem;
    height: 55rem;
    overflow: hidden;
    
`

const Wrapper = styled.div`
    display: flex;
`

const CanvasWrap = styled.div`
    height: 44rem;
    margin-bottom: -29rem;
    overflow: visible;
    :hover {
        cursor: all-scroll;
    };
`

const InfoBox = styled.div`
    width: 44rem;
    margin: 0px 5rem;
`

const Infomation = styled.div`
    width: 44rem;
    height: 25.4rem;
    border-image: linear-gradient(to right, #FC46B0, #53C9EC) 1;
    border-width: 3px;
    border-style: solid;
    color: #fff;
`

const ShoeType = styled.img`
    display: block;
    margin: 12.6rem auto 1rem auto;    
`

const ShoeDistance = styled.img`
    display: block;
    margin: 1rem auto 4.5rem auto;
`

const JoggerType = styled.img`
    display: block;
    margin: 12.3rem auto 0.5rem auto;    
`

const JoggerDistance = styled.img`
    display: block;
    margin: 0.5rem auto 4.5rem auto;
`

const ButtonContainer = styled.div`
    position: relative;
    margin: auto;
    width: 440px;
    height: 55rem;
`

const Button = styled.button`
    margin-left: 5rem;
    width: 6rem;
    height: 12rem;
    color: #fff;
    font-size: 4rem;
    text-align: center;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 28rem;
    transform: translateY(-50%);
    background: transparent;
    border: 0;
    outline: 0;
    border-radius: 100%;
    z-index: 5;
::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 3px;
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
};
:hover {
    cursor: pointer;
};
& img{
    margin-top: 1.3rem;
    width: 1.7rem;
}
`

export default Slide;