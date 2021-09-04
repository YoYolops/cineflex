import React, { useState } from 'react';
import styled from 'styled-components';

function Seat(props) {
    const [ selected, setSelected ] = useState(false);

    function selectSeat() {
        if(selected) props.removeSeat(props.content)
        else props.addSeat(props.content)
        setSelected(!selected);
    }

    return (
        <Circle selected={selected} available={props.available} onClick={selectSeat}>
            <p>{props.content}</p>
        </Circle>
    )
}

const Circle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: ${
        props => props.available
            ? props.selected ? "#8DD7CF" : "var(--stGrey)"
            : "#FBE192"
    };
    margin: 6px 3px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--stGrey);
`

export default Seat;