import styled from 'styled-components';

export const DivContainer = styled.div`
    display:flex;
    justify-content:center;
    margin:5rem auto;
`;

export const StyleDiv = styled.div`
    text-align:center;
    button{
        padding:10px;
        border:0.2px solid #f1f1f1;
        border-radius:5px;
        width:7rem;
        &:hover{
            background-color:red;
            color:white;
            cursor:pointer;
        }
    }
`;
export const Headings = styled.div`
    text-align:center;
    h2{
        font-size:4rem;
        font-weight:400;
    }
`;
