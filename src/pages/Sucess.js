import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';

import Loading from '../components/Loading';
import API from '../utils/api';

function Sucess() {
    const history = useHistory();
    const [ orderInfo, setOrderInfo ] = useState();
    const [ orderStatus, setOrderStatus ] = useState();

    useEffect(() => {
        async function sendOrder() {
            const { seats, customerName, customerCPF } = history.location.state;
            const response = await API.post("/seats/book-many", {
                ids: seats,
                name: customerName,
                cpf: customerCPF
            })
            setOrderStatus(response.data)
        }
        sendOrder();
        setOrderInfo(history.location.state)
    },[orderInfo, history.location.state])

    if(!orderInfo || orderStatus !== "OK!") return <Loading />

    return (
        <Container>
            <Title>Pedido feito com sucesso!</Title>

            <InfoContainer>
                <InfoTitle>Filme e sessão</InfoTitle>
                <Info>{orderInfo.movie.title}</Info>
                <Info>{`${orderInfo.day.date} ${orderInfo.movie.name}`}</Info>
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Ingressos</InfoTitle>
                {
                    orderInfo.seats.map((seat, index) => <Info key={index}>{`Assento ${seat}`}</Info>)
                }
            </InfoContainer>

            <InfoContainer>
                <InfoTitle>Comprador</InfoTitle>
                <Info>{`Nome: ${orderInfo.customerName}`}</Info>
                <Info>{`CPF: ${orderInfo.customerCPF}`}</Info>
            </InfoContainer>

            <Link to="/"><p>Voltar pra Home</p></Link>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    margin-bottom: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        text-decoration: none;
        width: 225px;
        height: 42px;
        border-radius: 5px;
        background-color: var(--stOrange);
        margin-top: 20px;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const InfoContainer = styled.div`
    width: 100%;
    display: block;
    padding: 10px 25px;
    margin-bottom: 10px;
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    width: 100%;
    text-align: center;
    padding: 40px 0px 20px 0px;
    color: #247A6B;
`

const InfoTitle = styled.h2`
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;
    font-weight: bold;
`

const Info = styled.p`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 5px;
`

export default Sucess;  
