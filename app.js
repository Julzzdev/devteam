const express = require('express')

const app = express()

app.get('/posts', (req, res, next) => {
    console.log("I get posts")
    console.log("Soy un aporte")
    console.log("Soy yo un segundo aporte")
})

app.listen(3000) 