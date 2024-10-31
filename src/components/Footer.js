import React from 'react';

function Footer() {
  return (
    <footer>
        <div className="logos">
            <a href="https://www.linkedin.com/in/milena-santos-de-oliveira-709816192/" target="blank">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:milenasantosdeoliveira40@gmail.com" target="blank">
                <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://github.com/milenaa052" target="blank">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5544998301879&text=Ol%C3%A1%2C%20estava%20analisando%20seu%20portifólio%20e%20gostaria%20de%20entrar%20em%20contato." target="blank">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
      </div>

      <p class="copyright">© Copyright 2024 - Desenvolvido por <a href="https://portifolio-dev-milena.netlify.app" target="blank">Milena Santos de Oliveira</a></p>
    </footer>
  );
}

export default Footer;