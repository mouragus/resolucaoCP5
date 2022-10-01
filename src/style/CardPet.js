import styled from 'styled-components';

export const StyledContainer = styled.div`
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: 250px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 10px;

    & > div{
        text-align: center;
    }

    & > div > img{
        height: 150px;
        width: 150px;
        object-fit: cover;
        border-radius: 300px;
        border: 4px solid #ED145B;
    }

    & > p{
        font-size: 15px;
        margin: 5px;
    }

    & > p > span{
        font-weight: 900;
    }
`