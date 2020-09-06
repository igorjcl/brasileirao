const PORT = process.env.PORT || 3333

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, (err) => {
  if (err) console.log("Erro: ", err);
  console.log("Server on");
});
