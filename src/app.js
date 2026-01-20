import express from "express";
import conectarDb  from "./config/dbConnect.js";

const conexao = await conectarDb();

const app = express();
app.use(express.json()); // MIDDLEWARE

const livros = [
    {
        id: 1,
        titulo: "Memórias Póstumas de Brás Cubas"
    },
    {
        id: 2,
        titulo: "Pequeno Príncipe"
    }
];


function buscarLivro(id) {
    const index = livros.findIndex((livro) => livro.id === Number(id));
    return index;
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

app.get("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    res.status(200).send(livros[index].titulo);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");  // 201 status de registro criado
});

app.put("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros.splice(index, 1); // POSIÇÃO DO ELEMENTO A SER ELIMINADO E A QUANTIDADE DE ELEMENTOS REMOVIDOS
    res.status(200).send("Livro deletado com sucesso");
});

export default app; 