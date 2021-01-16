// main으로 보이는곳,
// 프로파일을 선택했으면 리스트를 보여주고
// 아니면 프로파일 선택 창 선택하고 로컬스토리지 업데이트
import styled from "styled-components";
import ThumbnailList from "../ThumbnailList";
import InfiniteContents from "./InfiniteContents";
import { useState, useRef } from "react";

const MainWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 25%;
  padding-left: 5%;
  padding-right: 5%;
  width: 90%;
  background: url(${(props) => props.bg}) no-repeat top center;
  background-size: 100%;
  background-color: red;
`;

function Main() {
  const [listCount, setListCount] = useState(2);
  const main = useRef();
  const throttling = (fn, waits) => {
    let throttleCheck = null; // 처음에 false로 생성

    return (...args) => {
      if (!throttleCheck) {
        console.log("wheel event 동작하는 것");
        // false이면 setTimeout을 설정할 수 있다. 그다음에는 throttle은 뭔가를 가리키고 있다.
        // 그러고 나서 event가 발생하는 동안은 이 if block안에 못들어와서 이걸 실행할 수가 없다.
        // 얘가 끝나야 다시 새로운 동작을 등록할 수 있다. 그리고 처음에 시작한건 지정한 시간이 지나면 한번은 실행된다.
        // debounce는 동작이 연달아 쭉있으면 앞에껀 다 timer가 클리어되는데 반해 얘는 쭉있으면 그래도 지정한 시간만다 한번은 실행한다.
        throttleCheck = setTimeout(() => {
          fn(...args);
          throttleCheck = null;
        }, waits);
      } else {
        console.log("wheel event 동작안하는것");
      }
    };
  };

  // console.log("window", window.innerHeight, window.scrollY);
  const listHeight = 148;
  const infiniteLoad = () => {
    const totalHeight = document.documentElement.offsetHeight; // 현재 문서의 전체 높이(가려진것도 다 포함)
    const hiddenHeight = document.documentElement.scrollTop; // 위에 스크롤해서 가려진 부분의 높이, 즉 내가 스크롤해서 가려진 부분의 높이
    const clientHeight = document.documentElement.clientHeight; // 현재 화면의 높이
    const check = hiddenHeight + clientHeight; // 그래서 즉, 가려진 높이(hiddenHeight)와 현재 화면의 높이를 합하면 현재 문서의 전체 높이가된다.
    // 즉 그래서 스크롤을 끝까지 하면 문서크기랑 check가 같아진다.
    // 그래서 문서의 전체 높이보다 조금작을때까지 보다 커지면, 즉 스크롤 쭉해서 완전 바닥까지 다 내리기 직전에 listCount를 하나 증가시켜서 새로운 list를 그려준다.
    if (check > totalHeight - listHeight * 3) {
      console.log("load more");
      setListCount((listCount) => listCount + 1);
    }
  };
  // throttle
  const throttleWheel = throttling(infiniteLoad, 200);

  return (
    <>
      <MainWrapper
        ref={main}
        bg={"https://picsum.photos/seed/picsum/1000/400/?blur"}
        onWheel={(e) => {
          throttleWheel();
        }}
      >
        {/* loadCount는 각 리스트 내에서 이미지가 몇개 보일지 체크 */}
        <ThumbnailList
          name="Continue Watching for"
          length={20}
          loadImgCount={6}
        />
        <ThumbnailList name="My List" length={18} loadImgCount={6} />
        <ThumbnailList name="Trending Now" length={10} loadImgCount={6} />
        <InfiniteContents listCount={listCount} />
      </MainWrapper>
    </>
  );
}

export default Main;
