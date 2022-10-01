import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`

function CardPet(props) {
    return (
        <Container>
            <div>
                imagem
            </div>
            <p>
                <h6>Nome:</h6>
                {props.nome}
            </p>
            <p>
                <h6>Raça:</h6>
                {props.nome}
            </p>
            <p>
                <h6>Porte:</h6>
                {props.nome}
            </p>
            <p>
                <h6>Nome:</h6>
                {props.nome}
            </p>
            <p>
                <h6>Nome:</h6>
                {props.nome}
            </p>
            <p>
                <h6>Nome:</h6>
                {props.nome}
            </p>
        </Container>
    )
}

export default CardPet;