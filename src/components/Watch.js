import { useParams } from "react-router-dom";

function Watch() {
  let { id } = useParams();
  return <div>Watch {id}</div>;
}

export default Watch;
