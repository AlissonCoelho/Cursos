const Services = require("./Services");

class TurmasServices extends Services {
  constructor() {
    super("Turmas");
  }
  //métodos específicos do controlador pessoas
  async Registros(where) {
    return dataBase[this.nomeModelo].findAll({where});
  }
}

module.exports = TurmasServices