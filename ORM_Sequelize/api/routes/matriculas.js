const { Router } = require("express");
const MatriculaControllers = require("../controllers/Matricula");

const router = Router();

router.get("/pessoa/:estudante_id/matricula/:matricula_id", MatriculaControllers.getOneMatricula);

router.post("/pessoa/:estudante_id/matricula", MatriculaControllers.createMatricula);

router.put("/pessoa/:estudante_id/matricula/:matricula_id", MatriculaControllers.updateMatricula);

router.delete("/pessoa/:estudante_id/matricula/:matricula_id", MatriculaControllers.deleteMatricula);

router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaControllers.restauraMatricula);

router.get("/pessoas/:estudante_id/matriculas", MatriculaControllers.pegaMatriculas);

router.get("/pessoas/matriculas/:turma_id/confirmados", MatriculaControllers.pegaMatriculasPorTurmas);

router.get("/pessoas/matriculas/lotada", MatriculaControllers.pegaTurmasLotadas);

module.exports = router;