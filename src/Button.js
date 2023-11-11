import styled from 'styled-components';

export const Button = styled.button`

    font-size: 16px;
    padding: 10px 10px;
    color: white;
    background-color: #000000;
    border-radius: 10px;
    min-width: 220px;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s bacckground ease-in;
    }
`;
export const OutLineButton = styled(Button)`
 background-color: white;
 border: 1px solid black;
 color: black;


 &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        /* transition: 0.3s bacckground ease-in; */
    }
   
`;