// 장르별로 보여주는 곳
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const EmptyViewStyle = styled.div`
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  color: grey;
  font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Genre() {
  let { id } = useParams();
  const location = useLocation();

  return (
    <EmptyViewStyle>
      <h1>Genre ID: {id}</h1>
      <span>You are currently seeing {location.pathname} page</span>
    </EmptyViewStyle>
  );
}

export default Genre;
