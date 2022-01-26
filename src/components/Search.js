import { MdSearch } from "react-icons/md";

const Search = (props) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(event) => props.handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default Search;