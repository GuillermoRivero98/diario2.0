const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {u4: uuid4} = require('uuid');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let articles = [];

app.get('/articles', (req, res) => {
    res.json(articles);
});

app.post('/articles', (req, res) => {
    const newArticle = req.body;
    if (!newArticle.title || !newArticle.author || !newArticle.content) {
        res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    newArticle.id = uuid4();
    articles.push(newArticle);
    res.status(201).json(newArticle);
});

app.put('/articles/:id', (req, res) => {
    const articleId = req.params.id;
    const updatedArticle = req.body;

    const articleIndex = articles.findIndex((article) => article.id === articleId);
    if (articleIndex === -1) {
        return res.status(404).json({ error: 'Artículo no encontrado' });
    }

    articles[articleIndex] = { ...articles[articleIndex], ...updatedArticle };
    res.json(articles[articleIndex]);
});


app.delete('/articles/:id', (req, res) => {
    const articleId = parseInt(req.params.id);
    const articleIndex = articles.findIndex((article) => article.id === articleId);

    if (articleIndex === -1) {
        return res.status(404).json({ error: 'Artículo no encontrado' });
    }

    articles.splice(articleIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});