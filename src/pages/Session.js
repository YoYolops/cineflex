import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';

import API from '../utils/api';

import Footer from '../components/Footer';

function Session() {
    const [ movieData, setMovieData ] = useState({});
    const { id } = useParams();
    console.log(movieData)

    useEffect(() => {
        async function getMovieData() {
            const response = await API.get(`/movies/${id}/showtimes`);
            setMovieData(response.data);
        }
        getMovieData();
    }, [])

    return (
        <Container>
            <Title>Selecione o Filme</Title>
            <Footer posterImg={movieData.posterURL} movieData={movieData}/>
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
    padding: 40px 0px;
`

export default Session;