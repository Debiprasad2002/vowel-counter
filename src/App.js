import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const countVowels = (word) => {
    const vowels = 'aeiouAEIOU';
    return word.split('').filter(letter => vowels.includes(letter)).length;
  };

  const handleInputChange = (e) => {
    const word = e.target.value;
    setInput(word);
    setVowelCount(countVowels(word));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vowel Counter</h1>
        <input 
          type="text" 
          value={input} 
          onChange={handleInputChange} 
          placeholder="Enter a word"
        />
        <p>Number of vowels: {vowelCount}</p>
      </header>
    </div>
  );
}

export default App;
