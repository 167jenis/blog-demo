import { Link } from "react-router-dom";
import data from "../data1.json";
function Home() {
  console.log("aasas", data);
  return (
    <>
      <h1>wlcome to home component</h1>
      <p>this is a home page of our awesome app</p>
      <p>and here we are learning about router</p>
      <Link to="/about">go to About page</Link>
    </>
  );
}
export default Home;
