import {
  ChooseUs,
  Featured,
  Header,
  Hero,
  WhoWeAre,
  Trainers,
  Testimonials,
  Gallery,
} from "../components";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <WhoWeAre />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default Home;
