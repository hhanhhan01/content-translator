import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const translate = () => {
    // 나중에 여기에 번역 API 연결할 예정
    setResult(text);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Content Translator</h1>

      <textarea
        rows={6}
        style={{ width: "100%" }}
        placeholder="번역할 내용을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={translate}>번역하기</button>

      <h3>결과</h3>
      <div style={{ whiteSpace: "pre-wrap" }}>{result}</div>
    </div>
  );
}

export default App;
