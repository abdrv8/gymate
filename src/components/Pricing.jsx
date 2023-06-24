/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./styles/Pricing.scss";
import { Container } from "./index";
import { pricingPlans } from "../constants";
import { titleBg, noDaysOff, dumbbellBg } from "../assets";

const Card = ({ title, price, features, img }) => (
  <div className="card">
    <div
      className="top"
      style={{
        background: `url('${img}') no-repeat center center/cover`,
      }}
    >
      <div className="box-wrapper">
        <div className="box">{title}</div>
      </div>
    </div>
    <div className="bottom">
      <div className="price">
        <span>
          <small>$</small>
          {price}
        </span>{" "}
        <sup>p/m</sup>
      </div>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a>
        <span>Purchase Now</span> <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="pricing">
      <Container>
        <div className="content">
          <div className="top">
            <div className="title">
              <img src={titleBg} alt="title bg" />
              <p>Pricing Plans</p>
            </div>
            <div className="heading">
              <h1>Exclusive Pricing Plans</h1>
              <p>
                We offer the best and most affordable prices in the entire
                fitness industry. <br />
                Checkout the one that best suit your needs
              </p>
            </div>
          </div>
          <div className="cards">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </Container>
      <img src={noDaysOff} alt="no days off" className="nodaysoff" />
      <img src={dumbbellBg} alt="dumb bell bg" className="dumbbellbg" />
    </div>
  );
};

export default Pricing;
