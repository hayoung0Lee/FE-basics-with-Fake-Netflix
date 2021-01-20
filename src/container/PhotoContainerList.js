import photoData from "../assets/photo.json";
import styled from "styled-components";
import { useEffect, useState } from "react";
import justifiedLayout from "justified-layout";

const LayoutStyle = styled.div`
  width: 1100px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const generateLayout = (photoData) => {
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
      2.2,
      1.5,
      0.5,
      1.5,
      1,
      1.8,
      0.4,
      0.7,
      0.9,
      1.1,
      1.7,
      2.2,
      1.5,
      0.5,
      1.5,
      1,
      1.8,
      0.4,
      0.7,
      0.9,
      1.1,
      1.7,
      2.2,
      1.5,
    ],
    {
      containerWidth: 1100,
      containerPadding: 50,
      boxSpacing: {
        horizontal: 20,
        vertical: 30,
      },
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
        // console.log(layout[index].height);
        return (
          <div
            style={{
              ...layout[index],
              overflow: "hidden",
              // position: "relative",
            }}
          >
            <img
              key={index}
              alt={index}
              src={`${process.env.PUBLIC_URL}/${p.url}`}
              max-height={"100%"}
            />
          </div>
        );
      })}
    </LayoutStyle>
  );
};

export default PhotoContainerList;
