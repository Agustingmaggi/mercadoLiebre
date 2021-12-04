const express = require('express')
const app = express()
const path = require('path')

const publicPath = path.resolve(__dirname, "./public") 
app.use(express.static(publicPath))

app.set('port',3000)
app.listen(process.env.PORT||app.get('port'), ()=> console.log('corriendo en el puerto 3000'))

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname,"./views/register.html")))
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname,"./views/login.html")))


app.use(express.static(path.resolve(__dirname, "./public")))