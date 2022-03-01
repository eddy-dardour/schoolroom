require('dotenv').config()
const express = require('express');
const app = express();

app.listen(process.env.SERV_PORT, () => {
    console.log(`Server listening on port ${process.env.SERV_PORT}`)
})
app.use(express.json());
