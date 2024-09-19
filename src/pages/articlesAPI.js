export async function getArticles() {
    return fetch("/api/articles")
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error(error));
}