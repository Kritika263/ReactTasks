import React, { useState } from "react";
import SearchInput from "./SerachInput";
import Card from "./Card";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <SearchInput setQuery={setQuery} />
      <Card query={query}></Card>
    </div>
  );
}
export default App;
