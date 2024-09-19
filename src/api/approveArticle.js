const API_URL = "http://localhost:3001/articles";

export async function approveArticle(articleId) {
    const response = await fetch(`${API_URL}/${articleId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ approved: true }),
    });

    if (!response.ok) {
        throw new Error("Error al aprobar el artículo");
    }

    return await response.json();
}
