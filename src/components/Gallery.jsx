/* eslint-disable react/prop-types */
import "./styles/Gallery.scss";
import { Container } from "../layout/Container";
import { galleryImages } from "../constants/index";
import { bgIcon, titleBg } from "../assets";

const Card = ({ img }) => (
  <div
    className="card"
    style={{ background: `url('${img}') no-repeat center center/cover` }}
  ></div>
);

const Gallery = () => {
  return (
    <div className="gallery">
      <Container>
        <div className="content">
          <div className="top">
            <div className="title">
              <img src={titleBg} alt="title bg" />
              <p>Gymate Gallery</p>
            </div>
            <div className="heading">
              <h1>Our Workplace Gallery</h1>
              <p>
                Our Workplace Gallery features modern office, team
                collaboration, and fun culture.
              </p>
              <p>
                Attracts talents and showcases company&apos;s work atmosphere.
              </p>
            </div>
          </div>
          <div className="cards">
            {galleryImages.map((image) => (
              <Card key={image.id} {...image} />
            ))}
          </div>
        </div>
      </Container>
      <div
        className="bgIcon"
        style={{
          background: `url('${bgIcon}') no-repeat center center/contain`,
        }}
      ></div>
    </div>
  );
};

export default Gallery;
