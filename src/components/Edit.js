import React, { useRef } from "react";
import {useHistory,useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
import { loadDict } from "../redux/module/word";
import {Box} from "../style/inputStyle";
import {Button} from "../style/button";

import {db} from "../firebase";
import { collection, updateDoc, getDocs, doc } from "firebase/firestore";




const Edit = ()=>{

    const word = useRef();
    const explain = useRef();
    const ex = useRef();

    const list = useSelector(state => state.word.list)
    const dispatch = useDispatch();
    const history = useHistory();
    const indexNum = useParams().index;
    
    const editEvent = async()=>{
        const docRef1 = doc(db, "wordList", list[indexNum].id);

        const editWord = word.current.value === "" ? list[indexNum].word : word.current.value;
        const editExplain = explain.current.value === "" ? list[indexNum].explain : explain.current.value;
        const editEx = ex.current.value === "" ? list[indexNum].ex : ex.current.value;

        await updateDoc(docRef1, {word:editWord,explain:editExplain, ex : editEx, id : list[indexNum].id });
       
        const query = await getDocs(collection(db,'wordList'));
        query.forEach((doc)=>{
            dispatch(loadDict({...doc.data(),id:doc.id}))
        })
        history.push("/");
        console.log(list[indexNum].id)
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