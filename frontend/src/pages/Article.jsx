import React from "react";
import { useParams } from "react-router-dom";

const Article = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));

    if(!article){
        return <p>Artículo no encontrado o cargando ...</p>;
    }

    return (
        <div>
            {article ? (
                <>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </>
            ) : (
                <p>Artículo no encontrado</p>
            )}
        </div>
    );

};

export default Article;