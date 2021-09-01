import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import API from '../utils/api';

import MoviePoster from '../components/MoviePoster';

function Home() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        console.log("oi")
        async function getMovies() {
            const response = await API.get('/movies');
            setMovies(response.data)
        }
        getMovies();
    }, [])

    return (
        <Container>
            <Title>Selecione o Filme</Title>
            <Content>
                <p>oi</p>
                {
                    movies.map(movie => <MoviePoster imgSrc={movie.posterURL}/>)
                }
                <p>oi2</p>
            </Content>
        </Container>
    )
}

const Container = styled.div``

const Content = styled.section`

    background-color: inherit;
`

const Title = styled.h1``

export default Home;