import { useNavigate } from "react-router-dom";

function SearchQuery() {
  const navigate = useNavigate();

  return (
    <input
      className="w-full lg:w-1/2 py-3 px-5 text-base rounded-md transition-all border-none"
      type="text"
      placeholder="Search balance of any Ethereum address"
      onChange={(e) => navigate(`address/${e.target.value}`)}
    ></input>
  );
}

export default SearchQuery;
