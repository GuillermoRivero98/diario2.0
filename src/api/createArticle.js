const API_URL = "/api/articles";

export async function createArticle(article) {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        });

        if (!response.ok) {
            throw new Error("Error al obtener los artículos");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
