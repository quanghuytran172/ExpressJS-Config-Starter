const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv").config();
const appRoute = require("./src/routes");
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", appRoute);

const port = parseInt(process.env.PORT || 3000);

app.listen(port, () => {
    console.log(`Run in port ${port}`);
});
