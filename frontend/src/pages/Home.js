import React from 'react';
import {approveArticle} from "../api/approveArticle";

const Home = ({ articles, fetchData }) => {

  const handleApprove = async (articleId) => {
    try{
      await approveArticle(articleId);
      fetchData();
    }catch(error){
      console.error("Error al aprobar el artículo", error);
    }
  };

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
            <button onClick={() => handleApprove(article.id)}>Aprobar Artículo</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
