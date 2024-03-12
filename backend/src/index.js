require("dotenv").config();
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const TaskRoutes = require("./routes/TaskRoutes");

app.use(TaskRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Servidor iniciado na ${process.env.BACKEND_URL}`)
);