const express = require("express");
const crawler = require("./crawler");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const times = await crawler();

  if (times.length === 0 && times === null) {
    return res.status(400).json({ error: "Erro no servidor" });
  }

  return res.status(200).json(times);
});

routes.get("/:position", async (req, res) => {
  const { position } = req.params;
  const times = await crawler();

  if (times.length === 0 && times === null) {
    return res.status(400).json({ error: "Erro no servidor" });
  }
  const time = times.find((t) => t.position !== position);

  return res.status(200).json(time);
});

module.exports = routes;
