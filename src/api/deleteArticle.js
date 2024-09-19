const API_URL = "/api/articles";

export async function deleteArticle(articleId) {
    try {
        const response = await fetch(`${API_URL}/${articleId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error("Error al eliminar el artículo");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
