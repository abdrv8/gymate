import "./styles/RecentBlogs.scss";
import { Container } from "./index";
import { recentBlogs } from "../constants";
import { titleBg } from "../assets";

const Card = ({ title, excerpt, date }) => (
  <div className="card">
    <div className="date">{date}</div>
    <div className="text">
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </div>
    <a href="#">
      <span>Read More</span> <i className="fa-solid fa-arrow-right"></i>
    </a>
  </div>
);

const RecentBlogs = () => {
  return (
    <div className="recentblogs">
      <Container>
        <div className="content">
          <div className="top">
            <div className="title">
              <img src={titleBg} alt="title bg" />
              <p>Latest Blog</p>
            </div>
            <div className="heading">
              <h1>Our Recent News</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                reprehenderit tempore! <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="cards">
            {recentBlogs.map((blog) => (
              <Card key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecentBlogs;
