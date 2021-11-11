const { Router } = require("express");
const PessoaControllers = require("../controllers/Pessoa");

const router = Router();

router.get("/pessoas", PessoaControllers.getAllPeople);

router.get("/pessoas/:id", PessoaControllers.getOnePerson);

router.post("/pessoas/", PessoaControllers.createPerson);

router.put("/pessoas/:id", PessoaControllers.updataPerson);

router.delete("/pessoas/:id", PessoaControllers.deletePerson);

module.exports = router;