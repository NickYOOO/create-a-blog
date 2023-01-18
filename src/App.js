import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(0);
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      { 
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4 onClick={()=>{ setModal(true); setTitle(i); }}>{ 글제목[i] }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }

      {
        modal == true ? <Modal title={title} 글제목={글제목} /> : null
      }


    </div>
  );
}
function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
