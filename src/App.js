import React from "react";
import {useDispatch} from "react-redux";

import Add from "./components/Add";
import Main from "./components/Main";
import Detail from './components/Detail';
import Edit from './components/Edit'
import BackButton from "./components/BackButton";
import {Route, Switch} from "react-router-dom";
import styled from "styled-components";
import { loadDict } from "./redux/module/word";


import {db} from "./firebase";
import {collection,  getDocs} from "firebase/firestore"


function App() {
  
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async()=>{
    const query = await getDocs(collection(db,'wordList'));
    
    query.forEach((doc)=>{
        dispatch(loadDict({...doc.data(),id:doc.id}))
        console.log(doc.id);
    })
  },[]);

  return (
    <Appbox>
      <BackButton/>
      <Switch>
     <Route path="/" exact component={Main}/>
     <Route path="/add" exact component={Add}/>
     <Route path="/detail/:index" component={Detail}/>
     <Route path="/edit/:index" component={Edit}/>
     </Switch>
    </Appbox>
  );
}

export default App;

const Appbox = styled.section`
position: relative;
width: 300px;
height: 530px;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
`

const GoBack = styled.a`

position: absolute;
top: -28px;
left: 20px;
z-index: 1000;
display: block; //버튼 누르면 보이게 하기

`
