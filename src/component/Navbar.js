import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/dyrou/anil"}>Anil</Link>
      <br />
      <Link to={"/dyrou/peter"}>Peter</Link>
    </div>
  );
}
export default Navbar;
