import { ChooseUs, Featured, Header, Hero, WhoWeAre } from "../components";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <WhoWeAre />
      <Featured />
      <ChooseUs />
    </div>
  );
};

export default Home;
