import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState([]);

  const submit = (e) => {
    e.preventDefault();

    let num = parseInt(amount);
    if (isNaN(num) || num <= 0) {
      setResult(["Please enter a valid number"]);
      return;
    }

    let notes = [200, 100, 50];
    let remaining = num;
    let output = [];
    
    for (let note of notes) {
      let count = Math.floor(remaining / note);
      remaining = remaining % note;
      if (count > 0) {
        output.push(`${note} notes: ${count}`);
      }
    }
    
    setResult(output);
  };

  return (
    <div className="container">
      <h1>ATM</h1>
      <form onSubmit={submit}>
        <input 
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter the amount"
        />
        <button type="submit">Withdraw</button>
      </form>
      <div>
        {result.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default App;