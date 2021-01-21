import { Redirect } from "react-router-dom";
import { useState } from "react";
import debounce from "../utils/debounce";

function SearchBtn() {
  const [searchWord, setSearchWord] = useState("");

  const searchInit = (e) => {
    // 지정된 시간동안 이 함수가 여러번 호출되면 제일끝에 200ms동안 아무일도 없으면 검색하기!
    setSearchWord(e.target.value);
  };

  // debounce에 searchInit 함수를 넘겨준다. 그래서 debounceSearch에 event를 넘겨줘서 처리하는 함수를 만든다.
  const debounceSearch = debounce(searchInit, 200);

  return (
    <div>
      <input
        onChange={(e) =>
          debounceSearch(e).then((result) => console.log("실행 여부", result))
        }
      />
      {/* search Word가 없으면 browse로 redirect */}
      {!searchWord && (
        <Redirect
          to={{
            pathname: "/browse",
          }}
        />
      )}
      {/* search word가 있으면 그에 해당하게 이동 */}
      {searchWord && (
        <Redirect
          to={{
            pathname: "/search",
            search: `?q=${searchWord}`,
          }}
        />
      )}
    </div>
  );
}

export default SearchBtn;
