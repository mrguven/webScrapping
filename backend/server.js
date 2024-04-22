const express = require("express");
const postgres = require("postgres");
require("dotenv").config();
const cors = require("cors");
const app = express();
const routes = require("./routes/routes");
const port = process.env.PORT;

app.use(express.static("public"));

//cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(
  cors({
    origin: [5000],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(routes);
// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("we listen port", port);
});
