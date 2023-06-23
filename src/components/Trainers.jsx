/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { dotBg, trainerBg, bgAttachment, shape, titleBg } from "../assets";
import { Container } from "../layout/Container";
import "./styles/Trainers.scss";
import { trainers } from "../constants";

const Card = ({ name, role, image, handles }) => (
  <div className="card">
    <div className="top">
      <img src={trainerBg} alt="trainer bg" />
      <img src={image} alt={name} />
      <div className="shape">
        <img src={shape} alt="shape" />
        <i className="fa-solid fa-angle-up arrow"></i>
      </div>
    </div>
    <div className="bottom">
      <div className="text">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
      <div className="handles">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-regular fa-envelope"></i>
      </div>
      <div className="line"></div>
    </div>
  </div>
);

const Trainers = () => {
  return (
    <div
      className="trainers"
      style={{ background: `url('${dotBg}') no-repeat center center/cover` }}
    >
      <Container>
        <div className="content">
          <div className="top">
            <div className="title">
              <img src={titleBg} alt="title bg" />
              <p>Gym Trainers</p>
            </div>
            <div className="heading">
              <h2>Team Of Expert Coaches</h2>
              <p>
                Expert team of coaches helps you succeed in any goal,
                personalized guidance and motivation provided!
              </p>
            </div>
          </div>
          <div className="cards">
            {trainers.map((trainer) => (
              <Card key={trainer.id} {...trainer} />
            ))}
          </div>
        </div>
      </Container>
      <div
        className="bgAttachment"
        style={{
          background: `url('${bgAttachment}') no-repeat center center/contain`,
        }}
      ></div>
    </div>
  );
};

export default Trainers;
