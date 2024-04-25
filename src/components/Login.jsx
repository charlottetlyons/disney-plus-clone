import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    height: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 40px;
`

const BackgroundImage = styled.div`
    background-image: url('/images/login-background.jpg');
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const CallToAction = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
` 

const LogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-width: 1px;
    display: block;
    width: 100%;
`

const LogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

const GetAllThereButton = styled.a`
    font-weight: bold;
    color: #f9f9f9;    
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    text-transform: uppercase;

    &:hover {
        background-color: #0483ee;
    }

    &:active {
        background-color: #023f8a;
    }
`

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 16px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

const Login = () => {
    return (
        <Container>
            <Content>
                <BackgroundImage />
                <CallToAction>
                    <LogoOne src="/images/cta-logo-one.svg" alt="logo-one" />
                    <GetAllThereButton>GET ALL THERE</GetAllThereButton>
                    <Description>Choose a Disney Bundle: Duo with all the best Disney+ and Hulu titles, or Trio including epic sports from ESPN+</Description>
                    <LogoTwo src="/images/cta-logo-two.png" alt="logo-two" />
                </CallToAction>
            </Content>
        </Container>
    );
}

export default Login;