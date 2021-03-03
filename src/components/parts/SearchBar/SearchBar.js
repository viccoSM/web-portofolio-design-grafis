import "./SearchBar.css";
import { useState } from "react";

function SearchBar() {
  // const [searchTerm, setSearcbTerm] = useState
  return (
    <div className="SearchBar">
      <input type="text" placeholder="search..." />
    </div>
  );
}
export default SearchBar;
