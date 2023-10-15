import colorPickerImage from "../images/colorpicker.png";
import calc from "../images/calc.png";
import count from "../images/counter.png";
import age from "../images/age.png";
import insta from "../images/insta.png";
import dummy from "../images/dummy.png";

function Card({ imageUrl, imgLink, description }) {
  return (
    <div className="card">
      <a href={imgLink}>
        <img src={imageUrl} alt="Card" />
      </a>
      <p>{description}</p>
    </div>
  );
}

function Skill() {
  const cardsData = [
    {
      imageUrl: colorPickerImage,
      imgLink: "https://color-picker-rho-gules.vercel.app/",
      description:
        "Explore this Color Picker, a user-friendly tool that enables you to select a color of your choice and immediately apply it as the background color.",
    },
    {
      imageUrl: count,
      imgLink: "https://word-counter-inky.vercel.app/",
      description:
        "Experience a responsive Word Counter for paragraphs. It accurately counts the number of words in your text, making it perfect for writers and content creators.",
    },
    {
      imageUrl: calc,
      imgLink: "https://calculator-topaz-one.vercel.app/",
      description:
        "Discover a feature-rich Calculator that provides a wide range of mathematical functions for everyday use. Whether you need to perform simple calculations or more complex ones, this calculator has you covered.",
    },
    {
      imageUrl: age,
      imgLink: "https://age-calculator-three-lime.vercel.app/",
      description:
        "Calculate your age effortlessly using the Age Calculator. Just input your birthdate, and it will instantly provide you with your current age. A handy tool for anyone who wants to calculate age.",
    },
    {
      imageUrl: insta,
      imgLink: "https://shivangi-242.github.io/MERN-2/JSTask6.html",
      description:
        "Explore an Instagram login page clone that closely mimics the official design. Perfect for developers looking to practice their frontend skills and create realistic-looking login pages.",
    },
    {
      imageUrl: dummy,
      imgLink: "https://shivangi-242.github.io/MERN-2/Task3.html",
      description:
        "Discover a dummy page showcasing various pricing methods and strategies. It's a simple yet effective example of how pricing can be presented and compared for different products or services.",
    },
  ];

  return (
    <div className="skill">
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            imgLink={card.imgLink}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Skill;
