import React, { useState } from "react";
import { createArticle } from '../api/createArticle';

const SubmitArticle = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const article = { title, author, content };
        await createArticle(article);
        setTitle('');
        setAuthor('');
        setContent('');
        alert('Artículo enviado exitosamente');
    };

    return (
        <div>
            <h2>Escribir Artículo</h2>
            <from onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Autor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Contenido"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Enviar</button>
            </from>
        </div>
    );
};

export default SubmitArticle;