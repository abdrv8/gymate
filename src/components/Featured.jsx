/* eslint-disable react/prop-types */
import "./styles/Featured.scss";
import { featuredClasses } from "../constants";
import { Container } from "./index";
import { useState } from "react";
import { titleBg, ctaBg } from "../assets";

const Card = ({ title, schedule, background, icons }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="icon">
        <img src={!hover ? icons[0] : icons[1]} alt="icon" />
      </div>
      <div
        className="image"
        style={{
          background: `url("${background}") no-repeat center center/cover`,
        }}
      ></div>
      <div className="text">
        <h2>{title}</h2>
        <span>{schedule}</span>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="featured">
      <Container>
        <div className="content">
          <div className="title">
            <div className="bg">
              <img src={titleBg} alt="title bg" />
              <p>our featured class</p>
            </div>
            <h2>We Are Offering Best Flexible Classes</h2>
          </div>
          <div className="cards">
            {featuredClasses.map((fClass) => (
              <Card key={fClass.id} {...fClass} />
            ))}
          </div>
        </div>
      </Container>
      <div
        className="cta-bg"
        style={{ background: `url('${ctaBg}') no-repeat center center/cover` }}
      >
        <div className="text">
          <h2>We Are Always Providing Best Fitness Service For You</h2>
          <a href="#">
            <span>Join Us</span> <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
