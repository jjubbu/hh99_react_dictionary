import React, { useRef } from "react";
import {useHistory,useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
import {editDict} from "../redux/module/word"
import {Box} from "../style/inputStyle";
import {Button} from "../style/button";



const Edit = ()=>{

    const word = useRef();
    const explain = useRef();
    const ex = useRef();

    const list = useSelector(state => state.word.list)
    const dispatch = useDispatch();
    const history = useHistory();
    const indexNum = useParams().index;
    
    const editEvent = ()=>{
        console.log(word.current.value)
        console.log(explain.current.value)
        console.log(ex.current.value)
        
        console.log(indexNum);
        dispatch(editDict(word.current.value,explain.current.value,ex.current.value,indexNum))
        history.push("/");
    }

    return (
        <div>
            
            <Box>
            <div>
                <h1>단어</h1>
                <input type="text" ref={word} placeholder={list[indexNum].word}/>
            </div>
            <div>
                <h1>설명</h1>
                <textarea type="text" ref={explain} placeholder={list[indexNum].explain}/>
            </div>
            <div>
                <h1>예시</h1>
                <textarea type="text" ref={ex} placeholder={list[indexNum].ex}/>
            </div>
            </Box>
            <Button onClick={editEvent}>완료</Button>
        </div>
    )
}

export default Edit;