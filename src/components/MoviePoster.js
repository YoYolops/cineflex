import React from 'react';
import styled from "styled-components";

import { Link } from "react-router-dom";

function MoviePoster(props) {
    return (
        <Background height={props.height} width={props.width}>
            <Link to={{
                pathname: `/sessions/${props.id}`,
                state: {
                    movieId: props.id,
                    title: props.title
                }
            }}>
                <PosterImage imageSrc={props.imgSrc} />
            </Link>
        </Background>        
    )
}

const Background = styled.div`
    height: ${props => props.height ?? '209px'};
    width: ${props => props.width ?? '145px'};
    box-shadow: 0.5px 0px 10px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-bottom: 15px;
    background-color: #fff;

    a {
        width: 100%;
        height: 100%;
    }
`

const PosterImage = styled.div`
    background-image: url("${props => props.imageSrc}");;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
`

export default MoviePoster;