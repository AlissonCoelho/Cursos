const { Router } = require("express");
const NivelControllers = require("../controllers/Nivel");

const router = Router();

router.get("/niveis", NivelControllers.getAllNiveis);

router.get("/niveis/:id", NivelControllers.getOneNivel);

router.post("/niveis/", NivelControllers.createNivel);

router.put("/niveis/:id", NivelControllers.updataNivel);

router.delete("/niveis/:id", NivelControllers.deleteNivel);

module.exports = router;