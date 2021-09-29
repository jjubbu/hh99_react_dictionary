//사전 모듈

//초기값
const initialState = {
    list : [
        {word:'하나',explain:'1을 말한다',ex:'1의 예시'},
        {word:'둘',explain:'2를 말한다',ex:'2의 예시'},
        {word:'셋',explain:'3을 말한다',ex:'3의 예시'},
        {word:'넷',explain:'4를 말한다',ex:'4의 예시'}
    ]
}

//액션타입
const LOAD = "word/LOAD";
const Add = "word/Add";
const Edit ="word/Edit";

//액션함수
export const loadDict = (x)=>{
    return {type:LOAD, list:x}
}
export const addDict = (x,y,z) =>{
    return {type:Add, Word: x, Explain:y, Ex:z}
}
export const editDict = (x,y,z,index) => {
    return{type:Edit,Word: x, Explain:y, Ex:z,index}
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case "word/LOAD":
            const newLoad = [...state.list,action.list]
            return {list:newLoad}
        case "word/Add":
            const addList = [{word:action.Word, explain:action.Explain, ex:action.Ex}]
            const newList = [...state.list,...addList]
            return {list:newList}
        case "word/Edit":
            const list = state.list[action.index]
            list.word = action.Word.length > 0 ? action.Word : list.word
            list.explain = action.Explain.length > 0 ? action.Explain : list.explain
            list.ex = action.Ex.length > 0 ? action.Ex : list.ex
            return state
        default:
            return state;
    }
}