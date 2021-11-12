const { Router } = require("express");
const TurmaControllers = require("../controllers/Turma");

const router = Router();

router.get("/turmas", TurmaControllers.getAllTurmas);

router.get("/turmas/:id", TurmaControllers.getOneTurma);

router.post("/turmas/", TurmaControllers.createTurma);

router.put("/turmas/:id", TurmaControllers.updataTurma);

router.delete("/turmas/:id", TurmaControllers.deleteTurma);

module.exports = router;