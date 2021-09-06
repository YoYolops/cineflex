import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    function goBack() {
        history.goBack();
    }

    return (
        <Container>
            <Arrow onClick={goBack}>
                <AiOutlineArrowLeft size={30} color="#E8833A"/>
            </Arrow>
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

const Arrow = styled.div`
    position: absolute;
    top: 0;
    left: 10px;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.p`
    text-align: center;
    font-size: 34px;
    font-weight: 400;
    color: var(--stOrange);
    font-family: 'Roboto', sans-serif;
`

export default Header;