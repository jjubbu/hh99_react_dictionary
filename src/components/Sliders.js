import React from "react";
import {useHistory} from "react-router-dom"
import Slider from "react-slick";
import {useSelector} from "react-redux";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import styled from "styled-components";


function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            id="prevButton"
            style={{
                ...style,
                position: "absolute"
            }}
            onClick={onClick}/>
    );
}
function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            id="nextButton"
            style={{
                ...style,
                position: "absolute"
            }}
            onClick={onClick}/>
    );
}

const Sliders = () => {

    const history = useHistory();
    const list = useSelector(state => state.word.list)

    //슬라이더 세팅
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        // adaptiveHeight:true,

        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
    };

    
    

    return(
        <SlickSlider {...settings}>

                {
                    list.map((list, index) => {
                        const english = /[a-zA-Z]/; 
                        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
                        let card_word;
                        if (list.word.length > 14 && english.test(list.word)){
                            card_word = list.word.slice(0,14) +"...";
                        }else if (list.word.length > 8 && korean.test(list.word)){
                            card_word = list.word.slice(0,8) +"...";
                        }else{
                            card_word = list.word;
                        }


                        return (
                            <WordBox
                                className="Scroll"
                                key={index}
                                onClick={() => {
                                    history.push("/detail/" + index)
                                }}>
                                <p>{card_word}</p>
                                <p>{list.explain}</p>
                                <p>{list.ex}</p>
                            </WordBox>
                        )
                    })
                }

            </SlickSlider>
    )
}

//슬라이더
const SlickSlider = styled(Slider)`

width: 100%;
height: 480px;
/* margin-top: 20px; */
overflow:hidden;

`;

//단어박스 디자인
const WordBox = styled.li `
width: 100%;
background: #FFFFFF;
border-radius: 10px;
color:#000;
cursor: pointer;
height: 150px;
margin-bottom: 11px;


p{margin:0 20px 0 20px; word-break:break-all;}

p:nth-child(1){
    //단어 명칭
    position: relative;
    font-size: 2rem;
    height: 30px;
    margin-bottom: 5px;
    margin-top: 20px;
    width: fit-content;
    &::after{
        content: "";
        display: block;
        width: 100%;
        height: 10px;
        background-color:#ffde00;
        position: absolute;
        bottom: 5px;
        mix-blend-mode: multiply;
    }
}
p:nth-child(2){
    //단어 설명
    font-size: 1.5rem;
    color: #808080;
    margin-bottom: 16px;
    height: 43px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.8rem;
    
}
p:nth-child(3){
    //예시
    font-size: 1rem;
    color: #9787FF;
    height: 15px;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
`;

export default Sliders;