import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <h1>wlcome to home component</h1>
      <p>this is a home page of our awesome app</p>
      <p>and here we are learning home router</p>
      <Link to="/">go to home page</Link>
    </>
  );
}
export default About;
