import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 10px;

    & > p{
        font-size: 15px;
        margin: 5px;
    }

    & > p > span{
        font-weight: 900;
    }
`

function CardPet(props) {
    return (
        <Container>
            <div>
                imagem
            </div>
            <p>
                <span>Nome:</span>
                {props.pet.nome}
            </p>
            <p>
                <span>Raça:</span>
                {props.pet.raca}
            </p>
            <p>
                <span>Porte:</span>
                {props.pet.porte}
            </p>
            <p>
                <span>Tutor:</span>
                {props.pet.tutor}
            </p>
            <p>
                <span>Contato Tutor:</span>
                {props.pet.contatoTutor}
            </p>
            <p>
                <span>Observação:</span>
                {props.pet.observacao}
            </p>
        </Container>
    )
}

export default CardPet;