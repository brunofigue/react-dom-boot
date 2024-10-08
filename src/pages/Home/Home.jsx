import { Slide } from "react-awesome-reveal";
import "./Home.css";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";

const Home = () => {
  return (
    <Slide>
      <main className='HomeContainer'>
        <Presentation />
        <h4>
          Proyectos 
        </h4>
        <Projects />
      </main>
    </Slide>
  );
};

export default Home;
