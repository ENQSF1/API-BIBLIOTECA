const express = require("express");
const app = express();
const morgan = require("morgan");
app.set("port", process.env.PORT || 3000);

const escuelas = require("./routes/escuelas");
const carreras = require("./routes/carreras");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hola mundo");
});

//routes

app.use("/api/escuelas", escuelas);

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});

app.use("/api/carreras", carreras);
