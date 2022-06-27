import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState(" ");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <div className="container">
      <SearchBar func={handleChange} search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;

