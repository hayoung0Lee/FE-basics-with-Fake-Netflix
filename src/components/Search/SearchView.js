import { useLocation } from "react-router-dom";
import styled from "styled-components";
import PhotoContainerList from "../../container/PhotoContainerList";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchViewStyle = styled.div`
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  color: grey;
  font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function SearchView() {
  let query = useQuery();
  return (
    <>
      <SearchViewStyle>
        <p>Your search for "{query.get("q")}" did not have any matches</p>
        <p>
          Suggestions: 제 친구의 고양이 사진을 보여주려고 합니다. 이름은
          유월이에요
        </p>
      </SearchViewStyle>
      {/* justified로 보여주는 화면 */}
      <PhotoContainerList />
    </>
  );
}

export default SearchView;
