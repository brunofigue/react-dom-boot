import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import "./Home.css";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";

const Home = () => {
  return (
    <Fade>
      <main className='HomeContainer'>
        <Presentation />
        <Slide>
        <h4>
          Proyectos 
        </h4>
        <Projects />
        </Slide>
      </main>
    </Fade>
  );
};

export default Home;
