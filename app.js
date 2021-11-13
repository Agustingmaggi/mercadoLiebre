const express = require('express')
const app = express()
const path = require('path')

const publicPath = path.resolve(__dirname, "./public") 
app.use(express.static(publicPath))

app.set('port',3000)
app.listen(app.get('port'), ()=> console.log('listening to the port'))

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.use(express.static(path.resolve(__dirname, "./public")))