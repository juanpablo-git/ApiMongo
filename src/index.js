const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./app/controlers/authControllers')(app)
require('./app/controlers/index')(app)
app.listen(3000,()=>console.log("server rodando na porta 3000"))