import "./styles/About.scss";
import { logoBlack } from "../assets";
import { aboutGallery } from "../constants/index";

const handleAbout = () => {
  let aboutEl = document.querySelector(".about");
  aboutEl.classList.remove("active");
};

const About = () => {
  return (
    <div className="about">
      <header>
        <img src={logoBlack} alt="logo black" />
        <i className="fa-solid fa-xmark" onClick={handleAbout}></i>
      </header>
      <div className="text">
        <h2>About Us</h2>
        <p>
          Find out who we are and what makes us unique. We are a
          community-driven gym committed to providing personalized fitness
          experiences for all levels of fitness enthusiasts in a welcoming and
          supportive environment.
        </p>
      </div>
      <div className="about-gallery">
        <h2>Gallery</h2>
        <div className="images">
          {aboutGallery.map((image) => (
            <img src={image.img} alt="image" key={image.id} />
          ))}
        </div>
      </div>
      <div className="contact">
        <h2>Contact Info</h2>
        <ul>
          <li>
            <i className="fa-solid fa-location-dot"></i>{" "}
            <span>59 Street, House Newyork City</span>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            <span> +123-678800090</span>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <span>gymate@gymail.com</span>
          </li>
        </ul>
      </div>
      <div className="follow">
        <h2>Follow Us</h2>
        <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
