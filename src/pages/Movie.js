import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';

import API from '../utils/api';

import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SessionDay from '../components/SessionDay';

function Movie() {
    const [ movieData, setMovieData ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getMovieData() {
            const response = await API.get(`/movies/${id}/showtimes`);
            setMovieData(response.data);
        }
        getMovieData();
    }, [id])

    if(!movieData) return <Loading />

    return (
        <Container>
            <Title>Selecione o Horário</Title>
            {
                movieData.days.map((day, index) => <SessionDay key={index}  weekday={day.weekday} date={day.date} showtimes={day.showtimes} />)
            }
            <Footer posterImg={movieData.posterURL} movieData={movieData}/>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    margin-bottom: 125px;
`


const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    width: 100%;
    text-align: center;
    padding: 40px 0px;
`

export default Movie;