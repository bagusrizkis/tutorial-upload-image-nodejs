require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const controller = require("./controllers/controllers");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", controller.check);

app.listen(PORT, "localhost", () => {
    console.log("Server listening on port: ", PORT);
});
