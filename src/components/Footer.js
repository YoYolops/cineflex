import React from 'react';
import styled from 'styled-components';

import MoviePoster from './MoviePoster';

function Footer(props) {
    const { title, weekday, time, posterURL} = props.movieData;

    return (
        <Container>
            <section>
                <MoviePoster height="89px" width="64px" imgSrc={posterURL} />
            </section>
            <RightSection>
                <h2>{title}</h2>
                <p>{weekday && time ? `${weekday} - ${time}` : null}</p>
            </RightSection>
        </Container>
    )
}

const Container = styled.footer`
    width: 100%;
    background-color: var(--stGrey);
    height: 117px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    bottom: 0;
    border-top: 2px solid #9EADBA;

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding-left: 10px;
    }

    section * {
        margin: 0;
    }
`

const RightSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    h2 {
        font-size: 20px;
        width: 100%;
        margin-bottom: 8px;
        font-weight: bold;
    }

    p {
        font-size: 18px;
        text-align: left;
        width: 100%;
    }
`

export default Footer;