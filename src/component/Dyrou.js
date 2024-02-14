import { useParams } from "react-router-dom";

function Dyrou() {
  const param = useParams();
  const { name } = param;
  console.log(param);
  return (
    <div>
      <h1>this is a {name}'s page</h1>
    </div>
  );
}

export default Dyrou;
