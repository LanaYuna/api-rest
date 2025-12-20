import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: 'Memórias Póstumas de Brás Cubas'
    },
    {
        id: 2,
        titulo: 'Pequeno Príncipe'
    }
];

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

export default app;