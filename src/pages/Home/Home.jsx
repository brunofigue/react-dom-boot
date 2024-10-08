import { Fade } from "react-awesome-reveal";
import "./Home.css";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";

const Home = () => {
  return (
    <Fade>
      <main className='HomeContainer'>
        <Presentation />
        <Projects />
      </main>
    </Fade>
  );
};

export default Home;
