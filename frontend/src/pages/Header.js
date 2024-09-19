import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/tapa.png" alt="Logo Revista" />
      </div>
      <h1>Mis primeros pasos</h1>
      <nav>
          <Link to= "/">Inicio</Link>
          <Link to= "/news">Noticias</Link>
          <Link to= "submit" >Escribir Artículo</Link>
      </nav>
    </header>
  );
};

export default Header;
