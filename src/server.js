const express = require('express')
const server = express()

const {pageLanding,pageStudy,pageGiveClasses, saveClasses} = require('./pages')

const nunjucks = require('nunjucks')
// configurar nunjucks para trocar sendFIle por render
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({extended:true}))
//configurar arquivos estáticos
.use(express.static("public"))
//rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)