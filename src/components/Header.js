import React from 'react';

function Header() {
  return (
    <header>
      <nav class="navbar">
        <div class="menu">
          <h2 class="logo">LOGO</h2>
          <div class="menu-icons">
            <div class="navbar-itens">
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
          <button class="barras" type="button">
            <i id="botao" class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
