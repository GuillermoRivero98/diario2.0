import React from 'react';
import { approveArticle } from "../api/approveArticle";

const Home = ({ articles, fetchData }) => {

  const handleApprove = async (articleId) => {
    try {
      await approveArticle(articleId);
      fetchData();
    } catch (error) {
      console.error("Error al aprobar el artículo", error);
    }
  };

  return (
    <section className='section'>
      <div className="container">
        <h1 className="title">Bienvenido a Mis Primeros Pasos</h1>
        <p className="subtitle">
          Este es el sitio principal con noticias y artículos sobre la educación en la primera infancia.
        </p>

        <div className="articles-section" >
          <h3 className="title is-4">Artículos Destacados</h3>

          <div className="columns is-multiline">
            {articles.map((article) => (
              <div key={article.id} className="column is-one-third">
                <div className="box">
                  <h4 className="title is-5">{article.title}</h4>
                  <p className="subtitle is-6">{article.author}</p>
                  <button
                    className="button is-primary"
                    onClick={() => handleApprove(article.id)}
                  >
                    Aprobar
                  </button>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
