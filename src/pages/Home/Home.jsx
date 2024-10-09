import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import "./Home.css";
import Presentation from "./components/Presentation/Presentation";
import Projects from "./components/Projects/Projects";
import Tecnologias from "./components/tecnologias/Tecnologias";


const Home = () => {
  return (
    <Fade>
      <main className='HomeContainer'>
        <Presentation />
        <Slide>
          <h4> Proyectos </h4>
          <Projects />
          <h4> Uso de Tecnologias</h4>
          <Tecnologias />
        </Slide>
      </main>
    </Fade>
  );
};

export default Home;
