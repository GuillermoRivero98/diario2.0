import React from "react";

const News = () => {
  return (
    <section id="news" className="news-section">
      <div className="main-news">
        <img 
          src="/images/estrategias.jpeg" 
          alt="Nuevas Estrategias de Aprendizaje en Jardines de Infancia" 
          className="news-image" 
        />
        <h3 className="news-title">Nuevas Estrategias de Aprendizaje en Jardines de Infancia</h3>
      </div>
      <div className="side-news">
        <div className="news-item">
          <img 
            src="/images/coco.jpeg" 
            alt="El Juego Libre como Herramienta Educativa para la Primera Infancia" 
            className="news-image" 
          />
          <h3 className="news-title">El Juego Libre como Herramienta Educativa</h3>
        </div>
        <div className="news-item">
          <img 
            src="/images/libre.jpeg" 
            alt="La Educación Emocional en la Primera Infancia" 
            className="news-image" 
          />
          <h3 className="news-title">La Educación Emocional en la Primera Infancia</h3>
        </div>
        <div className="news-item">
          <img 
            src="/images/aula.jpeg" 
            alt="Cómo la Naturaleza Está Volviendo a las Aulas de la Primera Infancia" 
            className="news-image" 
          />
          <h3 className="news-title">Cómo la Naturaleza Está Volviendo a las Aulas</h3>
        </div>
      </div>
    </section>
  );
};

export default News;
