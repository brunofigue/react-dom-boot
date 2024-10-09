import { h1, h2 } from "framer-motion/client";
import "./Projects.css";

function Projects() {
  return (
    
    <section className='projectContainer'>
      <div className='card' style={{ width: "18rem" }}>
        <img src='https://cdn-icons-png.flaticon.com/512/919/919827.png' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>HTML</h5>
          <p className='card-text'>
            Proyecto realizado para entrega 10/04/24
          </p>
          <a href='https://github.com/brunofigue/entrega-con-js.git' className='btn btn-primary'>
            Ver proyecto a github
          </a>
        </div>
      </div>
      <div className='card' style={{ width: "18rem" }}>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png' className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Javascript</h5>
          <p className='card-text'>
          Proyecto realizado para entrega 10/09/24
          </p>
          <a href='https://github.com/brunofigue/entrega-con-js.git' className='btn btn-primary'>
          Ver proyecto a github
          </a>
        </div>
      </div>
      <div className='card' style={{ width: "18rem" }}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s' alt='...' />
        <div className='card-body'>
          <br />
          <br />
            <h5 className='card-title'>React</h5>
            <p className='card-text'>
            Proyecto realizado para entrega 20/10/24
            </p>
            <a href='https://github.com/brunofigue/react-dom-boot.git' className='btn btn-primary'>
            Ver proyecto a github
            </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
