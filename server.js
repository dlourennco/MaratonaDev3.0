const express = require("express")
const server = express()

//apresentando arquivos estáticos (css)
server.use(express.static("public"))

//configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "B+"
    },
    {
        name: "Robson Marques",
        blood: "A+"
    },
    {
        name: "David Lima",
        blood: "O+"
    }
]

//configurando a apresentação da página
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

server.listen(3000, () => {console.log("Server started with nodemon")})
