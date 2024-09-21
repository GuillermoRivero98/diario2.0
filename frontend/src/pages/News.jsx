import React, { useState, useEffect } from "react";
import { getArticles } from "../api/getArticles";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getArticles();
        setArticles(articles);
      } catch (error) {
        console.error("Error al obtener los artículos", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="news" className="new-section">
      <div className="container">
        <h1 className="title has-text-centered">Noticias Recientes</h1>
        <div className="columns is-multiline">
          {articles.map((article) => (
            <div key={article.id} className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={article.image} alt={article.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-5">{article.title}</p>
                  <p className="subtitle is-6">{article.author}</p>
                  <div className="content">
                    {article.content.substring(0, 100)}...
                  </div>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      Ver más detalles
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;