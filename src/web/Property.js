import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react"

const Property = () => {
    const [position, setPosition] = useState(0);

    function onScroll() {
        setPosition(window.scrollY);
    }

    const viewport = window.innerHeight

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const [currentClick, setCurrentClick] = useState(null);
    const [prevClick, setPrevClick] = useState(null);

    const GetClick = (e) => {
        setCurrentClick(e.target.id);
    }

    let shoeProperty;

    useEffect(
        (e) => {
            if (currentClick !== null) {
                var current = document.getElementById(currentClick);
                current.style.opacity = "1";
            }
            if (prevClick !== null) {
                var prev = document.getElementById(prevClick);
                prev.style.opacity = "0.5";
            }
            setPrevClick(currentClick);
        },
        [currentClick]
    );

    if (currentClick === "water") {
        shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/WaterEffect.mp4" type="video/mp4" />
    } else if (currentClick === "thunder") {
        shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/ThunderEffect.mp4" type="video/mp4" />
    } else if (currentClick === "fire") {
        shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/FireEffect.mp4" type="video/mp4" />
    } else if (currentClick === "ground") {
        shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/GroundEffect.mp4" type="video/mp4" />
    } else { shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/FireEffect.mp4" type="video/mp4" /> }


    return (
        <>
            <Rock1 src="img/Rock1.png" alt="Rock" />
            <Shoe style={position >= viewport * 2 - 500 & position < viewport * 3 - 10 ? { opacity: "1" } : { opacity: "0" }}>
                {shoeProperty}
            </Shoe>
            <Rock2 src="img/Rock22.svg" alt="Rock22" />
            <Water style={position >= viewport * 2 - 500 && position < viewport * 3 - 10 ? { top: "calc(50% - 43.5rem)", opacity: "0.5" } : { top: "calc(50% - 40.5rem)", opacity: "0" }}>
                <WaterTitle src="img/Water.svg" alt="Water" />
                <button onClick={GetClick}>
                    <img id="water" src="img/WaterProperty.svg" alt="WaterProperty" />
                </button>
            </Water>
            <Rock3 src="img/Rock22.svg" alt="Rock22" />
            <Thunder style={position >= viewport * 2 - 500 && position < viewport * 3 - 10 ? { top: "calc(50% + 13rem)", opacity: "0.5" } : { top: "calc(50% + 16rem)", opacity: "0" }}>
                <ThunderTitle src="img/Thunder.svg" alt="Thunder" />
                <button onClick={GetClick}>
                    <img id="thunder" src="img/ThunderProperty.svg" alt="ThunderProperty" />
                </button>
            </Thunder>
            <Rock4 src="img/Rock22.svg" alt="Rock22" />
            <Fire style={position >= viewport * 2 - 500 && position < viewport * 3 - 10 ? { top: "calc(50% + 16rem)", opacity: "0.5" } : { top: "calc(50% + 19rem)", opacity: "0" }}>
                <FireTitle src="img/Fire.svg" alt="Fire" />
                <button onClick={GetClick}>
                    <img id="fire" src="img/FireProperty.svg" alt="FireProperty" />
                </button>
            </Fire>
            <Rock5 src="img/Rock22.svg" alt="Rock22" />
            <Ground style={position >= viewport * 2 - 500 && position < viewport * 3 - 10 ? { top: "calc(50% - 32rem)", opacity: "0.5" } : { top: "calc(50% - 29rem)", opacity: "0" }}>
                <GroundTitle src="img/Ground.svg" alt="Ground" />
                <button onClick={GetClick}>
                    <img id="ground" src="img/GroundProperty.svg" alt="GroundProperty" />
                </button>
            </Ground>
        </>
    );

};

const ShoeProperty = styled.video`
    transform: translate(-50%, -50%);
    width: 96rem;
    transition: all 2s ease;
    position: absolute;
`

const Rock1 = styled.img`
    position: absolute;
    top: calc(50% + 4.1rem);
    left: calc(50% + 6.9rem);
    width: 87.5rem;
    transform: translate(-50%, -50%);
    transition: all 2s ease;
    z-index: -1;
`

const Shoe = styled.div`
    position: absolute;
    top: calc(50% - 21.7rem);
    left: calc(50% - 10.2rem);
    transform: translate(-50%, -50%);
    transition: all 2s ease;
    z-index: -1;
`

const Rock2 = styled.img`
    position: absolute;
    width: 30.5rem;
    top: calc(50% - 24rem);
    left: calc(50% + 19rem);
    transform: translate(-50%, -50%);
    z-index: -3;
    transition: all 2s ease;
`

const Water = styled.div`
    position: absolute;
    top: calc(50% - 43.5rem);
    left: calc(50% + 12.5rem);
    transform: translate(-50%, -50%);
    opacity: 0.5;
    z-index: 6;
    transition: all 2s ease;

    & button{
        position: absolute;
        background-color: transparent;
        outline: none;
        border: none;
    }
    & button:hover {
        cursor: pointer;
    }
    & button > img {
        width: 18.1rem;
        transition: all 2s ease;
    }
`

const WaterTitle = styled.img`
    position: absolute;
    top: 3.5rem;
    left: 18.5rem;
    width: 10rem;
    transition: all 2s ease;
`

const Rock3 = styled.img`
    position: absolute;
    width: 30.5rem;
    top: calc(50% + 32rem);
    left: calc(50% + 38.5rem);
    transform: translate(-50%, -50%);
    transition: all 2s ease;
`

const Thunder = styled.div`
    position: absolute;
    top: calc(50% + 13rem);
    left: calc(50% + 31.5rem);
    transform: translate(-50%, -50%);
    transition: all 2s ease;
    opacity: 0.5;
    z-index: 1;

    & button{
        position: absolute;
        background-color: transparent;
        outline: none;
        border: none;
    }

    & button:hover {
        cursor: pointer;
    }

    & button > img {
        width: 18.1rem;
        transition: all 2s ease;
    }
`

const ThunderTitle = styled.img`
    position: absolute;
    width: 14.3rem;
    top: 0rem;
    left: 16.5rem;
    transition: all 2s ease;
`

const Rock4 = styled.img`
    position: absolute;
    width: 30.5rem;
    top: calc(50% + 36rem);
    left: calc(50% - 23.5rem);
    transform: translate(-50%, -50%);
    transition: all 2s ease;
`

const Fire = styled.div`
    position: absolute;
    top: calc(50% + 16rem);
    left: calc(50% - 30rem);
    transform: translate(-50%, -50%);
    transition: all 2s ease;
    opacity: 0.5;
    z-index: 1;

    & button{
        position: absolute;
        background-color: transparent;
        outline: none;
        border: none;
    }
    
    & button:hover {
        cursor: pointer;
    }
    
    & button > img {
        width: 18.1rem;
        transition: all 2s ease;
    }
`

const FireTitle = styled.img`
    position: absolute;
    width: 7rem;
    top: 3rem;
    left: -7rem;
    transition: all 2s ease;
`

const Rock5 = styled.img`
    position: absolute;
    width: 30.5rem;
    top: calc(50% - 12rem);
    left: calc(50% - 45.5rem);
    transform: translate(-50%, -50%);
    transition: all 2s ease;
    z-index: -3;
`

const Ground = styled.div`
    position: absolute;
    top: calc(50% - 32rem);
    left: calc(50% - 52rem);
    transform: translate(-50%, -50%);
    transition: all 2s ease;
    opacity: 0.5;
    z-index: 1;

    & button{
        position: absolute;
        background-color: transparent;
        outline: none;
        border: none;
    }

    & button:hover {
        cursor: pointer;
    }

    & button > img {
        width: 18.1rem;
        transition: all 2s ease;
    }
`

const GroundTitle = styled.img`
    position: absolute;
    width: 12.5rem;
    top: -3rem;
    left: -6rem;
    transition: all 2s ease;
`

export default Property