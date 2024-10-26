import styled from 'styled-components';

export const Container = styled.div`
    max-width: 300px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
    padding: 20px;
`;

export const Content = styled.div`
    background-color: #2c2c2c;
    width: 100%;
    max-width: 600px;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    gap: 10px;
    color: #e0e0e0;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    color: #e0e0e0;
`;
