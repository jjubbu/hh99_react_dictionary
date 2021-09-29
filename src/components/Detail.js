import React from "react";
import {useParams,useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import styled from "styled-components";
import {Button} from "../style/button"
import { loadDict } from "../redux/module/word";

import { db } from "../firebase";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";



const Detail = ()=>{
  // eslint-disable-next-line react-hooks/exhaustive-deps

   const indexNum = useParams().index;
   const dictionary = useSelector((state)=>state.word.list);
   const history = useHistory();
    const dispatch = useDispatch()

   const Delete = async() => {
        const docRef2 = doc(db, "wordList", dictionary[indexNum].id);
        await deleteDoc(docRef2);
        const query = await getDocs(collection(db, 'wordList'));
        query.forEach((doc) => {
            dispatch(loadDict({
                ...doc.data(),
                id: doc.id
            }))
        })

        history.push("/");
   }

    return (
        <DetailBox>
            
            <section>
                    <div>
                        <p>{dictionary[indexNum].word}</p>
                        <p>{dictionary[indexNum].explain}</p>
                        <p>{dictionary[indexNum].ex}</p>
                    </div>
                    <button onClick={Delete}>단어 삭제</button>
            </section>
            <Button onClick={()=>{history.push("/edit/"+indexNum)}}>이 단어를 편집하기</Button>
        </DetailBox>
    )
}

export default Detail;

const DetailBox = styled.section`


width: 260px;
background: #FFFFFF;
border-radius: 10px;
color:#000;
cursor: pointer;
height: 423px;


section{

margin: 20px ;

p{max-width:220px}

p:nth-child(1){
    //단어 명칭
    position: relative;
    font-size: 2rem;
    margin-bottom: 30px;
    width: max-content;
    overflow: ellipsis;
    word-break:break-all;
    &::after{
        content: "";
        display: block;
        width: 100%;
        height: 5px;
        background-color:#ffde00;
        position: absolute;
        bottom: -10px;
        mix-blend-mode: multiply;
    }
}
p:nth-child(2){
    //단어 설명
    font-size: 1.5rem;
    color: #808080;
    margin-bottom: 20px;
    max-height: 306px;
    word-break:break-all;
}
p:nth-child(3){
    //예시
    font-size: 1rem;
    color: #9787FF;
    height: 15px;
    word-break:break-all;
}
 
button{
    padding: 5px 10px;
    border: none;
    background:#ccc;
    border-radius: 5px;
    position: absolute;
    bottom: 73.5px;
    right: 40px;
}

}
`