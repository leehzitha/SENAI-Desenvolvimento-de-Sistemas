import express from 'express'

const port = 8080
const app = express()
// const pessoa = { name: "Letícia", lastName: "Burlinski" }

// app.get('/', (req, res) => {
//     res.status(200).send({ pessoa : pessoa.name})
// })

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})