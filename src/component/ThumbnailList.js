import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import { useState, useEffect, useRef } from 'react';

const ThumNailListWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ListTitle = styled.div`
    color: white;
    height: 28px;
    line-height: 18px;
`;

const ListWrapper = styled.div`
    display: flex;
    overflow-x: scroll;
`;

function ThumbnailList({ name, length, loadImgCount }) {
    const [loadImageCount, setLoadImageCount] = useState(loadImgCount);
    const imgs = useRef();

    const callBack = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setLoadImageCount((loadImageCount) => loadImageCount + 1);
                observer.unobserve(entry.target);
            }
        });
    };

    useEffect(() => {
        const childImgs = imgs.current.children;
        const io = new IntersectionObserver(callBack);
        let idx = 0;
        for (let child of childImgs) {
            if (idx >= loadImageCount) {
                io.observe(child);
            }
            idx += 1;
        }
        // eslint-disable-next-line
    }, []);

    // loadImgCount 내에 해당하면 불러오게 하고, 아니면 못불러오게 한다.
    // loadImgCount를 안준 경우, 일단 안불러온다. 왜냐하면 lazyLoading하려고
    return (
        <ThumNailListWrapper>
            <ListTitle>{name}</ListTitle>
            <ListWrapper
                ref={imgs}
                // onScroll={(e) => {
                //   e.stopPropagation();
                //   // console.log(
                //   //   "scroll 이벤트가 발생하고 있습나다요~~",
                //   //   e.target,
                //   //   e.currentTarget
                //   // );

                //   // 여기서 새로운 영역에 해당이 되면(늘어나면) setLoadImageCount를 늘려준다.
                // }}
            >
                {Array(length)
                    .fill('img')
                    .map((i, index) => {
                        if (!!loadImageCount) {
                            return <Thumbnail key={index} index={index} isLoaded={index < loadImageCount} />;
                        }
                        return <Thumbnail key={index} index={index} isLoaded={false} />;
                    })}
            </ListWrapper>
        </ThumNailListWrapper>
    );
}

export default ThumbnailList;
