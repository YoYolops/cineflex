import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

import API from '../utils/api';

import Loading from '../components/Loading';
import Seat from '../components/Seat';
import Footer from '../components/Footer';


function Session() {
    const history = useHistory();
    const [ orderData, setOrderData ] = useState(null);
    const [ movieData, setMovieData ] = useState(null);

    const [ customerName, setCustomerName ] = useState("");
    const [ customerCPF, setCustomerCPF ] = useState("");
    const [ selectedSeats, setSelectedSeats ] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        async function getSeats() {
            const response = await API.get(`/showtimes/${id}/seats`);

            setMovieData({
                title: response.data.movie.title,
                posterURL: response.data.movie.posterURL,
                time: response.data.name,
                weekday: response.data.day.weekday,
            })

            setOrderData(response.data);
        }
        if(movieData === null) getSeats();
    }, [id, movieData])

    function confirmOrder() {
        history.push("/sucess", {
            ...orderData,
            seats: selectedSeats,
            customerCPF,
            customerName
        })
    }

    function addSelectedSeat(seat) {
        const newSeats = [...selectedSeats, seat];
        setSelectedSeats(newSeats);
    }

    function removeSelectedSeat(seat) {
        const newSeats = [...selectedSeats]
        const indexRemocao = newSeats.indexOf(seat);
        newSeats.splice(indexRemocao, 1);
        setSelectedSeats(newSeats);
    }

    if(!orderData) return <Loading />

    return (
        <Container>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatsContainer>
                {
                    orderData.seats.map(seat => <Seat key={seat.id} removeSeat={removeSelectedSeat} addSeat={addSelectedSeat}  available={seat.isAvailable} content={seat.name} />)
                }
            </SeatsContainer>

            <InputCell>
                <label>Nome do comprador:</label>
                <input
                    type="text"
                    required={true}
                    placeholder="Digite seu nome..."
                    value={customerName}
                    onChange={ e => setCustomerName(e.target.value) }
                />
            </InputCell>

            <InputCell>
                <label>CPF do comprador:</label>
                <input
                    type="text"
                    required={true}
                    placeholder="Digite seu CPF..."
                    value={customerCPF}
                    onChange={ e => setCustomerCPF(e.target.value) }
                />
            </InputCell>

            <Button onClick={confirmOrder}>Reservar assento(s)</Button>

            <Footer movieData={movieData} />
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    margin-bottom: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const InputCell = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    font-family: 'Roboto', sans-serif;
    width: 327px;

    label {
        margin-bottom: 7px;
    }

    input {
        height: 51px;
        border: 2px solid rgba(195, 207, 217, 0.8);
        border-radius: 3px;
        padding: 7px;
        font-size: 18px;
    }
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    border-radius: 3px;
    background-color: var(--stOrange);
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    outline: none;
    border: none;
    margin-top: 40px;
`

export default Session;