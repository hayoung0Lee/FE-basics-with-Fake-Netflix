import photoData from "../asset/photo.json";
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import justifiedLayout from "justified-layout";
import throttling from "../utils/throttle";
import Store from "../utils/store";

const LayoutStyle = styled.div`
  width: 1060px;
  margin: auto;
  margin-top: 30px;
  position: relative;
  height: 100%;
`;

const generateLayout = (photoData, targetRowHeight) => {
  const jLayout = justifiedLayout(
    [
      0.5,
      1.5,
      1,
      1.8,
      0.4,
      0.7,
      0.9,
      1.1,
      1.7,
      2,
      0.5,
      1.5,
      1,
      1.8,
      0.4,
      0.7,
      0.9,
      1.1,
      1.7,
      2,
      0.5,
      1.5,
      1,
      1.8,
      0.4,
      0.7,
      0.9,
      1.1,
      1.7,
      2,
    ],
    {
      containerWidth: 1060,
      targetRowHeight: targetRowHeight,
    }
  );
  return jLayout;
};

const generateBreakPointWithHeight = (list) => {
  const iter = list[Symbol.iterator]();
  let prev = iter.next().value;
  let index = 0;
  const breakedList = [[{ position: prev, index: index++ }]];

  for (const el of iter) {
    if (prev.top !== el.top) {
      breakedList.push([{ position: el, index: index++ }]);
      prev = el;
    } else {
      breakedList[breakedList.length - 1].push({
        position: el,
        index: index++,
      });
    }
  }

  return breakedList;
};

const getVisibleList = (list, hiddenHeight) => {
  const visibleList = [];
  // visible 범위 를 구해서 해당하는것만 그리기
  const itemHeight = 500;
  const startIndex = 0 + Math.floor((hiddenHeight + 68) / itemHeight);
  const endIndex = 4 + Math.floor((hiddenHeight + 68) / itemHeight);

  // const iter = list[Symbol.iterator]();
  // for (const el of iter) {
  //   visibleList.push(...el);
  // }

  console.log(startIndex, endIndex);
  for (let i = startIndex; i < endIndex && i < list.length; i++) {
    visibleList.push(...list[i]);
  }
  return visibleList;
};

const PhotoList = () => {
  // eslint-disable-next-line
  const [scroll, setScorll] = useContext(Store).scroll;
  const targetRowHeight = 500;
  const [layout, setLayout] = useState([]);
  const [breakedList, setBreakedList] = useState([]);
  const [visibleList, setVisibleList] = useState(null);

  const throttleWheel = throttling(() => {
    const hiddenHeight = document.documentElement.scrollTop; // 위에 스크롤해서 가려진 부분의 높이, 즉 내가 스크롤해서 가려진 부분의 높이
    setVisibleList(getVisibleList(breakedList, hiddenHeight));
    setScorll(hiddenHeight);
  }, 500);

  useEffect(() => {
    const generatedLayout = generateLayout(photoData, targetRowHeight).boxes;
    setLayout(generatedLayout);
    const breakedList = generateBreakPointWithHeight(generatedLayout);
    setBreakedList(breakedList);
    const hiddenHeight = document.documentElement.scrollTop;
    setVisibleList(getVisibleList(breakedList, hiddenHeight));
    // eslint-disable-next-line
  }, []);

  if (!layout || !visibleList) {
    return <div>....</div>;
  }

  return (
    <LayoutStyle
      onWheel={(e) => {
        throttleWheel();
      }}
    >
      {visibleList.map((p, index) => {
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              ...p.position,
              backgroundColor: "rgba(255,255,255,0.95)",
              outline: "1px solid black",
              display: "inline-flex",
              overflow: "hidden",
              verticalAlign: "middle",
            }}
          >
            <img
              key={index}
              alt={index}
              src={`${process.env.PUBLIC_URL}/${photoData.photo[p.index].url}`}
              style={{
                verticalAlign: "middle",
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "auto",
                display: "block",
              }}
            />
          </div>
        );
      })}
    </LayoutStyle>
  );
};

export default PhotoList;
