import React from 'react';
import styled from "styled-components";

function MoviePoster(props) {
    return (
        <Background>
            <PosterImage imageSrc={props.imgSrc} />
        </Background>        
    )
}

const Background = styled.div`
    max-height: 209px;
    max-width: 145px;
    box-shadow: 0.5px 0px 10px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`

const PosterImage = styled.div`
    background-image: ${props.imageSrc};
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
`

export default MoviePoster;