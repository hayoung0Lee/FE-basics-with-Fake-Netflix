import styled from "styled-components";
import Thumbnail from "./Thumbnail";

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

function ThumbnailList({ name, length }) {
  return (
    <ThumNailListWrapper>
      <ListTitle>{name}</ListTitle>
      <ListWrapper>
        {Array(length)
          .fill("img")
          .map((i, index) => {
            return <Thumbnail key={index} />;
          })}
      </ListWrapper>
    </ThumNailListWrapper>
  );
}

export default ThumbnailList;
