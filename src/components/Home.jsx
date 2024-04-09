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

const Home = () => {
    return (
        <Container>
            <Content>
                <h1>Disney+</h1>
                <a href="/">Click Here!</a>
            </Content>
        </Container>
    );
}

export default Home;