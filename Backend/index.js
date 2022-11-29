const express = require('express')
const cors = require('cors')
const { connectDatabase } = require('./src/Config')
const routes = require('./src/Routes/routes')
const app = express()
const PORT=4000;

connectDatabase()
app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})