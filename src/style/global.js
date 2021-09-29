import {createGlobalStyle} from "styled-components";
import { normalize } from 'react-style-reset/string';

export const GlobalStyle = createGlobalStyle `

${normalize};

*{padding:0;}

html{
    width: 100%;
    height: 100%;
    color:white;
    font-size: 12px;
    

    body{
        width: 100%;
        height: 100%;
        background: #0D0C09;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`


