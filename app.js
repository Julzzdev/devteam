const express = require('express')

const app = express()

app.get('/posts', (req, res, next) => {
    console.log("I get posts")
    console.log("Soy un aporte")
})

app.get('/users', (req, res, next) => {
    console.log('i get users')
})
app.listen(3000) 