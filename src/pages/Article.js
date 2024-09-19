import React, { useState, useEffect } from "react";
import { getArticles } from "./articlesAPI";

const Article = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        try {
            setArticles(getArticles());
        } catch {
            console.log("REVENTO ALGO");
        }
    }, []);

    const hadleDelete = (id) => {
        fetch("/api/articles/" + id, {
            method: "DELETE",
        })
            .then(() => {
                setArticles(articles.filter((article) => article.id !== id));
            })
            .catch(error => console.error("Error al eliminar el artículo:", error));
    };

    const handlerLike = (article) => {
        article.likes++;
        updateArticle(article);
    };

    const handlerDislike = (article) => {
        article.likes--;
        updateArticle(article);
    };

    const updateArticle = (article) => {
        fetch("/api/articles/" + article.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        })
            .then(response => response.json())
            .then(() => {
                setArticles([...articles]);
            })
            .catch(error => console.error("Error al actualizar el artículo:", error));
    };

    return (
        <div>
            {articles.map(article => (
                <div key={article.id} className="article">
                    {article.image && <img src={article.image} alt={article.title} />}
                    <h3>{article.title}</h3>
                    <small>Por {article.author}</small>
                    <p>{article.content}</p>

                    <div className="button-container">
                        <button onClick={() => handlerLike(article)}>👍 {article.likes}</button>
                        <button onClick={() => handlerDislike(article)}>👎 {article.dislikes}</button>
                        <button onClick={() => hadleDelete(article.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Article;