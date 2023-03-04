# M2E-prototype 홈페이지
* react를 활용한 스튜디오 홈페이지 제작
<br/><br/>
![스텝워스크린샷](https://user-images.githubusercontent.com/108599126/219304142-4fd0bb6f-4ed1-46f2-a291-5fefead1241d.PNG)
<br/><br/>
* URL: http://hyoungbin.shop
<br/><br/>

### 1. 개발목표   
* 회사에서 M2E 서비스가 기획 됨에 따라, 프로토타입의 홈페이지 제작   
* 강의를 통해 배운 react.js를 복습하고 응용하는데 목표를 둠
<br/><br/>

### 2. 사용기술
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=flat&logo=styled-components&logoColor=black"> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white"> <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon AWS&logoColor=white"> <img src="https://img.shields.io/badge/AWS S3-569A31?style=flat&logo=amazon s3&logoColor=white">
<br/><br/>

### 3. 구현기능 
* 배경이미지 모션 효과
<img src="https://user-images.githubusercontent.com/108599126/219304142-4fd0bb6f-4ed1-46f2-a291-5fefead1241d.PNG" width="640" height="340">

```
<Light1 src="img/Light1.svg" alt="Light1" style={position < viewport - 10 ? { opacity: "1" } : { opacity: "0" }} />
<Path1
    width={624}
    height={776}
    viewBox="0 0 624 776"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
<path style={position < viewport - 10 ? { strokeDashoffset: 2075 } : { strokeDashoffset: 4150 }}
    opacity={0.3}
    d="M64.0521 0.58015C35.1881 7.15793 12.3709 30.9037 4.08965 58.8769C-4.48557 87.8559 4.89098 118.053 27.3977 138.022C49.1311 157.284 81.2767 166.113 108.969 155.11C134.873 144.816 157.143 116.075 144.241 87.7624C133.343 63.8554 101.723 50.1808 77.2786 60.9634C52.8343 71.746 41.2439 101.248 46.0395 126.545C52.0996 158.461 83.4376 175.738 112.005 184.342C146.608 194.831 186.789 195.956 215.329 220.702C237.83 240.213 249.115 270.893 247.248 300.346C246.409 315.104 241.897 329.421 234.12 341.999C225.515 355.648 210.691 367.423 194.21 369.204C175.875 371.189 162.515 357.287 160.976 339.654C159.301 320.267 170.876 303.166 181.896 288.305C202.946 259.931 229.983 231.61 265.405 222.52C296.776 214.509 334.718 222.706 351.757 252.41C371.071 286.087 358.093 326.708 338.402 356.86C327.716 373.215 314.958 388.173 302.4 403.11C289.635 418.297 276.754 433.41 264.704 449.199C241.903 479.14 222.091 511.938 213.823 549.018C206.063 583.801 208.945 621.072 228.594 651.567C246.851 679.987 276.021 699.848 306.94 712.433C345.565 728.201 387.418 734.079 428.237 741.362L559.163 764.735L621.943 775.938C623.294 776.18 623.834 774.111 622.492 773.86L493.137 750.764C451.054 743.257 408.685 736.67 366.872 727.775C329.651 719.847 292.269 708.103 261.934 684.342C248.499 673.82 236.645 661.141 227.968 646.391C218.651 630.276 213.251 612.204 212.204 593.627C207.081 512.823 266.322 450.154 314.138 392.412C336.91 364.896 360.296 334.28 363.03 297.323C364.226 281.348 361.493 264.694 353.305 250.75C345.764 238.169 334.225 228.467 320.525 223.19C290.955 211.467 257.888 218.419 231.911 235.368C217.395 244.867 204.795 257.026 193.573 270.143C182.116 283.549 170.139 298.268 163.278 314.626C157.439 328.556 156.276 345.648 165.284 358.581C173.339 370.131 187.398 373.648 200.618 370.159C229.412 362.56 245.746 333.164 248.943 305.385C252.105 277.836 243.698 248.773 225.433 227.76C202.167 201.032 166.278 194.978 133.442 187.6C102.341 180.62 64.1158 168.676 51.0787 136.193C40.6628 110.247 51.092 75.5756 77.2399 63.3312C103.654 50.9405 140.072 69.2642 145.273 98.1171C151.518 132.695 113.896 157.772 83.2522 157.784C52.608 157.797 22.4119 138.463 9.45044 110.724C-4.0218 81.846 4.78433 47.3752 26.2487 24.8388C36.5718 13.8353 49.9222 6.12375 64.6221 2.67348C65.9857 2.36129 65.3684 0.30671 64.0521 0.58015Z"
    fill="none"
    strokeWidth="2"
    stroke="white"
/>
</Path1>
<Stone1 src="img/Stone1.svg" alt="Stone1" style={position < viewport ? { opacity: "1", top: "45vh" } : { opacity: "0", top: "45vh" }} />
<Stones1 src="img/Stones1.svg" alt="Stones" style={position < viewport ? { opacity: "1", top: "54.5vh" } : { opacity: "0", top: "60vh" }} />
<Rock1 src="img/Rock1.svg" alt="Rock1" style={position < viewport ? { opacity: "1", top: "-8.1vh" } : { opacity: "0", top: "110vh" }} />
<Rock2 src="img/Rock2.svg" alt="Rock2" style={position < viewport ? { opacity: "1", top: "3.55vh" } : { opacity: "0", top: "110vh" }} />
<Rock3 src="img/Rock3.svg" alt="Rock3" style={position < viewport ? { opacity: "1", top: "-1.05vh" } : { opacity: "0", top: "110vh" }} />
<Rock4 src="img/Rock4.svg" alt="Rock4" style={position < viewport ? { opacity: "1", top: "22.5vh" } : { opacity: "0", top: "110vh" }} />
<Rock5 src="img/Rock5.svg" alt="Rock5" style={position < viewport ? { opacity: "1", top: "24.5vh" } : { opacity: "0", top: "110vh" }} />
<Rock6 src="img/Rock6.svg" alt="Rock6" style={position < viewport ? { opacity: "1", top: "27.5vh" } : { opacity: "0", top: "110vh" }} />
<Rock7 src="img/Rock7.svg" alt="Rock7" style={position < viewport ? { opacity: "1", top: "52.5vh" } : { opacity: "0", top: "110vh" }} />
<Rock8 src="img/Rock8.svg" alt="Rock8" style={position < viewport ? { opacity: "1", top: "48vh" } : { opacity: "0", top: "110vh" }} />
<Rock9 src="img/Rock9.svg" alt="Rock9" style={position < viewport ? { opacity: "1", top: "82.5vh" } : { opacity: "0", top: "92.5vh" }} />
<Rock10 src="img/Rock10.svg" alt="Rock10" style={position < viewport ? { opacity: "1", top: "97.5vh" } : { opacity: "0", top: "100vh" }} />
<Rock11 src="img/Rock11.svg" alt="Rock11" style={position < viewport ? { opacity: "1", top: "72vh" } : { opacity: "0", top: "110vh" }} />
<Rock12 src="img/Rock18.svg" alt="Rock18" style={position < viewport ? { top: "99.2vh" } : { top: "102.7vh" }} />
<Rock13 src="img/Rock13.svg" alt="Rock13" style={position < viewport ? { top: "103vh" } : { top: "106vh" }} />
<Rock14 src="img/Rock14.svg" alt="Rock14" style={position < viewport ? { opacity: "1", top: "96.3vh" } : { opacity: "0", top: "100vh" }} />
<Rock15 src="img/Rock15.svg" alt="Rock15" style={position < viewport ? { top: "98vh" } : { top: "101vh" }} />
```

* 무한캐러셀 기능 구현
<img src="https://user-images.githubusercontent.com/108599126/221117276-31ec644b-1729-463b-aafe-627a8fbc3460.PNG" width="640" height="340">

```
const slideRef = useRef(null);
const [currentImg, setCurrentImg] = useState(0);
const IMG_WIDTH = 54;
const slideRange = currentImg * IMG_WIDTH;
useEffect(() => {
    currentImg === 0 ? slideRef.current.style.transition = "" : slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}rem)`;
    const timer = setInterval(() => {
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
```
* useMediaQuery 사용 및 반응형 웹페이지 구현
<img src="https://user-images.githubusercontent.com/108599126/221123803-f7cc0533-b53f-4125-8d81-cd8b52540513.PNG" width="640" height="340">
<div>
<img src="https://user-images.githubusercontent.com/108599126/221124368-e91e8214-020f-4ab9-b19f-cb35fe8b5e9c.PNG" width="410" height="590">
<img src="https://user-images.githubusercontent.com/108599126/221125936-35593655-8f67-4ecc-b210-cf16f12effa5.PNG" width="331.7" height="590">
</div>

```
function App() {
  const isWeb = useMediaQuery({
    query: "(min-width: 1024px)"
  })

  const isTablet = useMediaQuery({
    query: "(max-width: 1023px) and (min-width: 426px)"
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 425px)"
  })

  return (
    <>
      {isWeb && <Web />}
      {isTablet && <Tablet />}
      {isMobile && <Mobile />}
    </>
  );
};
```

### 4. 개선사항
* 상세페이지가 존재하지 않음(React Router, Redux Toolkit 사용이 어려움)
* 메모리를 많이 차지하여  문제 개선 필요
