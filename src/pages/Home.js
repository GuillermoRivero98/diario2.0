import React from 'react';

const Home = ({ articles }) => {
  return (
    <div>
      <h2>Bienvenido a Mis Primeros Pasos</h2>
      <p>Este es el sitio principal con noticias y artículos sobre la educación en la primera infancia.</p>
      <section className="articles-section">
        <h3>Artículos Destacados</h3>
        {articles.map((article) => (
          <div key={article.id} className="article-item">
            <h4>{article.title}</h4>
            <p>Por {article.author}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
