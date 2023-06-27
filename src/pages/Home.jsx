import {
  ChooseUs,
  Featured,
  Hero,
  WhoWeAre,
  Trainers,
  Testimonials,
  Gallery,
  BmiCalc,
  Pricing,
  RecentBlogs,
  Call,
  About,
} from "../components";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <WhoWeAre />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      <Pricing />
      <RecentBlogs />
      <Call />
      <About />
    </div>
  );
};

export default Home;
