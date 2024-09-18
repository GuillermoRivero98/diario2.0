import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import News from "./pages/News";
import Article from "./pages/Article";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/News" element={News} />
          <Route path="/Article" element={Article} />
          <Route exact path="/" element={Home} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Revista Primera Infancia. Todos los derechos reservados.</p>
      </footer>
    </Router>

  );
}

export default App;
