import "./SearchBar.css";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useHistory } from "react-router";

function SearchBar() {
  const [searchTerm, setSearcbTerm] = useState([]);
  const history = useHistory();
  const handleChange = (e) => {
    setSearcbTerm(e.target.value);
    console.log(searchTerm);
  };
  const handleClick = () => {
    const searchWork = localStorage.setItem(
      "searchWork",
      JSON.stringify(searchTerm)
    );
    history.push(`/dash/search/${searchTerm}`);
    console.log(searchTerm);
  };
  return (
    <div className="SearchBar">
      <div className="form-outline">
        <input
          className="form-control"
          type="text"
          placeholder="search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <BiSearch />
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
