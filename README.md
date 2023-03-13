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

### 2. 제작인원
* 웹 기획자 1명
* 웹 디자이너 2명
* 3D 디자이너 1명
* 프론트엔드 개발자 1명(본인)

### 3. 사용기술
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=flat&logo=styled-components&logoColor=black"> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white"> <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon AWS&logoColor=white"> <img src="https://img.shields.io/badge/AWS S3-569A31?style=flat&logo=amazon s3&logoColor=white">
<br/><br/>

### 4. 구현기능 
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

* Three.js를 활용한 3D 이미지 컨트롤 기능(위와 사진 동일)

```
const WalkerShoe = () => {
  const orbitControlsRef = useRef(null)

  const [loadImg, setLoadImg] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => { setLoadImg(false) }, 2000);
    return () => {
      clearTimeout(load);
    }
  }, []);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle((x + 45) * angleToRadians(50));
      orbitControlsRef.current.setPolarAngle((y + 39) * angleToRadians(20));
      orbitControlsRef.current.update();
    }
  })

  return (
    <>
      {loadImg === true ? null : (
        <>
          <ambientLight args={["#ffffff", 0.4]} />
          <directionalLight args={["#ffffff", 0.8]} position={[20, 20, -30]} />
          <Walker />
          <PerspectiveCamera makeDefault position={[0, 0, 60]} />
          <OrbitControls ref={orbitControlsRef} enableZoom={false} />
        </>
      )}
    </>
  )
}
```

### 5. 문제해결
* 처음에 무한 캐러셀을 만들 때 마지막 이미지에서 처음 이미지로 가는 방법에 대한 고민이 있었습니다. 이에 처음과 마지막 이미지 복제본을 만든 후 마지막 이미지 옆에 첫 이미지 복제본을 두고, 첫 이미지 복제본에 도착하면 setTimeout으로 첫 이미지로 가는 방법을 생각하고 적용하여 무한 캐러셀을 만들었습니다.
* Three.js 기본 값에는 3D 파일을 클릭 후 움직여야 이미지가 돌아가는데, 저희는 마우스오버가 되면 이미지가 마우스를 따라가며 돌아가도록 만드려고 하였습니다. 이에 마우스의 X값과 Y값을 따로 정의해줘서 3D 이미지가 따라갈 수 있도록 만들어주었습니다.

### 6. 개선사항
* 상세페이지가 존재하지 않음(React Router, Redux Toolkit 사용이 어려움)
* 메모리를 많이 차지하여 느려지는 문제 개선 필요
