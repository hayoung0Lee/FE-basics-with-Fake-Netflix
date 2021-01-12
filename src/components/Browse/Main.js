// main으로 보이는곳,
// 프로파일을 선택했으면 리스트를 보여주고
// 아니면 프로파일 선택 창 선택하고 로컬스토리지 업데이트
import styled from "styled-components";
import ThumbnailList from "../ThumbnailList";

const MainWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 25%;
  padding-left: 5%;
  padding-right: 5%;
  width: 90%;
  background: url(${(props) => props.bg}) no-repeat top center;
  background-size: 100%;
`;

function Main() {
  return (
    <>
      {/* <div>
        <img
          src="https://picsum.photos/seed/picsum/1000/400/?blur"
          width="100%"
        />
      </div> */}
      <MainWrapper bg={"https://picsum.photos/seed/picsum/1000/400/?blur"}>
        <ThumbnailList name="Continue Watching for" length={8} />
        <ThumbnailList name="My List" length={8} />
        <ThumbnailList name="Trending Now" length={10} />
        <ThumbnailList name="US TV Series" length={10} />
        <ThumbnailList name="Popular On Netflix" length={10} />
        <ThumbnailList name="Suspenseful International TV shows" length={10} />
        <ThumbnailList name="Made in Korea" length={10} />
        <ThumbnailList name="Netflix Originals" length={10} />
        <ThumbnailList name="New Releases" length={10} />
        <ThumbnailList name="International TV Dramas" length={10} />
        <ThumbnailList name="Crime Docuseries" length={10} />
        <ThumbnailList name="International TV Comedies" length={10} />
        <ThumbnailList name="Real Stories" length={10} />
        <ThumbnailList name="Internatiopnal TV Shows" length={10} />
        <ThumbnailList
          name="Award-Winning International TV Shows"
          length={10}
        />
        <ThumbnailList name="Critically Acclaimed Films" length={10} />
        <ThumbnailList
          name="International Police Detective TV Dramas"
          length={10}
        />
        <ThumbnailList name="Children &amp; Family TV" length={10} />
        <ThumbnailList name="Youth TV Dramas" length={10} />
        <ThumbnailList name="Top Picks for" length={10} />
        <ThumbnailList name="Award-Winning TV dramas" length={10} />
        <ThumbnailList name="Documentaries" length={10} />
        <ThumbnailList name="Critically Acclaimed US TV shows" length={10} />
        <ThumbnailList name="International TV starring Women" length={10} />
        <ThumbnailList name="Supernatural TV Shows" length={10} />
        <ThumbnailList name="Award-Winning TV Shows" length={10} />
        <ThumbnailList name="US TV Shows" length={10} />
        <ThumbnailList name="US TV Shows" length={10} />
        <ThumbnailList name="Exciting TV Shows" length={10} />
        <ThumbnailList name="Ensemble TV Shows" length={10} />
        <ThumbnailList name="Korean TV Shows" length={10} />
        <ThumbnailList name="Provacative Interntional TV Shows" length={10} />
        <ThumbnailList name="Emmy-winning International TV Shows" length={10} />
        <ThumbnailList name="Children &amp; Family Novies" length={10} />
        <ThumbnailList name="Suspenseful TV Shows" length={10} />
        <ThumbnailList name="TV Shows Based on Books" length={10} />
        <ThumbnailList name="British TV Shows" length={10} />
        <ThumbnailList name="TV Shows" length={10} />
        <ThumbnailList name="Bingeworthy International TV Shows" length={10} />
      </MainWrapper>
    </>
  );
}

export default Main;
