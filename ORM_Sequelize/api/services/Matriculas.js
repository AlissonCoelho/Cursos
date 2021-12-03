const dataBase = require("../models");
const Services = require("./Services");

class MatriculasServices extends Services {
  constructor() {
    super("Matriculas");
  }
  //métodos específicos do controlador Matriculas
  async todosRegistrosFull(where = {}) {
    //                                              findAll({ where: {...whwre} })
    return dataBase[this.nomeModelo].scope("todos").findAll({ where });
  }


}

module.exports = MatriculasServices;
