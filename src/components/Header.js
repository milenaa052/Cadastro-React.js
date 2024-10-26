import React, { useState } from 'react';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header>
      <nav class="navbar">
        <div class="menu">
          <h2 class="logo">LOGO</h2>

          <div class="menu-icons">
            <div className={`navbar-itens ${menuAberto ? 'mostrar' : ''}`}>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <p class="item">Item-1</p>
                </li>
                <li class="nav-item">
                  <p class="item">Item-2</p>
                </li>
                <li class="nav-item">
                  <p class="item">Item-3</p>
                </li>
              </ul>
            </div>

            <div class="perfil">
              <a href="https://www.google.com">
                <i class="fa-solid fa-circle-user"></i>
              </a>
            </div>
          </div>

          <button class="barras" type="button" onClick={toggleMenu}>
            <i id="botao" className={`fa-solid ${menuAberto ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
