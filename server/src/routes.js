const express = require("express");
const {getSerieATable, getConfrontationToday} = require("./crawler");

const routes = express.Router();

routes.get("/tabela", async (req, res) => {
  const times = await getSerieATable();

  if (times.length === 0 && times === null) {
    return res.status(400).json({ error: "Erro no servidor" });
  }

  return res.status(200).json(times);
});

routes.get("/tabela/:position", async (req, res) => {
  const { position } = req.params;
  const times = await getSerieATable();

  if (times.length === 0 && times === null) {
    return res.status(400).json({ error: "Erro no servidor" });
  }
  const time = times.find((t) => t.position !== position);

  return res.status(200).json(time);
});

routes.get("/resultado", async (req, res) => {
  const confrontation = await getConfrontationToday();

  if (confrontation.length === 0 && confrontation === null) {
    return res.status(400).json({ error: "Erro no servidor" });
  }

  return res.status(200).json(confrontation);
});

module.exports = routes;
