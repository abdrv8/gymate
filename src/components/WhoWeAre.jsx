/* eslint-disable react/prop-types */
import { whoWeAreCards } from "../constants";
import "./styles/WhoWeAre.scss";
import {
  titleBg,
  weightLifter,
  equipments,
  gym,
  girlRedBg,
  girlRun,
  girlSideText,
  wind,
} from "../assets";
import { Container } from "./index";

const Card = ({ icon, title, text }) => (
  <div className="card">
    <img src={icon} alt={`${title}-icon`} />
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

const WhoWeAre = () => {
  return (
    <div className="whoweare">
      <Container>
        <div className="top">
          <div className="cards">
            {whoWeAreCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="title">
              <img src={titleBg} alt="title bg" />
              <p>who we are</p>
            </div>
            <div className="heading">
              <h2>Take Your Health And Body To The Next Level</h2>
              <p>
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
            </div>
            <div className="features">
              <div className="feature">
                <img src={weightLifter} alt="weight lifter" />
                <h2>Professional Trainers</h2>
              </div>
              <div className="feature">
                <img src={equipments} alt="weight lifter" />
                <h2>MODERN EQUIPMENTS</h2>
              </div>
              <div className="feature">
                <img src={gym} alt="weight lifter" />
                <h2>FANCY GYM MACHINES</h2>
              </div>
            </div>
            <a href="#">
              <span>Take a Tour</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="right">
            <div className="images">
              <img src={girlSideText} alt="running text" />
              <img src={girlRedBg} alt="red background" />
              <img src={girlRun} alt="girl running" />
              <img src={wind} alt="wind" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeAre;
