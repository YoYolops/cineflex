import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function SessionDay(props) {
    const { weekday, date, showtimes } = props;

    return(
        <Container>
            <Day>{`${weekday} - ${date}`}</Day>
            <div>
                {
                    showtimes.map((time, index) => <Link key={index} to={`/seats/${time.id}`} >{time.name}</Link>)
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 20px;
    margin-bottom: 25px;

    div {
        display: flex;
    }

    div a {
        background-color: var(--stOrange);
        width: 83px;
        height: 43px;
        border-radius: 3px;
        color: #fff;
        margin: 5px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`

const Day = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin: 0px 0px 25px 0px;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`

export default SessionDay;