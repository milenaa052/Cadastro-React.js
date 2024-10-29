import React, { useState } from 'react';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="menu">
          <h2 className="logo">LOGO</h2>

          <div className="menu-icons">
            <div className={`navbar-itens ${menuAberto ? 'mostrar' : ''}`}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <p className="item">Item-1</p>
                </li>
                <li className="nav-item">
                  <p className="item">Item-2</p>
                </li>
                <li className="nav-item">
                  <p className="item">Item-3</p>
                </li>
              </ul>
            </div>

            <div className="perfil">
              <a href="/home">
                <i className="fa-solid fa-circle-user"></i>
              </a>
            </div>
          </div>

          <button className="barras" type="button" onClick={toggleMenu}>
            <i id="botao" className={`fa-solid ${menuAberto ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;