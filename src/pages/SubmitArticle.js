import React, {useState} from "react";
import Modal from "../components/Modal";

const SubmitArticle = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    cost[image, setImage] = useState("");

    const handleSubmit = (event) => {
        e.preventDefault();

        if(!title || !author || !content) {
            alert("Por favor, completa todos los campos");
            return;
        }

        if(image && !image.size > 2 * 1024 * 1024) {
            alert("La imagen no puede superar los 2MB");
            return;
        }

        const NewArticle = {
            title,
            author,
            content,
            image: image ? URL.createObjectURL(image) : null,
            likes: 0,
            dislikes: 0,
        };

        fetch("/api/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(NewArticle),
        })
            .then(response => response.json())
            .then(() => {
                alert("Artículo creado correctamente");
                setTitle("");
                setAuthor("");
                setContent("");
                setImage(null);
            })
            .catch(error => console.error("Error al crear el artículo:", error));

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
                placeholder="Contenido"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}   
};

export default SubmitArticle;