import "../App.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function HomePage() {
  return (
    <div>
      <h1 className="homePage-title">Advanced React Journal</h1>
      <h2 className="homePage-topic">
        {" "}
        I am documenting my Advance React practice and the things I am learning
        on here. I started
      </h2>
      <Section1 />
      <br></br>
      <Section2 />
      <br />
      <Section3 />
    </div>
  );
}

export default HomePage;
