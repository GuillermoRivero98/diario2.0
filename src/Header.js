import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/tapa.png" alt="Logo Revista" />
      </div>
      <div><h1>Mis primeros pasos</h1></div>
      <nav>
        <a href="#home">Inicio</a>
        <a href="#news">Noticias</a>
        <a href="#articles">Artículos</a>
        <a href="#submit">Escribir Artículo</a>
      </nav>
    </header>
  );
};

export default Header;
