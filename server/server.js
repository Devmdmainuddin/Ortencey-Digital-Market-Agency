require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL ;

cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATH'],
    allowedHeaders: ['Content-Type', 'Authorization',]
})
app.use(express.json());

mongoose.connect(MONGO_URL)
.then(()=>console.log("Mongodb Connected"))
.catch(error => console.log(error));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        success: false,
        message: 'Something went wrong'
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})