import { useLocation } from "react-router-dom";
import styled from "styled-components";

// query parameters: https://reactrouter.com/web/example/query-parameters
// ex: http://localhost:3000/search?q=5555

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchViewStyle = styled.div`
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  color: grey;
`;

function SearchView() {
  let query = useQuery();

  return (
    <SearchViewStyle>
      <div>
        <span>Expore titles related to: {query.get("q")}</span>
      </div>
    </SearchViewStyle>
  );
}

export default SearchView;
