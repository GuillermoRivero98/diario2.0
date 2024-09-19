const API_URL = "/api/articles";

export async function getArticles() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Error al obtener los artículos");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}