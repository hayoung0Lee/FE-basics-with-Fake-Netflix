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

interface ThumbnailListInfo {
    name: string;
    length: number;
    loadImgCount: number;
}

const ThumbnailList: React.FC<ThumbnailListInfo> = ({ name, length, loadImgCount }: ThumbnailListInfo) => {
    const [loadImageCount, setLoadImageCount] = useState(loadImgCount);
    const imgs = useRef<HTMLInputElement>(null);

    const callBack = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        // 이미지 옆으로 스크롤 했을때 lazy loading 하는 부분
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 실제로 화면에 그려지고 나면 보이도록 구성
                setLoadImageCount((loadImageCount) => loadImageCount + 1);
                observer.unobserve(entry.target);
            }
        });
    };

    useEffect(() => {
        if (imgs.current) {
            const childImgs: HTMLCollection = imgs.current.children;
            const io: IntersectionObserver = new IntersectionObserver(callBack);
            let idx = 0;
            for (const child of childImgs) {
                if (idx >= loadImageCount) {
                    // observer는 지정한 부분 밖에 있는것만!
                    io.observe(child);
                }
                idx++;
            }
        }
        // eslint-disable-next-line
    }, []);

    // loadImgCount 내에 해당하면 불러오게 하고, 아니면 못불러오게 한다.
    // loadImgCount를 안준 경우, 일단 안불러온다. 왜냐하면 lazyLoading하려고
    return (
        <ThumNailListWrapper>
            <ListTitle>{name}</ListTitle>
            <ListWrapper ref={imgs}>
                {Array(length)
                    .fill('img')
                    .map((_i: number, index) => {
                        if (!!loadImageCount) {
                            // setLoadImgCount로 이미지를 실제로 그릴지!
                            return <Thumbnail key={index} index={index} isLoaded={index < loadImageCount} />;
                        }
                        return <Thumbnail key={index} index={index} isLoaded={false} />;
                    })}
            </ListWrapper>
        </ThumNailListWrapper>
    );
};

export default ThumbnailList;
