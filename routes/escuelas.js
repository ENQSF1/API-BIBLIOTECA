const { Router } = require("express");
const router = Router();

const escuelas = require("../escuelas.json");

router.get("/", (req, res) => {
  res.json(escuelas);
});

router.get("/:id", (req, res) => {
  const escuela = escuelas.find((c) => c.id === parseInt(req.params.id));
  if (!escuela) return res.status(404).send("escuela no encontrado");
  else res.send(escuela);
});

module.exports = router;
