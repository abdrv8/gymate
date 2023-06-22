import "./styles/Hero.scss";
import { titleBg } from "../assets";

const Hero = () => {
  return (
    <section className="hero">
      <div className="text">
        <div className="left">
          <img src={titleBg} alt="title bg" />
          <p className="title-text">FIND YOUR ENERGY</p>
          <div className="heading">
            <p>MAKE YOUR BODY</p>
            <p>FIT & PERFECT</p>
          </div>
          {/* TODO: turn this a tag into a component since it's been used in different places */}
          <a href="#">
            <span>Our classes</span> <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="right">
          <div className="content">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <div className="dash"></div>
            <span>share</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
