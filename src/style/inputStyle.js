import styled from "styled-components";


export const Box = styled.section `
width: 220px;
padding: 20px;
background: #FFFFFF;
border-radius: 10px;

div{
    margin-bottom: 20px;
    h1{
    color: #000;
    font-size: 1.5rem;
    height: 23px;
    margin: 0 0 10px 0;
}
input,textarea{
    width: 100%;
    outline-style: none;
    border: 1px solid rgba(204, 204, 204, 0.8);
    box-sizing: border-box;
    border-radius: 5px;
}
input{
    height: 25px;
}
textarea{
    resize: none;
    height: 100px;
}
}

`;