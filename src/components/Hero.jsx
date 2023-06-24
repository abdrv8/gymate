import "./styles/Hero.scss";
import { titleBg } from "../assets";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroText">
        <div className="content">
          <div className="left">
            <div className="title">
              <img src={titleBg} alt="title bg" />
              <p>Find Your Energy</p>
            </div>
            <div className="heading">
              <h1>Make Your Body</h1>
              <p>Fit & Perfect</p>
            </div>
            <a href="#">
              <span>Our classes</span>{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="right">
            <div className="share">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <div className="dash"></div>
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
