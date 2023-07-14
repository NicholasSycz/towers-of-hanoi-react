import styled from 'styled-components';

export const TowerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10px;
    height: 200px;
    border: 1px solid black;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: #efeeee;
    z-index: 1;
`;

export const DiskContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    flex-grow: 1;
    height:100%
`;