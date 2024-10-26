import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: #3a3a3a;
    color: #e0e0e0;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #565656;
    }

    &:active {
        background-color: #1e1e1e;
    }
`