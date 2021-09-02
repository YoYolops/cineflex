import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

import API from '../utils/api';

import Loading from '../components/Loading';


function Session() {
    const [ seats, setSeats ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getSeats() {
            const response = await API.get(`/showtimes/${id}/seats`);
            setSeats(response.data);
        }
        getSeats();
    }, [id])

    if(!seats) return <Loading />

    return (
        <p>oieee</p>
    )
}

export default Session;