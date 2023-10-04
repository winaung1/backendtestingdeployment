const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

app.get('/', (req, res) => {
    const data = [
        {
            name: 'win aung',
            age: 32
        },
        {
            name: 'Dann',
            age: 22
        },
    ]
    res.send(data)
})

app.listen(3001, () => {
    console.log('listening')
})