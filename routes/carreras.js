const { Router } = require("express");
const router = Router();

const carreras = require("../carreras.json");

router.get("/", (req, res) => {
  res.json(carreras);
});

router.get("/:id", (req, res) => {
  const carrera = carreras.find((c) => c.id === parseInt(req.params.id));
  if (!carrera) return res.status(404).send("carrera no encontrado");
  else res.send(carrera);
});

module.exports = router;
