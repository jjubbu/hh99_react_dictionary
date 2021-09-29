//사전 모듈

//초기값
const initialState = {
    list : [
        
    ],
    edit : ""
}

//액션타입
const LOAD = "word/LOAD";
const Add = "word/Add";
const Edit ="word/Edit";

//액션함수
export const loadDict = (list)=>{
    return {type:LOAD, list}
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