import "./styles/ChooseUs.scss";
import {
  chooseBg,
  chooseMainImg,
  playBtn,
  titleBg,
  training,
  benchPress,
  bottleWater,
  gymBag,
} from "../assets";
import Container from "../layout/Container";

const ChooseUs = () => {
  return (
    <div
      className="chooseus"
      style={{ background: `url('${chooseBg}') no-repeat center center/cover` }}
    >
      <Container>
        <div className="content">
          <div className="left">
            <img src={chooseMainImg} alt="choose main image" />
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="playbtn">
              <img src={playBtn} alt="play button" />
            </div>
          </div>
          <div className="right">
            <div className="title">
              <img src={titleBg} alt="title bg" />
              <p>Why Choose Us</p>
            </div>
            <div className="text">
              <h2>We Can Give A Shape Of Your Body Here!</h2>
              <p>
                At <b>Gymate</b>, we are dedicated to helping you achieve the
                body of your dreams. Our expert trainers and nutritionists will
                work with you to create a personalized fitness and nutrition
                plan that helps you reach your specific goals.
              </p>
            </div>
            <div className="features">
              {/* TODO: convert to component and store data in constant */}
              <div className="feature">
                <div className="image">
                  <img src={training} alt="training" />
                </div>
                <h3>Free Fitness Training</h3>
              </div>
              <div className="feature">
                <div className="image">
                  <img src={benchPress} alt="bench press" />
                </div>
                <h3>Modern Gym Equipments</h3>
              </div>
              <div className="feature">
                <div className="image">
                  <img src={gymBag} alt="gym bag" />
                </div>
                <h3>Gym Bag Equipments</h3>
              </div>
              <div className="feature">
                <div className="image">
                  <img src={bottleWater} alt="bottle water" />
                </div>
                <h3>Fresh Bottle Watter</h3>
              </div>
            </div>
            <a href="#">
              <span>Our Classes</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
