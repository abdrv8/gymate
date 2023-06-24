/* eslint-disable react/prop-types */
import "./styles/Testimonials.scss";
import { Container } from "./index";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  quotes,
  testimonialShape,
  titleBg,
} from "../assets";
import { testimonials } from "../constants";

const Review = ({ name, image, position, company, message }) => (
  <div className="review">
    <div className="image">
      <img src={image} alt={name} />
    </div>
    <div className="text">
      <img src={quotes} alt="quotation mark" />
      <div className="message">&quot;{message}&quot;</div>
      <div className="info">
        <h2>{name}</h2>
        <p>
          {position} of {company}
        </p>
      </div>
    </div>
    <div className="shape">
      <img src={testimonialShape} alt="shape" />
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Container>
        <div className="content">
          <div className="title">
            <div className="bg">
              <img src={titleBg} alt="title bg" />
              <p>Testimonials</p>
            </div>
          </div>
          <div className="reviews">
            {testimonials.map((review) => (
              <Review key={review.id} {...review} />
            ))}
            <div className="switch">
              <div className="leftbtn">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="rightbtn">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="logos">
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo2" />
            <img src={logo3} alt="logo3" />
            <img src={logo4} alt="logo4" />
            <img src={logo5} alt="logo5" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
