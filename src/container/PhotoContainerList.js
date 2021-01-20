import photoData from "../assets/photo.json";
import styled from "styled-components";
import { useEffect, useState } from "react";
import justifiedLayout from "justified-layout";

const LayoutStyle = styled.div`
  width: 1060px;
  margin: auto;
  margin-top: 30px;
`;

const generateLayout = (photoData) => {
  // const ratio = [];
  // photoData.photo.forEach((p) => {
  //   ratio.push(p.width / 300);
  // });
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
      targetRowHeight: 240,
    }
  );
  return jLayout;
};

const PhotoContainerList = () => {
  const [layout, setLayout] = useState([]);
  useEffect(() => {
    setLayout(generateLayout(photoData).boxes);
  }, []);

  if (!layout) {
    return <div>....</div>;
  }

  return (
    <LayoutStyle>
      {photoData?.photo.map((p, index) => {
        console.log(layout);
        return (
          <div
            key={index}
            style={{
              ...layout[index],
              backgroundColor: "rgba(255,255,255,0.95)",
              border: "1px solid black",
              display: "inline-flex",
              overflow: "hidden",
              verticalAlign: "middle",
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
      })}
    </LayoutStyle>
  );
};

export default PhotoContainerList;
