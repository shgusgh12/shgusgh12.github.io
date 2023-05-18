import { useState } from "react";
import "./App.css";

function App() {
  let [post, setPost] = useState(["북문 맛집", "정문 맛집", "서문 맛집","동성로 맛집"]);
  let [count, setCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [text, setText] = useState("");
  let [idx, setIdx] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h2>맛집 blog</h2>
      </div>
      {post.map((k, i) => {
        return (
          <div>
            <div
              className="list"
              onClick={(e) => {
                e.stopPropagation();
                setModal((cur) => !cur);
                setIdx(i);
              }}
            >
              <h4>
                {post[i]}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...count];
                    copy[i] = copy[i] + 1;
                    setCount(copy);
                  }}
                >
                  버튼
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    let copy = [...post];
                    copy.shift();
                    setPost(copy);
                  }}
                >
                  삭제
                </button>
                {count[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          </div>
        );
      })}
      <div>{modal ? <Modal post={post} idx={idx}></Modal> : null}</div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...post];
          copy.unshift(text);
          setPost(copy);
        }}
      >
        글발행
      </button>
    </div>
  );
}

const Modal = (props) => {
  let [detail, setDetail] = useState("");
  let [doc, setDoc] = useState('')
  return (
    <div className="modal">
      <h4>{props.post[props.idx]}</h4>
      <p>날짜</p>
      <p>{doc}</p>
      <input type="text" onChange={(e) => {
        setDetail(e.target.value)
      }}></input>
      <button onClick={() => {
        let copy = [...doc]
        copy.unshift(detail)
        setDoc(copy) 
      }}>입력</button>
    </div>
  );
};

export default App;
