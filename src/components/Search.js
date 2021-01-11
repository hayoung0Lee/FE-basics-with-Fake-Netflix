import { useLocation } from "react-router-dom";

// query parameters: https://reactrouter.com/web/example/query-parameters
// ex: http://localhost:3000/search?q=5555

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  let query = useQuery();

  return <div>search {query.get("q")}</div>;
}

export default Search;
