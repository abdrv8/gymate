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
  RecentBlogs,
  Call,
  Footer,
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
      <RecentBlogs />
      <Call />
      <Footer />
    </div>
  );
};

export default Home;
