import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import API from '../utils/api';

import MoviePoster from '../components/MoviePoster';
import Loading from '../components/Loading';

function Home() {
    const [ movies, setMovies ] = useState(null);

    useEffect(() => {
        async function getMovies() {
            const response = await API.get('/movies');
            setMovies(response.data)
        }
        getMovies();
    }, [])

    if(!movies) return <Loading />

    return (
        <Container>
            <Title>Selecione o Filme</Title>
            <Content>
                {
                    movies.map(movie => <MoviePoster key={movie.id} title={movie.title} id={movie.id}  imgSrc={movie.posterURL}/>)
                }
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
`

const Content = styled.section`
    background-color: inherit;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    width: 100%;
    text-align: center;
    padding: 40px 0px;
`

export default Home;