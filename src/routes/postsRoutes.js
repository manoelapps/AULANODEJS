import express from "express"
import { listarPosts } from "../controllers/postsControllers.js";

const routes = (app) => {
    // Habilita o parser JSON para lidar com requisições JSON
    app.use(express.json());
    // Define uma rota GET para "/posts"
    app.get("/posts", listarPosts);
}

export default routes;