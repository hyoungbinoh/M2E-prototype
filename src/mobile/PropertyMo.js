import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const PropertyMo = () => {
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
        shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/WaterEffectMo.mp4" type="video/mp4" />
    } else if (currentClick === "thunder") {
        shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/ThunderEffectMo.mp4" type="video/mp4" />
    } else if (currentClick === "fire") {
        shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/FireEffectMo.mp4" type="video/mp4" />
    } else if (currentClick === "ground") {
        shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/GroundEffectMo.mp4" type="video/mp4" />
    } else { shoeProperty = <ShoeProperty autoPlay loop muted playsInline src="img/FireEffectMo.mp4" type="video/mp4" /> }


    return (
        <>
            <PropertyBox style={{ marginTop: "20px" }}>
                <Water>
                    <button onClick={GetClick}>
                        <img id="water" src="img/WaterProperty.svg" alt="WaterProperty" />
                    </button>
                    <WaterTitle src="img/Water.svg" alt="Water" />
                </Water>
                <Fire>
                    <button onClick={GetClick}>
                        <img id="fire" src="img/FireProperty.svg" alt="FireProperty" />
                    </button>
                    <FireTitle src="img/Fire.svg" alt="Fire" />
                </Fire>
            </PropertyBox>
            <PropertyBox>
                <Thunder>
                    <button onClick={GetClick}>
                        <img id="thunder" src="img/ThunderProperty.svg" alt="ThunderProperty" />
                    </button>
                    <ThunderTitle src="img/Thunder.svg" alt="Thunder" />
                </Thunder>
                <Ground>
                    <button onClick={GetClick}>
                        <img id="ground" src="img/GroundProperty.svg" alt="GroundProperty" />
                    </button>
                    <GroundTitle src="img/Ground.svg" alt="Ground" />
                </Ground>
            </PropertyBox>
            <ShoeBox>
                <Rock1 src="img/Rock1.png" alt="Rock" />
                <Shoe>
                    {shoeProperty}
                </Shoe>
                <Gradient />
            </ShoeBox>
        </>
    );

};



const PropertyBox = styled.div`
    display: flex;
    margin: auto;
    width: 220px;
    align-items: center;
    justify-content: center;
`

const Water = styled.div`
    opacity: 0.5;
    z-index: 6;
    transition: all 2s ease;
    text-align: center;
    margin: 10px;

    & button{
        background-color: transparent;
        outline: none;
        border: none;
    }
    & button:hover {
        cursor: pointer;
    }
    & button > img {
        width: 90px;
        transition: all 2s ease;
    }
`

const WaterTitle = styled.img`
    top: 1rem;
    left: 16rem;
    width: 48px;
    transition: all 2s ease;
`

const Thunder = styled.div`
    transition: all 2s ease;
    opacity: 0.5;
    z-index: 1;
    text-align: center;
    margin: 10px;

    & button{
        background-color: transparent;
        outline: none;
        border: none;
    }

    & button:hover {
        cursor: pointer;
    }

    & button > img {
        width: 90px;
        transition: all 2s ease;
    }
`

const ThunderTitle = styled.img`
    width: 69px;
    top: -2rem;
    left: 16rem;
    transition: all 2s ease;
`

const Fire = styled.div`
    transition: all 2s ease;
    opacity: 0.5;
    z-index: 1;
    text-align: center;
    margin: 10px;

    & button{
        background-color: transparent;
        outline: none;
        border: none;
    }
    
    & button:hover {
        cursor: pointer;
    }
    
    & button > img {
        width: 90px;
        transition: all 2s ease;
    }
`

const FireTitle = styled.img`
    width: 34px;
    top: 3rem;
    left: -7rem;
    transition: all 2s ease;
`

const Ground = styled.div`
    transition: all 2s ease;
    opacity: 0.5;
    z-index: 1;
    text-align: center;
    margin: 10px;

    & button{
        background-color: transparent;
        outline: none;
        border: none;
    }

    & button:hover {
        cursor: pointer;
    }

    & button > img {
        width: 90px;
        transition: all 2s ease;
    }
`

const GroundTitle = styled.img`
    width: 61px;
    top: -3rem;
    left: -6rem;
    transition: all 2s ease;
`

const ShoeBox = styled.div`
    width: 375px;
    height: 300px;
    margin: auto;
    position: relative;
    margin-bottom: 50px;
`

const ShoeProperty = styled.video`
    width: 345px;
    transition: all 2s ease;
`

const Shoe = styled.div`
    position: absolute;
    top: 30.5%;
    left: 36%;
    transform: translate(-50%, -50%);
    transition: all 2s ease;
    z-index: 1;
   
`

const Rock1 = styled.img`
    position: absolute;
    top: 61.2%;
    left: 52.6%;
    transform: translate(-50%, -50%);
    width: 316px;
    transition: all 2s ease;
    z-index: 1;
`

const Gradient = styled.div`
    position: absolute;
    top: 14%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 425px;
    height: 100px;
    background: linear-gradient(rgb(0, 0, 0, 1), rgba(17, 17, 17, 0));
    z-index: 2;
`

export default PropertyMo