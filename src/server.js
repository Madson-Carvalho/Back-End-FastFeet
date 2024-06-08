const express = require("express");
const routes = require('./routes');
const cors = require("cors");

const app = express();
const allowedOrigins = ['http://localhost:3000'];
const corsOption = {
    origin: allowedOrigins,
};

app.use(express.json());
app.use(cors(corsOption));
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));