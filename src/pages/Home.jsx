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
  Pricing,
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
      <Pricing />
    </div>
  );
};

export default Home;
