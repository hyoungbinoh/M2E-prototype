import React from "react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const BackgroundMo1 = () => {
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

    return (
        <Container>
            <Rock2 src="img/Rock2.svg" alt="Rock2" style={position < viewport ? { opacity: "1", top: "5.55vh" } : { opacity: "0", top: "110vh" }} />
            <Stones1 src="img/Stones1.svg" alt="Stones" style={position < viewport ? { opacity: "1", top: "54.5vh" } : { opacity: "0", top: "60vh" }} />
            <Rock11 src="img/Rock11.svg" alt="Rock11" style={position < viewport ? { opacity: "1", top: "72vh" } : { opacity: "0", top: "110vh" }} />
            <Rock12 src="img/Rock18.svg" alt="Rock18" style={position < viewport ? { top: "97.7vh" } : { top: "102.7vh" }} />
            <Rock13 src="img/Rock13.svg" alt="Rock13" style={position < viewport ? { top: "102vh" } : { top: "105vh" }} />
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  @supports (-webkit-touch-callout: none) { 
  height: -webkit-fill-available;
}
`

const rock2Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 5.55vh;
}
`

const Rock2 = styled.img`
width: 106.84px;
position: absolute;
left: calc(50% + 60px);
top: 5.55vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock2Animation} 2s ease;
z-index: 1;
`

const stones1Animation = keyframes`
from {
    top: 60vh;
    opacity: 0;
}

to {
    top: 54.5vh;
    opacity: 1;
}
`

const Stones1 = styled.img`
width: 374.4px;
position: absolute;
left: calc(50% + 120px);
top: 54.5vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
animation: ${stones1Animation} 2s ease;  
z-index: 1;
`

const rock11Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 72vh;
}
`

const Rock11 = styled.img`
width: 58.15px;
position: absolute;
left: calc(50% - 105px);
top: 72vh;
transform: translate(-50%, -50%); 
transition: all 2s ease;
animation: ${rock11Animation} 2s ease;
z-index: 1;
`

const rock12Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 97.7vh;
}
`

const Rock12 = styled.img`
position: absolute;
width: 168.59px;
left: calc(50% - 95px);
top: 97.7vh; 
transform: translate(-50%, -50%);
transition: all 2s ease; 
animation: ${rock12Animation} 2s ease;
z-index: 1;
`

const rock13Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 102vh;
}
`

const Rock13 = styled.img`
position: absolute;
width: 66.68px;
left: calc(50% + 145px);
top: 102vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock13Animation} 2s ease;
z-index: 1;
`


export default BackgroundMo1
