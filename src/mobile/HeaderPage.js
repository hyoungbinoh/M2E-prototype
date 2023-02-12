import React from "react";
import styled from "styled-components";

const HeaderPage = () => {
    return(
        <Container>
            <Business>
                <a href="#"><img src="img/MarketPlace.svg" alt="marketplace"/></a>
                <a href="#"><img src="img/WhitePapers.svg" alt="whitepapers"/></a>
            </Business>
            <SocialNetworks>
                <a href="#"><img src="img/Discord.svg" alt="discord"/></a>
                <a href="#"><img src="img/Twitter.svg" alt="Twitter"/></a> 
            </SocialNetworks>
        </Container>
    )
}

const Container =  styled.div`
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`

const Business = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & a {
        margin: 20px;
    }
    & img {
        width: 131px;
    }
`

const SocialNetworks =  styled.div`
    margin: 50vh;
    transition: all 2s ease;
    display: flex;
    & a {
        margin: 8px;
    }
    .social-network {
        font-size: 30px;
        color: #fff;
        margin: 20px 10px;
    }
`

export default HeaderPage