const express = require('express')
const app = express()
const port = 3000
const initiationRoutes = require('./routes/initiation')

app.use(express.urlencoded({ extended: true }));

app.use('/initiation', initiationRoutes)

app.listen(port, () => {
  console.log(`Shipping app listening at http://localhost:${port}`)
})