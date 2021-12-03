const { Router } = require("express");
const PessoaControllers = require("../controllers/Pessoa");

const router = Router();

router.get("/pessoas", PessoaControllers.getAllPeopleFull);

router.get("/pessoas/ativas", PessoaControllers.getAllPeople);

router.get("/pessoas/:id", PessoaControllers.getOnePerson);

router.post("/pessoas/", PessoaControllers.createPerson);

router.put("/pessoas/:id", PessoaControllers.updataPerson);

router.delete("/pessoas/:id", PessoaControllers.deletePerson);

router.post("/pessoas/:id/restaura", PessoaControllers.restauraPessoa);

router.post("/pessoas/:estudante_id/cancela", PessoaControllers.cancelaPessoa);

module.exports = router;