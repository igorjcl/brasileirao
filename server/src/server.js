const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, (err) => {
  if (err) console.log("Erro: ", err);
  console.log("Server on");
});
