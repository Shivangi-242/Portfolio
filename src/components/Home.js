import { useTypewriter, Cursor } from "react-simple-typewriter";
import ab from "./logo512.png";
function Home() {
  const [text] = useTypewriter({
    words: ["Shivangi Raj"],
    typeSpeed: 80,
  });
  const [text1] = useTypewriter({
    words: ["A Student", "And", "A Front-End Developer."],
    typeSpeed: 120,
    deleteSpeed: 70,
  });

  return (
    <div className="home">
      <div>
        <img src={ab} alt="image"></img>
      </div>
      <div className="name">
        <h1>
          I am
          <span style={{ fontWeight: "bold", color: "#87949E" }}> {text}</span>
        </h1>
        <p>
          <span style={{ fontSize: "larger" }}>
            {text1}
            <Cursor />
          </span>
        </p>
      </div>
    </div>
  );
}
export default Home;
