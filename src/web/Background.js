import React from "react";
import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components";

const Background = () => {
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
            {/* Main Background */}
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
            
            {/* Type Background */}
            <Light2 src="img/Light1.svg" alt="Light1" style={position >= viewport - 500 && position < viewport * 2 ? { opacity: "1" } : { opacity: "0" }} />
            <Stones2 src="img/Stones1.svg" alt="Stones" />
            <Rock16 src="img/Rock16.svg" alt="Rock16" />
            <Rock17 src="img/Rock13.svg" alt="Rock13" />
            <Rock18 src="img/Rock18.svg" alt="Rock18" />
            <Path2 width={510} height={890} viewBox="0 0 510 890" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    style={position >= viewport - 500 && position < viewport * 2 ? { strokeDashoffset: 2075 } : { strokeDashoffset: 4150 }}
                    opacity={0.3}
                    d="M509.234 26.7717C489.565 4.64707 457.764 -3.90787 429.261 2.31169C399.736 8.75821 377.791 31.5226 371.135 60.8657C364.726 89.1906 372.476 121.613 395.459 140.579C416.959 158.319 452.874 163.988 471.469 139.043C487.168 117.975 483.918 83.6784 462.692 67.4525C441.467 51.2265 410.031 55.2827 390.173 71.6723C365.124 92.3589 365.082 128.144 371.305 157.322C378.784 192.699 397.157 228.451 389.22 265.382C382.963 294.5 361.515 319.169 334.806 331.723C321.469 338.098 306.75 341.041 291.98 340.285C275.875 339.32 258.415 332.003 248.914 318.418C238.342 303.308 244.087 284.903 258.797 275.059C274.979 264.251 295.542 266.156 313.873 268.653C348.878 273.43 386.721 283.479 411.752 310.14C433.885 333.771 444.982 370.968 427.161 400.21C406.954 433.359 365.106 441.556 329.197 438.827C309.717 437.343 290.463 433.369 271.324 429.56C251.865 425.691 232.417 421.684 212.775 418.731C175.553 413.175 137.268 411.615 100.791 422.233C66.5725 432.19 35.3001 452.672 18.044 484.581C1.93476 514.272 -1.41665 549.402 2.45036 582.559C7.24122 624.002 22.2541 663.51 35.5363 702.789L78.1299 828.78L98.5579 889.191C98.997 890.491 101.069 889.968 100.643 888.671L58.5638 764.191C44.8682 723.696 30.2291 683.395 17.8796 642.469C6.89489 606.032 -0.82258 567.616 5.38508 529.587C8.13284 512.744 13.5325 496.248 22.2782 481.539C31.9104 465.611 45.1459 452.173 60.9203 442.305C129.26 398.887 212.718 420.609 286.353 434.693C321.437 441.392 359.532 447.135 393.234 431.726C407.809 425.078 421.087 414.66 429.361 400.767C436.754 388.098 439.696 373.313 437.72 358.764C433.747 327.204 411.725 301.577 384.358 286.979C369.04 278.835 352.315 273.651 335.415 270.137C318.147 266.555 299.479 263.151 281.839 265.019C266.819 266.614 251.281 273.828 244.288 287.953C238.047 300.575 241.738 314.59 251.164 324.493C271.695 346.065 305.324 346.217 331.207 335.636C356.871 325.134 378.289 303.765 387.903 277.637C400.117 244.372 388.131 210.006 378.778 177.677C369.912 147.061 361.963 107.81 384.146 80.7363C401.865 59.109 437.272 51.5447 460.599 68.5593C484.182 85.7365 485.67 126.477 462.892 144.936C435.6 167.066 395.5 146.18 380.726 119.332C365.952 92.4842 368.346 56.7092 386.41 31.9875C405.226 6.26923 439.675 -2.62066 469.764 5.3314C484.38 9.07643 497.569 17.0604 507.675 28.2797C508.605 29.3242 510.108 27.7934 509.234 26.7717Z"
                    fill="none"
                    strokeWidth="2"
                    stroke="white"
                />
            </Path2>
            <Rock19 src="img/Rock13.svg" alt="Rock13" />
            <Rock20 src="img/Rock2.svg" alt="Rock2" />

            {/* Property Background */}
            <Stones3 src="img/Stones1.svg" alt="Stones3" style={position >= viewport * 3 - 500 && position < viewport * 4 ? { opacity: "1", left: "calc(50% - 359px)", top: "314.7vh" } : { opacity: "0", left: "calc(50% - 380px)", top: "304.7vh" }} />
            <Rock23 src="img/Rock18.svg" alt="Rock18" style={position >= viewport * 3 - 500 && position < viewport * 4 ? { opacity: "1", left: "calc(50% + 635px)", top: "330.5vh" } : { opacity: "0", left: "calc(50% + 1015px)", top: "300.5vh" }} />
            <Rock24 src="img/Rock13.svg" alt="Rock13" style={position >= viewport * 3 - 500 && position < viewport * 4 ? { opacity: "1", left: "calc(50% - 555px)", top: "356vh" } : { opacity: "0", left: "calc(50% - 1015px)", top: "366vh" }} />
            <Light3 src="img/Light1.svg" alt="Light1" style={position >= viewport * 3 - 500 && position < viewport * 4 ? { opacity: "1" } : { opacity: "0" }} />
            <Meteor src="img/Meteor.svg" alt="Meteor" style={position >= viewport * 3 - 500 && position < viewport * 4 ? { opacity: "1", left: "calc(50% - 15px)", top: "353.5vh", width: "415px" } : { opacity: "0", left: "calc(50% - 415px)", top: "calc(353.5vh - 300px)", width: "0px" }} />
            <Rock25 src="img/Rock13.svg" alt="Rock13" style={position >= viewport * 3 - 500 && position < viewport * 4 ? { opacity: "1", left: "calc(50% - 255px)", top: "390.8vh" } : { opacity: "0", left: "calc(50% - 325px)", top: "405.5vh" }} />
            <Rock26 src="img/Rock2.svg" alt="Rock2" style={position >= viewport * 3 - 500 && position < viewport * 4 ? { opacity: "1", left: "calc(50% - 32px)", top: "373.8vh" } : { opacity: "0", left: "calc(50% - 62px)", top: "393.8vh" }} />
            <Rock27 src="img/Rock2.svg" alt="Rock2" style={position >= viewport * 3 - 500 && position < viewport * 4 ? { opacity: "1", left: "calc(50% + 356px)", top: "349.8vh" } : { opacity: "0", left: "calc(50% + 1000px)", top: "394vh" }} />

            {/* System Background */}
            <Light4 src="img/Light1.svg" alt="Light1" style={position >= viewport * 4 - 500 && position < viewport * 5 - 10 ? { opacity: 1 } : { opacity: 0 }} />
            <Path3 width={603} height={591} viewBox="0 0 603 591" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    style={position >= viewport * 4 - 500 && position < viewport * 5 - 10 ? { opacity: 0.3, strokeDashoffset: 2375 } : { opacity: 0, strokeDashoffset: 4150 }}
                    d="M0.99194 46.9491C9.23951 23.2219 31.4001 6.20036 55.766 1.83321C81.0077 -2.68777 105.597 8.04482 120.333 28.894C134.545 49.0248 138.983 76.9608 127.113 99.286C116.008 120.169 89.686 136.261 67.0156 122.732C47.8732 111.305 39.2986 83.3588 50.6789 63.7524C62.0591 44.146 88.0238 37.131 108.909 43.5419C135.259 51.6384 146.898 79.6836 151.482 104.581C157.091 134.745 154.28 168.737 172.48 195.12C186.83 215.922 211.649 228.309 236.662 229.49C249.187 230.164 261.683 227.697 273.019 222.315C285.334 216.335 296.651 204.935 299.695 191.202C303.084 175.925 292.61 163.357 277.884 160.409C261.69 157.183 246.185 165.346 232.621 173.249C206.723 188.347 180.309 208.499 169.329 237.522C159.638 263.229 163.001 295.995 186.459 313.143C213.054 332.582 248.525 325.437 275.796 311.652C290.589 304.17 304.397 294.809 318.169 285.616C332.171 276.271 346.121 266.822 360.565 258.137C387.948 241.709 417.462 228.068 449.507 224.564C479.567 221.273 510.73 227.191 534.609 246.615C556.87 264.671 570.891 291.129 578.612 318.382C588.297 352.431 589.338 388.278 591.662 423.384L599.126 535.987L602.701 589.981C602.778 591.143 600.984 591.404 600.897 590.249L593.52 478.997C591.126 442.804 589.534 406.456 585.944 370.361C582.74 338.228 576.332 305.604 559.131 277.798C551.515 265.483 541.931 254.299 530.303 245.603C517.584 236.237 502.848 229.993 487.279 227.371C419.613 215.492 361.218 259.59 308.049 294.515C282.713 311.146 254.705 328.004 223.282 326.852C209.697 326.366 195.908 322.504 184.914 314.294C175.009 306.757 167.906 296.119 164.737 284.07C157.617 258.036 166.574 230.799 183.297 210.477C192.667 199.124 204.1 189.635 216.211 181.398C228.589 172.99 242.123 164.266 256.56 160.01C268.855 156.389 283.378 157.007 293.442 165.813C302.429 173.687 304.08 185.873 299.901 196.695C290.799 220.268 264.48 231.294 240.753 231.391C217.224 231.48 193.5 221.671 177.488 204.302C157.123 182.18 155.375 151.347 152.224 122.964C149.247 96.0828 142.749 62.7278 116.575 48.6943C95.6677 37.4828 65.4519 43.0348 52.6795 63.9413C39.7587 85.0583 51.8051 117.486 75.6517 124.571C104.229 133.073 128.897 103.69 131.774 77.8477C134.651 52.005 121.171 24.7305 98.9901 11.2045C75.8958 -2.85887 46.001 1.3431 24.9869 17.3368C14.7414 25.0134 6.98897 35.5512 2.70403 47.6256C2.31319 48.7463 0.638205 48.0335 0.99194 46.9491Z"
                    fill="none"
                    strokeWidth="2"
                    stroke="white"
                />
            </Path3>
            <Twinkle1 src="img/Twinkle1.svg" alt="Twinkle1" style={position >= viewport * 4 - 500 && position < viewport * 6 - 10 ? { opacity: 1 } : { opacity: 0 }} />

            {/* Partner Background */}
            <UFO src="img/UFO.svg" alt="UFO" style={position >= viewport * 6 - 500 && position < viewport * 7 - 10 ? { opacity: 1, left: "calc(50% - 32rem)" } : { opacity: 0, left: "calc(50% - 42rem)" }} />
            <Twinkle2 src="img/Twinkle2.svg" alt="Twinkle2" style={position >= viewport * 6 - 500 && position < viewport * 8 - 10 ? { opacity: 0.6 } : { opacity: 0 }} />
            <Light5 src="img/Light1.svg" alt="Light1" style={position >= viewport * 6 - 500 && position < viewport * 7 - 10 ? { opacity: 1 } : { opacity: 0 }} />
            <Path4 width={711} height={696} viewBox="0 0 711 696" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    style={position >= viewport * 6 - 500 && position < viewport * 7 - 10 ? { opacity: 0.3, strokeDashoffset: 2075 } : { opacity: 0, strokeDashoffset: 4150 }}
                    opacity={0.4}
                    d="M709.948 54.5799C700.228 26.6171 674.112 6.55686 645.396 1.41009C615.648 -3.91796 586.669 8.73059 569.303 33.3017C552.554 57.0262 547.323 89.9492 561.312 116.26C574.399 140.871 605.421 159.836 632.138 143.892C654.698 130.424 664.803 97.4894 651.391 74.3829C637.979 51.2764 607.38 43.0092 582.765 50.5645C551.712 60.1064 537.995 93.1582 532.593 122.5C525.983 158.049 529.295 198.109 507.846 229.203C490.935 253.718 461.686 268.316 432.207 269.708C417.446 270.501 402.719 267.595 389.36 261.252C374.846 254.204 361.509 240.769 357.921 224.584C353.927 206.581 366.271 191.769 383.626 188.295C402.711 184.493 420.984 194.113 436.969 203.426C467.491 221.22 498.62 244.97 511.56 279.173C522.981 309.47 519.017 348.084 491.372 368.294C460.03 391.204 418.226 382.783 386.087 366.536C368.653 357.719 352.38 346.688 336.15 335.853C319.648 324.84 303.207 313.704 286.185 303.468C253.913 284.107 219.131 268.032 181.366 263.902C145.939 260.024 109.213 266.998 81.0706 289.889C54.8363 311.168 38.3122 342.35 29.2124 374.468C17.7992 414.596 16.5718 456.842 13.8326 498.215L5.0367 630.92L0.82351 694.552C0.732278 695.922 2.84755 696.23 2.9494 694.869L11.6431 563.756C14.4649 521.102 16.3411 478.265 20.5717 435.726C24.3477 397.858 31.8993 359.409 52.1712 326.639C61.1476 312.126 72.4424 298.946 86.1461 288.697C101.135 277.66 118.502 270.3 136.85 267.211C216.596 253.211 285.415 305.181 348.076 346.34C377.935 365.94 410.943 385.808 447.976 384.45C463.985 383.878 480.237 379.326 493.193 369.65C504.866 360.769 513.236 348.231 516.971 334.031C525.363 303.349 514.807 271.251 495.098 247.301C484.056 233.921 470.582 222.738 456.308 213.03C441.721 203.121 425.771 192.84 408.756 187.824C394.267 183.557 377.151 184.285 365.291 194.664C354.699 203.943 352.753 218.304 357.679 231.058C368.405 258.84 399.423 271.833 427.385 271.948C455.115 272.053 483.074 260.493 501.945 240.024C525.945 213.953 528.005 177.615 531.719 144.165C535.227 112.485 542.885 73.1755 573.732 56.6367C598.371 43.4238 633.981 49.9669 649.034 74.6055C664.261 99.4923 650.064 137.709 621.96 146.059C588.282 156.078 559.21 121.451 555.819 90.9945C552.428 60.5384 568.315 28.3949 594.456 12.4543C621.673 -4.11961 656.904 0.832491 681.67 19.6814C693.744 28.7284 702.881 41.1473 707.93 55.3772C708.391 56.698 710.365 55.858 709.948 54.5799Z"
                    fill="none"
                    strokeWidth="2"
                    stroke="white"
                />
            </Path4>
            <Galaxy1 src="img/Galaxy1.svg" alt="Galaxy" />
            <Star1 src="img/Star1.svg" alt="Star" />
            <Stone2 src="img/Stone2.svg" alt="Stone2" />
            <Stone3 src="img/Stone3.svg" alt="Stone3" />
            <Twinkle3 src="img/Twinkle3.svg" alt="Twinkle3" />
            <Ground1 src="img/Ground2.svg" alt="Ground" style={position >= viewport * 7 - 500 && position < viewport * 8 ? { opacity: 1, bottom: "18.7vh" } : { opacity: 0, bottom: "16.7vh" }} />
            <Ground2 src="img/Ground2.svg" alt="Ground" style={position >= viewport * 7 - 500 && position < viewport * 8 ? { opacity: 1, bottom: "18.7vh" } : { opacity: 0, bottom: "16.7vh" }} />
            <Gradient />
        </Container>
    );
};

const Container = styled.div`
height: 800vh;
width: 100%;
position: absolute;
overflow: hidden;
`

// Main Background
const light1Animation = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`

const Light1 = styled.img`
position: absolute;
left: calc(50% - 660px);
top: 17vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
animation: ${light1Animation} 2s ease;
z-index: 3;
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
left: calc(50% - 515px);
top: 53.55vh;
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

const stone1Animation = keyframes`
from {
    top: 50vh;
    opacity: 0;
}

to {
    top: 45vh;
    opacity: 1;
}
`

const Stone1 = styled.img`
position: absolute;
left: calc(50% - 640px);
top: 45vh;
transform: translate(-50%, -50%);
animation: ${stone1Animation} 2s ease;  
transition: all 2s ease;   
z-index: 2;
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
position: absolute;
left: calc(50% + 155px);
top: 54.5vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
animation: ${stones1Animation} 2s ease;  
z-index: 1;
`

const rock1Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: -8.1vh;
}
`

const Rock1 = styled.img`
position: absolute;
left: calc(50% - 590px);
top: -8.1vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock1Animation} 2s ease;  
z-index: 1;
`

const rock2Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 3.55vh;
}
`

const Rock2 = styled.img`
position: absolute;
left: calc(50% + 60px);
top: 3.55vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock2Animation} 2s ease;
z-index: 1;
`

const rock3Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: -1.05vh;
}
`

const Rock3 = styled.img`
position: absolute;
left: calc(50% + 530px);
top: -1.05vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock3Animation} 2s ease;  
z-index: 1;
`

const rock4Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 22.5vh;
}
`

const Rock4 = styled.img`
position: absolute;
left: calc(50% - 270px);
top: 22.5vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock4Animation} 2s ease;  
z-index: 1;
`

const rock5Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 24.5vh;
}
`

const Rock5 = styled.img`
position: absolute;
left: calc(50% + 380px);
top: 24.5vh;
transform: translate(-50%, -50%); 
transition: all 2s ease; 
animation: ${rock5Animation} 2s ease; 
z-index: 1;
`

const rock6Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 27.5vh;
}
`

const Rock6 = styled.img`
position: absolute;
left: calc(50% + 590px);
top: 27.5vh;
transform: translate(-50%, -50%);
transition: all 2s ease;  
animation: ${rock6Animation} 2s ease; 
z-index: 1;
`

const rock7Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 52.5vh;
}
`

const Rock7 = styled.img`
position: absolute;
left: calc(50% + 780px);
top: 52.5vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock7Animation} 2s ease;    
z-index: 1;
`

const rock8Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 48vh;
}
`

const Rock8 = styled.img`
position: absolute;
left: calc(50% + 1005px);
top: 48vh;
transform: translate(-50%, -50%); 
transition: all 2s ease;  
animation: ${rock8Animation} 2s ease; 
z-index: 1;
`

const rock9Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 82.5vh;
}
`

const Rock9 = styled.img`
position: absolute;
left: calc(50% - 660px);
top: 82.5vh;
transform: translate(-50%, -50%); 
transition: all 2s ease;
animation: ${rock9Animation} 2s ease; 
z-index: 1;
`

const rock10Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 97.5vh;
}
`

const Rock10 = styled.img`
position: absolute;
left: calc(50% - 355px);
top: 97.5vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock10Animation} 2s ease;
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
    top: 99.2vh;
}
`

const Rock12 = styled.img`
position: absolute;
width: 213px;
left: calc(50% - 120px);
top: 99.2vh; 
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
    top: 103vh;
}
`

const Rock13 = styled.img`
position: absolute;
left: calc(50% + 165px);
top: 103vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${rock13Animation} 2s ease;
z-index: 1;
`

const rock14Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 96.3vh;
}
`

const Rock14 = styled.img`
position: absolute;
left: calc(50% + 385px);
top: 96.3vh; 
transform: translate(-50%, -50%);
transition: all 2s ease;  
animation: ${rock14Animation} 2s ease;
z-index: 1;
`

const rock15Animation = keyframes`
from {
    top: 110vh;
}

to {
    top: 98vh;
}
`

const Rock15 = styled.img`
position: absolute;
left: calc(50% + 895px);
top: 98vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
animation: ${rock15Animation} 2s ease; 
z-index: 1;
`

// Type Background
const Light2 = styled.img`
position: absolute;
left: calc(50% - 750px);
top: 120vh;
transition: all 2s ease; 
transform: translate(-50%, -50%);  
z-index: 1;
`

const stones2Animation = keyframes`
0% {
    top: 114.5vh;
}

50% {
    top: 111.5vh;
}

100% {
    top: 114.5vh;
}
`

const Stones2 = styled.img`
position: absolute;
rotate: -28deg;
left: calc(50% - 358px);
top: 114.5vh;
transform: translate(-50%, -50%);
transition: all 2s ease;  
animation: ${stones2Animation} 2s linear infinite;  
z-index: 1;
`

const rock16Animation = keyframes`
0% {
    top: 126vh;
}

50% {
    top: 132vh;
}

100% {
    top: 126vh;
}
`

const Rock16 = styled.img`
position: absolute;
left: calc(50% - 75px);
top: 126vh;
transform: translate(-50%, -50%); 
transition: all 2s ease; 
animation: ${rock16Animation} 6s ease-in-out infinite;  
z-index: 1;
`

const rock17Animation = keyframes`
0% {
    top: 151vh;
}

50% {
    top: 154vh;
}

100% {
    top: 151vh;
}
`

const Rock17 = styled.img`
position: absolute;
left: calc(50% - 40px);
top: 151vh;
transform: translate(-50%, -50%); 
transition: all 2s ease; 
animation: ${rock17Animation} 3s ease-in-out infinite; 
z-index: 1;
`

const rock18Animation = keyframes`
0% {
    top: 130.5vh;
}

50% {
    top: 138.5vh;
}

100% {
    top: 130.5vh;
}
`

const Rock18 = styled.img`
position: absolute;
left: calc(50% + 635px);
top: 130.5vh;
transform: translate(-50%, -50%);  
transition: all 2s ease; 
animation: ${rock18Animation} 4s ease-in-out infinite;
z-index: 1;
`

const Path2 = styled.svg`
position: absolute;
left: calc(50% + 505px);
top: 156.5vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;

& path {
    stroke-dasharray: 4150;
    stroke-dashoffset: 2075;
    transition: all 2s ease; 
}
`

const rock19Animation = keyframes`
0% {
    top: 190.8vh;
}

50% {
    top: 186.8vh;
}

100% {
    top: 190.8vh;
}
`

const Rock19 = styled.img`
position: absolute;
rotate: 36deg;
left: calc(50% - 254px);
top: 190.8vh;
transform: translate(-50%, -50%); 
transition: all 2s ease; 
animation: ${rock19Animation} 4s ease-in-out infinite; 
z-index: 1;
`

const rock20Animation = keyframes`
0% {
    top: 174vh;
}

50% {
    top: 169vh;
}

100% {
    top: 174vh;
}
`

const Rock20 = styled.img`
position: absolute;
rotate: -43deg;
left: calc(50% - 32px);
top: 174vh;
transform: translate(-50%, -50%);  
transition: all 2s ease; 
animation: ${rock20Animation} 4s ease-in-out infinite; 
z-index: 1;
`

// Property Background
const Stones3 = styled.img`
rotate: -28deg;
position: absolute;
left: calc(50% - 359px);
top: 314.7vh; 
transform: translate(-50%, -50%); 
transition: all 2s ease;
z-index: 1;
`

const Rock23 = styled.img`
position: absolute;
left: calc(50% + 635px);
top: 330.5vh; 
transform: translate(-50%, -50%); 
transition: all 2s ease;
z-index: 6;
`

const Rock24 = styled.img`
position: absolute;
left: calc(50% - 555px);
top: 356vh;
transform: translate(-50%, -50%);  
transition: all 2s ease;
z-index: 1;
`

const Light3 = styled.img`
position: absolute;
left: calc(50% - 10px);
top: 345vh; 
transform: translate(-50%, -50%); 
transition: all 2s ease;  
z-index: 1;
`

const Meteor = styled.img`
position: absolute;
left: calc(50% - 15px);
top: 353.5vh; 
transform: translate(-50%, -50%);
transition: all 2s ease;  
z-index: 1;
`

const Rock25 = styled.img`
position: absolute;
rotate: 36deg;
left: calc(50% - 255px);
top: 390.8vh; 
transform: translate(-50%, -50%); 
transition: all 2s ease;  
z-index: 1;
`

const Rock26 = styled.img`
position: absolute;
rotate: -43deg;
left: calc(50% - 32px);
top: 390.8vh; 
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;
`

const Rock27 = styled.img`
position: absolute;
rotate: -133.5deg;
width: 168.5px;
left: calc(50% + 410px);
top: 384vh; 
transform: translate(-50%, -50%); 
transition: all 2s ease;
z-index: 1;
`

// System Background
const Light4 = styled.img`
position: absolute;
left: calc(50% - 680px);
top: 430vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;
`

const Path3 = styled.svg`
position: absolute;
left: calc(50% - 490px);
top: 427vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;

& path {
    stroke-dasharray: 4150;
    stroke-dashoffset: 2075;
    transition: all 2s ease; 
}
`

const Twinkle1 = styled.img`
position: absolute;
left: calc(50% + 35px);
top: 476vh;
transition: all 2s ease;  
transform: translate(-50%, -50%); 
z-index: 1;
`

// Partner Background
const UFO = styled.img`
position: absolute;
left: calc(50% - 32rem);
width: 25.7rem;
top: calc(650vh - 26rem);
transform: translate(-50%, -50%); 
transition: all 2s ease;   
z-index: 1;
`

const twink2Animation = keyframes`
0% {
    opacity: 0.2;    
}

50%{
    opacity: 0.8;
}

100%{
    opacity: 0.2;
}
`

const Twinkle2 = styled.img`
position: absolute;
left: calc(50% - 25px);
top: 654vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${twink2Animation} 4s ease infinite;  
z-index: 1;
`

const Light5 = styled.img`
position: absolute;
left: calc(50% + 450px);
top: 627vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;
`

const Path4 = styled.svg`
position: absolute;
left: calc(50% + 565px);
top: 622vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;

& path {
    stroke-dasharray: 4150;
    stroke-dashoffset: 2075;
    transition: all 2s ease; 
}
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
left: calc(50% - 1050px);
top: 645vh;
animation: ${galaxy1Animation} 60s linear infinite;
transform: translate(-50%, -50%);
opacity: 0.6;
z-index: 1; 
`

const Star1 = styled.img`
position: absolute;
left: calc(50% + 620px);
top: 665vh;
transform: translate(-50%, -50%);
opacity: 0.6;
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
left: calc(50% + 385px);
top: 695vh;
animation: ${stone2Animation} 60s linear infinite;
transform: translate(-50%, -50%);
opacity: 0.4;
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
left: calc(50% + 454px);
top: 683vh;
animation: ${stone3Animation} 60s linear infinite;
transform: translate(-50%, -50%);
opacity: 0.4;
z-index: 1; 
`

const twink3Animation = keyframes`
0% {
    opacity: 0.2;    
}

50%{
    opacity: 0.8;
}

100%{
    opacity: 0.2;
}
`

const Twinkle3 = styled.img`
position: absolute;
left: calc(50% + 605px);
top: 702vh;
transform: translate(-50%, -50%);
transition: all 2s ease;
animation: ${twink3Animation} 4s ease infinite;  
z-index: 1;
`

const Ground1 = styled.img`
position: absolute;
left: calc(50% + 470px);
bottom: 18.7vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;
`

const Ground2 = styled.img`
position: absolute;
left: calc(50% - 470px);
bottom: 18.7vh;
transform: translate(-50%, -50%);
transition: all 2s ease; 
z-index: 1;
`

const Gradient = styled.div`
position: absolute;
width: 100%;
height: 300px;
bottom: 40.7vh;
background: linear-gradient(rgba(17, 17, 17, 0.1), rgba(17, 17, 17, 1), rgba(17, 17, 17, 1));
z-index: 1;
`

export default Background