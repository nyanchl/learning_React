import { useState } from 'react';
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  function CountUp() {
    setIndex(index + 1);
  }
  function CountReset() {
    setIndex(0);
  }
  function linkClick(e) {
    e.preventDefault();
    alert("nyanchlポートフォリオへのリンクです");
  }
  return (
    <div className="App">
      <p>this is my portfolio</p>
      <button onClick={CountUp}>touch</button>
      <p>({index})</p>
      <a href="https://nyanchl.github.io/portfolio/" onClick={linkClick}>nyanchlポートフォリオ</a>
      <button onClick={CountReset} disabled>reset</button>
      <form>
        <textarea/>
      </form>
    </div>
  );
}

export default App;
