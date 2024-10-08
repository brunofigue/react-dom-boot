import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg '>
        <div className='container-fluid'>
          <a className='navbar-brand' href='Home'>
            Portfolio
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarScroll'
            aria-controls='navbarScroll'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarScroll'>
            <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Contacto'>
                  Contacto
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Tecnologias
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Html
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Css
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      React
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Bootstrap
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Node.js
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Express
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
