import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <Text>CINEFLEX</Text>
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: 67px;
    background-color: var(--stGrey);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #9EADBA;
`

const Text = styled.p`
    text-align: center;
    font-size: 34px;
    font-weight: 400;
    color: var(--stOrange);
    font-family: 'Roboto', sans-serif;
`

export default Header;