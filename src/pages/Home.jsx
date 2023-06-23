import {
  ChooseUs,
  Featured,
  Header,
  Hero,
  WhoWeAre,
  Trainers,
  Testimonials,
  Gallery,
  BmiCalc,
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
      <BmiCalc />
    </div>
  );
};

export default Home;
