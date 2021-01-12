import styled from "styled-components";

const ThumnailImg = styled.div`
  margin-right: 5px;
  border-radius: 3px;
  overflow: hidden;
  width: 230px;
`;
function Thumbnail() {
  return (
    <div>
      <ThumnailImg>
        <img src="https://picsum.photos/230/120/?blur" alt="temp" />
      </ThumnailImg>
    </div>
  );
}

export default Thumbnail;
