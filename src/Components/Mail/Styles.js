import styled from 'styled-components';

export const DivContainer = styled.div`
    display:flex;
    justify-content:center;
   .form{
        width:30rem;
    }
    margin:5rem auto;
`;

export const InputDiv = styled.div`
  font-size :12px;
  color:red;
  margin :1rem auto;
  input {
    padding : 8px;
    width :100%;
    border : 0.2px solid #f1f1f1;
  }
  textarea{
      width:100%;
      border:0.2px solid;
      min-height:15vh;
  }
` ;

export const Labels = styled.label`
    width :100%;
    &::after{
      content:' *';
      color:red;
    }
` ;

export const Successbtn = styled.button`
    width:100%;
    padding:10px;
    background-color: blue;
    color:white;
    border:none;
    border-radius:5px;
    outline:none;
    cursor:pointer;
    &:disabled{
        background-color:lightblue;
        cursor:default;
    }
    
` ;
