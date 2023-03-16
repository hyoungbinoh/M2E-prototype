import React from "react";
import styled from "styled-components";

import BackgroundMo1 from "./BackgroundMo1";
import BackgroundMo2 from "./BackgroundMo2";

const BackgroundMo = () => {
    return (
        <Container>
            <BackgroundMo1 />
            <BackgroundMo2 />
        </Container>
    );
};

const Container = styled.div`
height: calc(100vh + 5654.46px);
width: 100%;
position: absolute;
overflow: hidden;
background-color: #000;
`

export default BackgroundMo
