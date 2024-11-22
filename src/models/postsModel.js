// Importa a função para conectar ao banco de dados MongoDB
import conectarAoBanco from "../config/dbconfig.js";
// Conecta ao banco de dados MongoDB usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts"
export  async function getTosdosPosts() {
    // Obtém o banco de dados "aulanodejs"
    const db = conexao.db("aulanodejs");
    // Obtém a coleção "posts"
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}
export async function criarPost(novoPost) {
    const db = conexao.db("aulanodejs");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}