const express = require("express");
const routes = require('./routes');
const cors = require("cors");
require('dotenv/config');

const app = express();
const allowedOrigins = ['http://localhost:3000', 'https://fastfeet-807q.onrender.com'];
const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));