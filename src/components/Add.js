import React, {useRef} from "react";
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux";
import { loadDict } from "../redux/module/word";
import {Box} from "../style/inputStyle"
import {Button} from "../style/button"
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";


const Add = () => {

    const word = useRef();
    const explain = useRef();
    const ex = useRef();
    const history = useHistory();
    const dispatch = useDispatch()
    const addEvent = async() => {
        console.log(word.current.value)
        console.log(explain.current.value)
        console.log(ex.current.value)

        await addDoc (collection(db, 'wordList'), { word:word.current.value , explain: explain.current.value, ex:  ex.current.value})
        const query = await getDocs(collection(db,'wordList'));
        query.forEach((doc)=>{
            console.log(doc.data())
            dispatch(loadDict(doc.data()))
         })
        
        history.push("/");
    }

    return (
        <div>
            <Box>
                <div>
                    <h1>단어</h1>
                    <input type="text" ref={word}/>
                </div>
                <div>
                    <h1>설명</h1>
                    <textarea ref={explain}/>
                </div>
                <div>
                    <h1>예시</h1>
                    <textarea ref={ex}/>
                </div>
            </Box>
            <Button onClick={addEvent}>완료</Button>
        </div>
    )
}

export default Add;
