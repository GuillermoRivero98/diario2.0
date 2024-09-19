import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import New from "./pages/New";
import Article from "./pages/Article";
import SubmitArticle from "./pages/SubmitArticle";
import { getArticle } from "./api/getArticles"

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchArticles = await getArticle();
      setArticles(fetchArticles);
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/new" element={<New articles={articles} />} />
          <Route path="/article/:id" element={<Article articles={articles} />} />
          <Route path="/submit" element={<SubmitArticle />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Revista Primera Infancia. Todos los derechos reservados.</p>
      </footer>
    </Router>
  );
}


export default App;

