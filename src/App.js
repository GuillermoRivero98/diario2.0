import React, { useState } from "react";
import Header from "./pages/Header";
import Article from "./pages/Article";
import SubmitArticle from "./pages/SubmitArticle";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [article, setArticles] = useState(null);

  const handleAddArticle = (NewArticle) => {
    setArticles([...articles, NewArticle]);
  };

  return (
    <div>
      <Header />
      <main>
        <button onClick={() => setShowModal(true)}>Redactar artículo</button>
        <Article article={article} />
        <Modal show={showModal} handleClose={() => setShowModal(false)}>
          <SubmitArticle addArticle={handleAddArticle} />
        </Modal>
      </main>
      <p>&copy; 2024 Revista Primera Infancia. Todos los derechos reservados.</p>
    </div>

  );
};

export default App;

