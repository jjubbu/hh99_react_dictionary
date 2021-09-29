import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import word from "./module/word"

import thunk from "redux-thunk"

const middelewares = [thunk];
const enhancer = applyMiddleware(...middelewares);

//여러개의 리듀서를 하나로 합치기
const rootReducer = combineReducers({word});

//rootReducer로 스토어(저장소)를 만들어준당!
const store = createStore(rootReducer, enhancer);

//만든 스토어를 내보낼 수 있게 만들어준당!
export default store;