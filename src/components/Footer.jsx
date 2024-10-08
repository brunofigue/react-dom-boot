import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fade>
      <footer className=' bg-secondary '>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3 '>
          <li className='nav-item'>
            <Link to='/' className='nav-link px-2 text-body-secondary'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contacto' className='nav-link px-2 text-body-secondary'>
              Contacto
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link px-2 text-body-secondary'>
              About
            </Link>
          </li>
        </ul>
        <p className='text-center text-body-secondary m-0 p-2'>Portfolio</p>
      </footer>
    </Fade>
  );
};

export default Footer;
