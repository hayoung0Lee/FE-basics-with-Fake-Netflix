import photoData from "../asset/photo.json";
import styled from "styled-components";
import { useEffect, useState } from "react";
import justifiedLayout from "justified-layout";
import throttling from "../utils/throttle";

const LayoutStyle = styled.div`
  width: 1060px;
  margin: auto;
  margin-top: 30px;
  position: relative;
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
    console.log(el);
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

const getVisibleList = (list) => {
  const visibleList = [];
  // visible 범위 를 구해서 해당하는것만 그리기
  const iter = list[Symbol.iterator]();

  iter.next();
  iter.next();
  for (const el of iter) {
    visibleList.push(...el);
  }

  console.log("visible", visibleList);
  return visibleList;
};

const PhotoList = () => {
  const targetRowHeight = 300;
  const [layout, setLayout] = useState([]);
  const [breakedList, setBreakedList] = useState([]);
  const [visibleList, setVisibleList] = useState(null);

  const throttleWheel = throttling(() => console.log("wheel event"), 200);

  useEffect(() => {
    const generatedLayout = generateLayout(photoData, targetRowHeight).boxes;
    setLayout(generatedLayout);
    const breakedList = generateBreakPointWithHeight(generatedLayout);
    setBreakedList(breakedList);
    setVisibleList(getVisibleList(breakedList));
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
      {/* {photoData?.photo.map((p, index) => {
        return (
          <div
            key={index}
            style={{
              ...layout[index],
              backgroundColor: "rgba(255,255,255,0.95)",
              outline: "1px solid black",
              display: "inline-flex",
              overflow: "hidden",
              verticalAlign: "middle",
              // boxSizing: "border-box",
            }}
          >
            <img
              key={index}
              alt={index}
              src={`${process.env.PUBLIC_URL}/${p.url}`}
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
      })} */}
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
              // boxSizing: "border-box",
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
