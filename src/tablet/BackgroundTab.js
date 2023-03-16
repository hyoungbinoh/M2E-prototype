import React from "react";
import styled from "styled-components";

import BackgroundTab1 from "./BackgroundTab1";
import BackgroundTab2 from "./BackgroundTab2";

const BackgroundTab = () => {
    return (
        <Container>
            <BackgroundTab1 />
            <BackgroundTab2 />
        </Container>
    );
};

const Container = styled.div`
height: calc(100vh + 552.7rem);
width: 100%;
position: absolute;
overflow: hidden;
background-color: #000;
`

export default BackgroundTab
