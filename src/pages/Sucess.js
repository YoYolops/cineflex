import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Sucess(props) {
    const history = useHistory();

    useEffect(() => {
        console.log(history.location.state)
    })

    return (
        <p>SUCESSO</p>
    )
}

export default Sucess;  
