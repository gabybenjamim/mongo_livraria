import express from 'express'

const app = express();
app.use(express.json())
    const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Aneis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
    ]

function buscaLivro(id) {
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    })
}


app.get("/", (req, res) =>{
    res.status(200).send("Jovens animados")
});

app.get("/livros", (req,res) =>{
    res.status(200).json(livros)
})

app.get("/livros/:id", (req,res) =>{
    res.status(200).json(livros);
})



export default app;