const express = require('express')

const app = express()

app.get('/posts', (req, res, next) => {
    console.log("I get posts")
})

app.listen(3000)