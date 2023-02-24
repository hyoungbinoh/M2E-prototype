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
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=flat&logo=styled-components&logoColor=black"> <img src="https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white"> <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon AWS&logoColor=white"> <img src="https://img.shields.io/badge/AWS S3-569A31?style=flat&logo=amazon s3&logoColor=white">
<br/><br/>

### 3. 구현기능 
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
<br/><br/>

### 4. 개선사항
* 상세페이지 제작 필요
* 메모리를 많이 차지하는 문제 개선 필요
<br/><br/>
