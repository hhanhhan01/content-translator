import React, { useState } from "react";

const LANGUAGES = [
  "광동어(홍콩)", "그린란드어",
  "네덜란드어(네덜란드)", "네덜란드어(벨기에)",
  "노르웨이어", "덴마크어",
  "독일어(독일)", "독일어(스위스)", "독일어(오스트리아)",
  "러시아어", "루마니아어", "말레이어", "베트남어",
  "벵골어(인도)", "스웨덴어",
  "스페인어(라틴 아메리카)", "스페인어(멕시코)", "스페인어(스페인)",
  "아랍어",
  "영어(미국)", "영어(영국)", "영어(인도)", "영어(자동 자막)", "영어(캐나다)",
  "이탈리아어", "인도네시아어", "일본어",
  "중국어(싱가포르)", "태국어", "튀르키예어", "페르시아어",
  "포르투갈어(브라질)", "포르투갈어(포르투갈)",
  "폴란드어",
  "프랑스어(벨기에)", "프랑스어(스위스)", "프랑스어(캐나다)", "프랑스어(프랑스)",
  "힌디어", "핀란드어"
];

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState<{ lang: string; text: string }[]>([]);

  const translate = () => {
    // 🔴 지금은 API 없이 그대로 복제 (체험용)
    const output = LANGUAGES.map(lang => ({
      lang,
      text
    }));
    setResults(output);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>39개 언어 자동 번역 뼈대</h1>

      <textarea
        rows={6}
        style={{ width: "100%" }}
        placeholder="번역할 원문을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />
      <button onClick={translate}>39개 언어 생성</button>

      <hr />

      {results.map((item, index) => (
        <div key={index} style={{
          marginBottom: 16,
          padding: 12,
          border: "1px solid #ddd",
          borderRadius: 6
        }}>
          <strong>{item.lang}</strong>
          <div style={{ whiteSpace: "pre-wrap", marginTop: 6 }}>
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
