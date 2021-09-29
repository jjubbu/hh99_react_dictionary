import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useLocation } from 'react-router-dom'



const BackButton = () => {

    const history = useHistory();
    const location = useLocation();
    if (location.pathname === '/') return null;
    return (
        <GoBack
            onClick={() => {
                history.goBack();
            }}
            className="GoBack">{String("<뒤로가기")}</GoBack>
    );
}


const GoBack = styled.a`

position: absolute;
top: -28px;
left: 20px;
z-index: 1000;
display: block; //버튼 누르면 보이게 하기

`
export default BackButton;