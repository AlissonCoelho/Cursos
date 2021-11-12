const { Router } = require("express");
const PessoaControllers = require("../controllers/Pessoa");

const router = Router();

router.get("/pessoas", PessoaControllers.getAllPeople);

router.get("/pessoas/:id", PessoaControllers.getOnePerson);

router.post("/pessoas/", PessoaControllers.createPerson);

router.put("/pessoas/:id", PessoaControllers.updataPerson);

router.delete("/pessoas/:id", PessoaControllers.deletePerson);

router.get("/pessoa/:estudante_id/matricula/:matricula_id", PessoaControllers.getOneMatricula);

router.post("/pessoa/:estudante_id/matricula", PessoaControllers.createMatricula);

router.put("/pessoa/:estudante_id/matricula/:matricula_id", PessoaControllers.updateMatricula);

router.delete("/pessoa/:estudante_id/matricula/:matricula_id", PessoaControllers.deleteMatricula);

router.post("/pessoas/:id/restaura", PessoaControllers.restauraPessoa);

router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaControllers.restauraMatricula)


module.exports = router;