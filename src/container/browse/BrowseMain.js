// main으로 보이는곳,
// 프로파일을 선택했으면 리스트를 보여주고
// 아니면 프로파일 선택 창 선택하고 로컬스토리지 업데이트
import styled from 'styled-components';
import ThumbnailList from '../../component/ThumbnailList';
import InfiniteContents from '../../component/InfiniteContents';
import { useState, useRef, useContext } from 'react';
import throttling from '../../utils/throttle';
import Store from '../../utils/store';
import bg from '../../utils/bg.webp';
import Footer from '../Footer';

const MainWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-top: 25%;
    padding-left: 5%;
    padding-right: 5%;
    width: 90%;
    height: 300px;
    background-color: grey;
    background: url(${bg}) no-repeat top center;
    background-size: 100%;
`;

function Main() {
    // eslint-disable-next-line
    const [scroll, setScorll] = useContext(Store).scroll;
    const [listCount, setListCount] = useState(2);
    const main = useRef();

    const listHeight = 148;
    const infiniteLoad = () => {
        const totalHeight = document.documentElement.offsetHeight; // 현재 문서의 전체 높이(가려진것도 다 포함)
        const hiddenHeight = document.documentElement.scrollTop; // 위에 스크롤해서 가려진 부분의 높이, 즉 내가 스크롤해서 가려진 부분의 높이
        const clientHeight = document.documentElement.clientHeight; // 현재 화면의 높이
        const check = hiddenHeight + clientHeight; // 그래서 즉, 가려진 높이(hiddenHeight)와 현재 화면의 높이를 합하면 현재 문서의 전체 높이가된다.
        // 즉 그래서 스크롤을 끝까지 하면 문서크기랑 check가 같아진다.
        // 그래서 문서의 전체 높이보다 조금작을때까지 보다 커지면, 즉 스크롤 쭉해서 완전 바닥까지 다 내리기 직전에 listCount를 하나 증가시켜서 새로운 list를 그려준다.
        if (check > totalHeight - listHeight * 3) {
            if (listCount < 10) {
                setListCount((listCount) => listCount + 1);
            }
        }

        // 현재 스크롤로 가려진 부분의 높이
        setScorll(hiddenHeight);
    };
    // throttle
    const throttleWheel = throttling(infiniteLoad, 200);

    return (
        <>
            <MainWrapper
                ref={main}
                onWheel={(e) => {
                    throttleWheel();
                }}
            >
                {/* loadCount는 각 리스트 내에서 이미지가 몇개 보일지 체크 */}
                <ThumbnailList name="Continue Watching for" length={20} loadImgCount={6} />
                <ThumbnailList name="My List" length={18} loadImgCount={6} />
                <ThumbnailList name="Trending Now" length={10} loadImgCount={6} />
                <InfiniteContents listCount={listCount} />
                <Footer />
            </MainWrapper>
        </>
    );
}

export default Main;
