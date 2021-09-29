import React from "react";
import styled from "styled-components";

const SliderButton = () => {
    return (
        <ButtonBox>
                <button onClick={() => {document.getElementById("nextButton").click();}} className="Up">
                    아래꺼보기
                </button>
                <button onClick={() => {document.getElementById("prevButton").click();}} className="Down">
                    위애꺼보기
                </button>
            </ButtonBox>
    )
}

//슬라이더 버튼
const ButtonBox = styled.div `

position: absolute;
display: flex;
flex-direction: column;
width: 60px;
height: 100px;
justify-content: space-between;
right: -76px;
bottom:0;

button{
height: 40px;
border-radius: 5px;
background: #9787FF url('/img/button.svg') center no-repeat;
border: none;
text-indent:-9999px;
&.Down{
    transform: rotate(180deg);
}
&:hover{
    opacity: .8;
}

}


`

export default SliderButton;