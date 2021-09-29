import React from "react";
import {useHistory} from "react-router-dom"
import styled from "styled-components";
import {Button} from "../style/button"
import Sliders from "./Sliders";
import SliderButton from "./SliderButton";


const Main = () => {

    const history = useHistory();

    return (
        <MainBox>
            <SliderButton/>
            <Sliders/>
            <Button onClick={() => {history.push("/add");}} className="addButton">
                사전에 단어를 추가하기
            </Button>
        </MainBox>
    )
}

export default Main;

const MainBox = styled.div `
width: 260px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

.addButton{
    background-color: #ffde00;
    color:#000;
}
`