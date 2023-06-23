import { ChooseUs, Featured, Header, Hero, WhoWeAre } from "../components";
import Trainers from "../components/Trainers";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <WhoWeAre />
      <Featured />
      <ChooseUs />
      <Trainers />
    </div>
  );
};

export default Home;
