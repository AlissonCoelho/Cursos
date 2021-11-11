const { Router } = require("express");
const PessoaControllers = require("../controllers/Pessoa");

const router = Router();

router.get("/pessoas", PessoaControllers.getAllPeople);

module.exports = router;