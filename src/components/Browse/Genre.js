// 장르별로 보여주는 곳
import { useParams } from "react-router-dom";

function Genre() {
  let { id } = useParams();

  return <div>Genre {id}</div>;
}

export default Genre;
