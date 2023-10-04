const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
const port = 3001
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

app.listen(port, () => {
    console.log('listening', port)
})