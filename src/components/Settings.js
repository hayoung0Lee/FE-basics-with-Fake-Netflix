// 장르별로 보여주는 곳g
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const EmptyViewStyle = styled.div`
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  color: grey;
`;

function Settings() {
  const location = useLocation();

  return (
    <EmptyViewStyle>
      <div>
        <span>You are currently seeing {location.pathname} page</span>
      </div>
    </EmptyViewStyle>
  );
}

export default Settings;
