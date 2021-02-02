import styled from "styled-components";

const ThumnailImg = styled.div`
  margin-right: 5px;
  border-radius: 3px;
  overflow: hidden;
  width: 230px;
  height: 120px;
`;

const ImgWrapper = styled.div`
  background-color: grey;
  width: 230px;
  height: 120px;
`;

type Props = {
  index: any,
  isLoaded: any,
}

const Thumbnail: React.FC<Props>  = ({ index, isLoaded }: Props) => {
  // 위에서 어떤 조건이든 내려줘서 isLoaded 가 true면 로드해주고 아니면 일단 대기 시킨다(리소스 낭비는 나빠요!)
  if (isLoaded) {
    return (
      <div>
        <ThumnailImg>
          <ImgWrapper>
            <img
              src="https://picsum.photos/230/120/?blur"
              alt={`img ${index}`}
              width="230"
              height="120"
            />
          </ImgWrapper>
        </ThumnailImg>
      </div>
    );
  }

  return (
    <div>
      <ThumnailImg>
        <ImgWrapper>
          <img
            data-src="https://picsum.photos/230/120/?blur"
            alt={`img ${index}`}
            width="230"
            height="120"
          />
        </ImgWrapper>
      </ThumnailImg>
    </div>
  );
}

export default Thumbnail;
