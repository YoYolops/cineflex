import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

import API from '../utils/api';

import Loading from '../components/Loading';
import Seat from '../components/Seat';
import Footer from '../components/Footer';


function Session() {
    const [ orderData, setOrderData ] = useState(null);
    const [ movieData, setMovieData ] = useState(null);

    const [ customerName, setCustomerName ] = useState("");
    const [ customerCPF, setCustomerCPF ] = useState("");

    const { id } = useParams();

    useEffect(() => {
        async function getSeats() {
            const response = await API.get(`/showtimes/${id}/seats`);

            setMovieData({
                title: response.data.movie.title,
                posterURL: response.data.movie.posterURL,
                time: response.data.name,
                weekday: response.data.day.weekday
            })

            setOrderData(response.data);
        }
        getSeats();
    }, [id])

    if(!orderData) return <Loading />

    return (
        <Container>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatsContainer>
                {
                    orderData.seats.map(seat => <Seat available={seat.isAvailable} content={seat.name} />)
                }
            </SeatsContainer>

            <Cell>
                <label>Nome do comprador:</label>
                <input
                    type="text"
                    required={true}
                    placeholder="Digite seu nome..."
                    value={customerName}
                    onChange={ e => setCustomerName(e.target.value) }
                />
            </Cell>

            <Cell>
                <label>CPF do comprador:</label>
                <input
                    type="text"
                    required={true}
                    placeholder="Digite seu CPF..."
                    value={customerCPF}
                    onChange={ e => setCustomerCPF(e.target.value) }
                />
            </Cell>

            <Footer movieData={movieData} />
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    width: 100%;
    text-align: center;
    padding: 40px 0px 20px 0px;
`

const SeatsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
`

const Cell = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 40px;
`

export default Session;