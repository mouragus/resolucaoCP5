import React from 'react';
import { StyledContainer } from '../style/CardPet';

function CardPet(props) {
    return (
        <StyledContainer>
            <div>
                <img src={props.pet.imagem} alt=""/>
            </div>
            <p>
                <span>Nome:</span> {props.pet.nome}
            </p>
            <p>
                <span>Raça:</span> {props.pet.raca}
            </p>
            <p>
                <span>Porte:</span> {props.pet.porte}
            </p>
            <p>
                <span>Tutor:</span> {props.pet.tutor}
            </p>
            <p>
                <span>Contato Tutor:</span> {props.pet.contatoTutor}
            </p>
            <p>
                <span>Observação:</span> {props.pet.observacao}
            </p>
        </StyledContainer>
    )
}

export default CardPet;