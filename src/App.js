import React from "react";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="news" className="news-section">
          <div className="main-news">
            <img
              src={`${process.env.PUBLIC_URL}/images/estrategias.jpeg`}
              alt="Nuevas Estrategias de Aprendizaje"
              className="news-image"
            />
            <h3 className="news-title">
              Nuevas Estrategias de Aprendizaje en Jardines de Infancia
            </h3>
          </div>
          <div className="side-news">
            <div className="news-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/coco.jpeg`}
                alt="El Juego Libre como Herramienta Educativa"
                className="news-image"
              />
              <h3 className="news-title">
                El Juego Libre como Herramienta Educativa
              </h3>
            </div>
            <div className="news-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/libre.jpeg`}
                alt="La Educación Emocional en la Primera Infancia"
                className="news-image"
              />
              <h3 className="news-title">
                La Educación Emocional en la Primera Infancia
              </h3>
            </div>
            <div className="news-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/aula.jpeg`}
                alt="Cómo la Naturaleza Está Volviendo a las Aulas"
                className="news-image"
              />
              <h3 className="news-title">
                Cómo la Naturaleza Está Volviendo a las Aulas
              </h3>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Revista Primera Infancia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
