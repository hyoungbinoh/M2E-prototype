import React from "react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const BackgroundMo2 = () => {
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
        <>
            {/* Type Background */}
            <Rock16 src="img/Rock16.svg" alt="Rock16" />
            <Rock6 src="img/Rock6.svg" alt="Rock6" />
            <Rock13 src="img/Rock13.svg" alt="Rock13" />
            <Rock8 src="img/Rock8.svg" alt="Rock8" />
            <Path1 width={425} height={892} viewBox="0 0 352 892" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    style={position >= viewport - 500 && position < viewport + 1137 ? { strokeDashoffset: 2285 } : { strokeDashoffset: 4150 }}
                    opacity={0.3}
                    d="M399.65 27.0551C384.205 4.89045 359.235 -3.67993 336.855 2.55086C313.672 9.00903 296.441 31.8145 291.215 61.2106C286.182 89.5867 292.267 122.068 310.314 141.068C327.195 158.84 355.396 164.519 369.996 139.529C382.324 118.423 379.771 84.0645 363.105 67.8093C346.439 51.5541 321.756 55.6176 306.163 72.0367C286.495 92.7608 286.462 128.61 291.348 157.841C297.221 193.282 311.647 229.099 305.415 266.097C300.502 295.267 283.661 319.981 262.689 332.557C252.217 338.943 240.659 341.892 229.062 341.135C216.416 340.168 202.707 332.838 195.246 319.228C186.945 304.091 191.457 285.652 203.007 275.791C215.713 264.964 231.859 266.872 246.252 269.373C273.739 274.159 303.453 284.226 323.107 310.935C340.486 334.609 349.199 371.873 335.206 401.168C319.34 434.377 286.481 442.588 258.285 439.855C242.989 438.367 227.871 434.386 212.843 430.571C197.564 426.695 182.293 422.681 166.871 419.722C137.644 414.157 107.582 412.593 78.9408 423.23C52.0722 433.205 27.5172 453.724 13.9677 485.692C1.31873 515.436 -1.31282 550.629 1.72359 583.846C5.48537 625.364 17.2735 664.944 27.7026 704.293L61.1471 830.512L77.1872 891.032C77.532 892.335 79.1592 891.81 78.8246 890.511L45.7838 765.806C35.0301 725.238 23.5354 684.864 13.8386 643.864C5.21341 607.362 -0.846314 568.876 4.02791 530.778C6.18545 513.906 10.4252 497.379 17.2924 482.644C24.8556 466.687 35.2481 453.225 47.6342 443.339C101.295 399.843 166.826 421.603 224.644 435.713C252.191 442.424 282.104 448.177 308.567 432.741C320.011 426.08 330.437 415.644 336.934 401.725C342.738 389.034 345.049 374.222 343.497 359.647C340.378 328.03 323.085 302.357 301.597 287.732C289.57 279.574 276.437 274.38 263.167 270.86C249.609 267.271 234.95 263.861 221.099 265.733C209.305 267.33 197.105 274.558 191.614 288.708C186.714 301.353 189.612 315.393 197.014 325.315C213.134 346.926 239.54 347.077 259.863 336.477C280.015 325.956 296.832 304.549 304.381 278.374C313.971 245.049 304.56 210.62 297.216 178.233C290.254 147.562 284.013 108.239 301.431 81.1171C315.344 59.4508 343.145 51.8728 361.461 68.9181C379.979 86.1263 381.147 126.941 363.262 145.432C341.832 167.603 310.346 146.679 298.745 119.782C287.145 92.8862 289.025 57.0466 303.208 32.2803C317.982 6.51555 345.032 -2.3904 368.658 5.57602C380.134 9.32782 390.491 17.3262 398.425 28.5657C399.156 29.6121 400.336 28.0786 399.65 27.0551Z"
                    fill="none"
                    strokeWidth="2"
                    stroke="white"
                />
            </Path1>
            <Rock19 src="img/Rock13.svg" alt="Rock13" />
            <Rock20 src="img/Rock2.svg" alt="Rock2" />
            <Rock15 src="img/Rock15.svg" alt="Rock15" />

            {/* Property Background */}
            <Stones2 src="img/Stones2.svg" alt="Stones2" />
            <Rock26 src="img/Rock2.svg" alt="Rock2" />

            {/* System Background */}
            <Meteor src="img/Meteor.svg" alt="Meteor" style={position >= viewport + 1289.05 && position < viewport + 2570.05 ? { opacity: "1", left: "calc(50% - 15px)", top: "calc(100vh + 2201.05px)", width: "257.88px" } : { opacity: "0", left: "calc(50% - 415px)", top: "calc(100vh + 1869.05px)", width: "0px" }} />
            <Light3 src="img/Light1.svg" alt="Light1" style={position >= viewport + 1289.05 && position < viewport + 2570.05 ? { opacity: "1" } : { opacity: "0" }} />
            <Rock27 src="img/Rock2.svg" alt="Rock2" style={position >= viewport + 1289.05 && position < viewport + 2570.05 ? { opacity: "1", left: "calc(50% - 110px)", top: "calc(100vh + 2440.05px)" } : { opacity: "0", left: "calc(50% - 310px)", top: "calc(100vh + 2640.05px)" }} />
            <Rock25 src="img/Rock13.svg" alt="Rock13" style={position >= viewport + 1289.05 && position < viewport + 2570.05 ? { opacity: "1", left: "calc(50% + 150px)", top: "calc(100vh + 2520.05px)" } : { opacity: "0", left: "calc(50% + 310px)", top: "calc(100vh + 2640.05px)" }} />

            {/* Token Background */}
            <Path2 width={425} height={481} viewBox="0 0 375 481" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    style={position >= viewport + 2070.05 && position < viewport + 3351.05 ? { strokeDashoffset: 2605 } : { strokeDashoffset: 4150 }}
                    opacity={0.3}
                    d="M-84.9568 37.8941C-78.2464 18.5892 -60.2161 4.74009 -40.3915 1.18689C-19.8543 -2.49147 0.152078 6.24078 12.1412 23.2041C23.7043 39.583 27.3155 62.3122 17.658 80.4765C8.62298 97.4671 -12.7935 110.561 -31.2386 99.5531C-46.8133 90.2554 -53.7897 67.5178 -44.5305 51.5656C-35.2713 35.6134 -14.1459 29.9059 2.84716 35.1219C24.286 41.7095 33.7556 64.5276 37.485 84.7842C42.0484 109.326 39.7617 136.983 54.5699 158.449C66.2451 175.374 86.4378 185.453 106.789 186.413C116.98 186.961 127.147 184.955 136.37 180.576C146.39 175.71 155.598 166.435 158.074 155.261C160.832 142.832 152.31 132.606 140.328 130.208C127.153 127.583 114.537 134.224 103.501 140.654C82.4301 152.939 60.9394 169.335 52.0059 192.948C44.1213 213.864 46.8574 240.523 65.9428 254.475C87.5809 270.291 116.441 264.478 138.629 253.262C150.665 247.174 161.9 239.558 173.105 232.079C184.498 224.476 195.848 216.788 207.599 209.721C229.879 196.355 253.892 185.256 279.964 182.405C304.422 179.728 329.777 184.543 349.206 200.346C367.317 215.037 378.725 236.564 385.007 258.737C392.887 286.441 393.734 315.607 395.625 344.169L401.698 435.786L404.606 479.716C404.669 480.661 403.209 480.874 403.139 479.934L397.137 389.417C395.189 359.97 393.893 330.396 390.973 301.029C388.366 274.885 383.152 248.341 369.157 225.717C362.96 215.698 355.162 206.599 345.702 199.523C335.354 191.903 323.364 186.822 310.697 184.689C255.642 175.024 208.131 210.903 164.871 239.319C144.257 252.85 121.469 266.566 95.9028 265.629C84.8501 265.234 73.6307 262.091 64.6857 255.411C56.6268 249.28 50.8483 240.624 48.2699 230.821C42.4766 209.639 49.7639 187.479 63.3707 170.944C70.9938 161.707 80.2961 153.986 90.1503 147.285C100.221 140.443 111.233 133.345 122.979 129.883C132.982 126.937 144.798 127.439 152.987 134.605C160.299 141.011 161.642 150.925 158.242 159.731C150.836 178.91 129.422 187.881 110.118 187.96C90.974 188.032 71.6718 180.052 58.6438 165.92C42.0746 147.921 40.6523 122.834 38.0884 99.7418C35.6664 77.8704 30.38 50.732 9.08391 39.314C-7.92663 30.1922 -32.5109 34.7094 -42.9028 51.7193C-53.4154 68.9006 -43.6141 95.2842 -24.2121 101.049C-0.961325 107.966 19.1095 84.06 21.4503 63.0339C23.7912 42.0077 12.8235 19.8166 -5.2235 8.81155C-24.0135 -2.63069 -48.3365 0.788124 -65.434 13.801C-73.77 20.0468 -80.0775 28.6205 -83.5638 38.4445C-83.8818 39.3564 -85.2446 38.7764 -84.9568 37.8941Z"
                    fill="none"
                    strokeWidth="2"
                    stroke="white"
                />
            </Path2>
            <Light4 src="img/Light1.svg" alt="Light1" style={position >= viewport + 2070.05 && position < viewport + 3351.05 ? { opacity: "1" } : { opacity: "0" }} />

            {/* Partner Background */}
            <UFO src="img/UFO.svg" alt="UFO" style={position >= viewport + 3828.46 && position < viewport + 4778.46 ? { opacity: 1, left: "calc(50% - 160px" } : { opacity: 0, left: "calc(50% - 500px)" }} />
            <Twinkle4 src="img/Twinkle4.svg" alt="Twinkle4" />
            <Galaxy1 src="img/Galaxy1.svg" alt="Galaxy" />
            <Star1 src="img/Star1.svg" alt="Star" />
            <Stone2 src="img/Stone2.svg" alt="Stone2" />
            <Stone3 src="img/Stone3.svg" alt="Stone3" />
            <Twinkle3 src="img/Twinkle3.svg" alt="Twinkle3" />
            <Ground1 src="img/Ground2.svg" alt="Ground" style={position >= viewport + 3828.46 && position < viewport + 5654.46 ? { opacity: 1, top: "calc(100vh + 5210px)" } : { opacity: 0, top: "calc(100vh + 5310px)" }} />
            <Ground2 src="img/Ground2.svg" alt="Ground" style={position >= viewport + 3828.46 && position < viewport + 5654.46 ? { opacity: 1, top: "calc(100vh + 5210px)" } : { opacity: 0, top: "calc(100vh + 5310px)" }} />
            <Gradient />
        </>
    );
};

// Type Background
const rock16Animation = keyframes`
    0% {
        top: calc(100vh + 312px);
    }

    50% {
        top: calc(100vh + 262px);
    }

    100% {
        top: calc(100vh + 312px);
    }
`

const Rock16 = styled.img`
    position: absolute;
    width: 47.89px;
    left: calc(50% - 75px);
    top: calc(100vh + 312px);
    transform: translate(-50%, -50%); 
    transition: all 2s ease; 
    animation: ${rock16Animation} 4s ease-in-out infinite;  
    z-index: 1;
`

const rock6Animation = keyframes`
    0% {
        top: calc(100vh + 452px);
    }

    50% {
        top: calc(100vh + 422px);
    }

    100% {
        top: calc(100vh + 452px);
    }
`

const Rock6 = styled.img`
    position: absolute;
    width: 150.88px;
    left: calc(50% - 60px);
    top: calc(100vh + 452px);
    transform: translate(-50%, -50%);
    transition: all 2s ease;  
    animation: ${rock6Animation} 4s ease infinite; 
    z-index: 1;
`

const rock13Animation = keyframes`
    0% {
        top: calc(100vh + 576px);
    }

    50% {
        top: calc(100vh + 626px);
    }

    100% {
        top: calc(100vh + 576px);
    }
`

const Rock13 = styled.img`
    position: absolute;
    width: 66.68px;
    left: calc(50% - 60px);
    top: calc(100vh + 576px);
    transform: translate(-50%, -50%);
    transition: all 2s ease;
    animation: ${rock13Animation} 6s ease infinite;
    z-index: 1;
`

const rock8Animation = keyframes`
    0% {
        top: calc(100vh + 646px);
    }

    50% {
        top: calc(100vh + 596px);
    }

    100% {
        top: calc(100vh + 646px);
    }
`

const Rock8 = styled.img`
    position: absolute;
    left: calc(50% + 325px);
    top: calc(100vh + 646px);
    transform: translate(-50%, -50%); 
    transition: all 2s ease;  
    animation: ${rock8Animation} 4s ease infinite; 
    z-index: 1;
`

const pathSvg1Animation = keyframes`
    from {
        stroke-dashoffset: 4150;
    }
    to {
        stroke-dashoffset: 2075;
    }
`

const Path1 = styled.svg`
    position: absolute;
    left: calc(50% + 15px);
    top: calc(100vh + 606px);
    transform: translate(-50%, -50%);
    transition: all 2s ease; 
    z-index: 1;

& path {
    stroke-dasharray: 4150;
    stroke-dashoffset: 2075;
    animation: ${pathSvg1Animation} 2s linear;
    transition: all 2s ease; 
}
`

const rock19Animation = keyframes`
    0% {
        top: calc(100vh + 994px);
    }

    50% {
        top: calc(100vh + 1064px);
    }

    100% {
        top: calc(100vh + 994px);
    }
`

const Rock19 = styled.img`
    position: absolute;
    width: 66.68px;
    rotate: 36deg;
    left: calc(50% - 204px);
    top: calc(100vh + 994px);
    transform: translate(-50%, -50%); 
    transition: all 2s ease; 
    animation: ${rock19Animation} 4s ease-in-out infinite; 
    z-index: 1;
`

const rock20Animation = keyframes`
    0% {
        top: calc(100vh + 852px);
    }

    50% {
        top: calc(100vh + 902px);
    }

    100% {
        top: calc(100vh + 852px);
    }
`

const Rock20 = styled.img`
    position: absolute;
    width: 106.84px;
    rotate: -43deg;
    left: calc(50% - 32px);
    top: calc(100vh + 852px);
    transform: translate(-50%, -50%);  
    transition: all 2s ease; 
    animation: ${rock20Animation} 4s ease-in-out infinite; 
    z-index: 1;
`

const rock15Animation = keyframes`
    0% {
        top: calc(100vh + 972px);
    }

    50% {
        top: calc(100vh + 1042px);
    }

    100% {
        top: calc(100vh + 972px);
    }
`

const Rock15 = styled.img`
    position: absolute;
    width: 293.66px;
    left: calc(50% + 252px);
    top: calc(100vh + 972px);
    transform: translate(-50%, -50%);
    transition: all 2s ease; 
    animation: ${rock15Animation} 6s ease infinite; 
    z-index: 1;
`

// Property Background
const Stones2 = styled.img`
position: absolute;
left: calc(50% - 32px);
top: calc(100vh + 1736px);
transform: translate(-50%, -50%);
transition: all 2s ease;
z-index: 1;
`

const Rock26 = styled.img`
position: absolute;
width: 52px;
rotate: -43deg;
left: calc(50% + 192px);
top: calc(100vh + 1686px);
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;
`

// System Background
const Meteor = styled.img`
position: absolute;
left: calc(50% - 15px);
top: calc(100vh + 2201.05px); 
transform: translate(-50%, -50%);
transition: all 2s ease;  
z-index: 1;
`

const Light3 = styled.img`
position: absolute;
left: calc(50% - 10px);
top: calc(100vh + 2151.05px); 
transform: translate(-50%, -50%); 
transition: all 2s ease;  
z-index: 1;
`

const Rock27 = styled.img`
position: absolute;
width: 48px;
rotate: -133.5deg;
left: calc(50% - 110px);
top: calc(100vh + 2440.05px); 
transform: translate(-50%, -50%); 
transition: all 2s ease;
z-index: 6;
`

const Rock25 = styled.img`
position: absolute;
width: 52px;
rotate: 36deg;
left: calc(50% + 150px);
top: calc(100vh + 2520.05px); 
transform: translate(-50%, -50%); 
transition: all 2s ease;  
z-index: 1;
`

// Token Background
const pathSvg2Animation = keyframes`
    from {
        stroke-dashoffset: 4150;
    }
    to {
        stroke-dashoffset: 2075;
    }
`

const Path2 = styled.svg`
    position: absolute;
    left: calc(50%);
    top: calc(100vh + 2790px);
    transform: translate(-50%, -50%);
    transition: all 2s ease; 
    z-index: 1;

    & path {
        stroke-dasharray: 4150;
        stroke-dashoffset: 2075;
        animation: ${pathSvg2Animation} 2s linear;
        transition: all 2s ease; 
    }
`

const Light4 = styled.img`
position: absolute;
width: 600px;
left: calc(50% + 100px);
top: calc(100vh + 3090px); 
transform: translate(-50%, -50%); 
transition: all 2s ease;  
z-index: 1;
`

// Partner Background
const UFO = styled.img`
position: absolute;
left: calc(50% - 160px);
width: 133.02px;
top: calc(100vh + 4470px);
transform: translate(-50%, -50%); 
transition: all 2s ease;   
z-index: 1;
`

const twink4Animation = keyframes`
0% {
    opacity: 0.4;    
}

50%{
    opacity: 1;
}

100%{
    opacity: 0.4;
}
`

const Twinkle4 = styled.img`
position: absolute;
left: calc(50% + 95px);
top: calc(100vh + 4450px);
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${twink4Animation} 4s ease infinite;  
z-index: 1;
`


const galaxy1Animation = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`

const Galaxy1 = styled.img`
position: absolute;
width: 467px;
left: calc(50% - 350px);
top: calc(100vh + 4855px);
animation: ${galaxy1Animation} 60s linear infinite;
transform: translate(-50%, -50%);
opacity: 0.3;
z-index: 1; 
`


const Star1 = styled.img`
position: absolute;
width: 53.75px;
rotate: 90deg;
left: calc(50% + 110px);
top: calc(100vh + 4860px);
transform: translate(-50%, -50%);
opacity: 0.2;
z-index: 1; 
`

const stone2Animation = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`

const Stone2 = styled.img`
position: absolute;
width: 23.51px;
left: calc(50% + 85px);
top: calc(100vh + 5000px);
animation: ${stone2Animation} 60s linear infinite;
transform: translate(-50%, -50%);
opacity: 0.2;
z-index: 1; 
`

const stone3Animation = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(-360deg);
}
`

const Stone3 = styled.img`
position: absolute;
width: 90.29px;
left: calc(50% + 110px);
top: calc(100vh + 4930px);
animation: ${stone3Animation} 60s linear infinite;
transform: translate(-50%, -50%);
opacity: 0.2;
z-index: 1; 
`

const twink3Animation = keyframes`
0% {
    opacity: 0.2;    
}

50%{
    opacity: 0.4;
}

100%{
    opacity: 0.2;
}
`

const Twinkle3 = styled.img`
position: absolute;
width: 120px;
left: calc(50% + 145px);
top: calc(100vh + 5070px);
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${twink3Animation} 4s ease infinite;  
z-index: 1;
`

const Ground1 = styled.img`
position: absolute;
width: 473.99px;
left: calc(50% + 170px);
top: calc(100vh + 5210px);
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;
`

const Ground2 = styled.img`
position: absolute;
width: 473.99px;
left: calc(50% - 170px);
top: calc(100vh + 5210px);
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;
`

const Gradient = styled.div`
position: absolute;
width: 100%;
height: 300px;
top: calc(100vh + 5070px);
background: linear-gradient(rgba(17, 17, 17, 0.1), rgba(17, 17, 17, 0.1), rgba(17, 17, 17, 1), rgba(17, 17, 17, 1), rgba(17, 17, 17, 1));
z-index: 1;
`

export default BackgroundMo2
