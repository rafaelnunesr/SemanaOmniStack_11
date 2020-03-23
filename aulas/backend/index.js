const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        evento: 'SemanaOmniStack 11',
        aluno: 'Rafael'
    })
})

app.listen(3333)