import React, { useState } from "react";
import "./SearchInput.css";
function SearchInput({ setQuery }) {
  const [input, setInput] = useState("");
  function handleSubmit() {
    setQuery(input);
  }
  return (
    <div className="input-field">
      <input
        name="name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="input-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default SearchInput;
