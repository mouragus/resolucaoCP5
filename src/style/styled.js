import styled from "styled-components";

export const DivPet = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px 0;
    display: flex;
    flex-direction:column;
    font-family: 'Century Gothic', 'Arial';

    h1{
        margin-left: 50px;
    }
`;

export const Form = styled.form`
    padding: 50px;
    display: flex;
    flex-wrap: wrap;

    & > div {
        min-width: 30%;
        padding: 10px;
    }

    & > div > label{
        font-weight: 700;
    }
    
    & > div:nth-child(6){
        min-width: 100%;
    }
    
    & > div > input,select{
        display: block;
        width: 100%;
        height: 25px;
        border: 1px solid #aaa;
        border-radius: 5px;
    }

    & > div > textarea{
        display: block;
        width: 100%;
        border: 1px solid #aaa;
        border-radius: 5px;
    }

    & button{
        background-color: transparent;
        padding: 10px 20px;
        text-transform: uppercase;
        font-weight: 900;
        border: 3px solid #ED145B;
        cursor: pointer;
        transition: 0.3s all ease;
    }

    & button:hover{
        background-color: #ED145B;
        color: #fff;
    }
` 

export const DivPets = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`