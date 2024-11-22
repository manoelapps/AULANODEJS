import getTosdosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função para obter todos os posts
    const posts = await getTosdosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}