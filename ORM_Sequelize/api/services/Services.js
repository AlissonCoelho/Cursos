const dataBase = require("../models");

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo;
  }

  async todosRegistros() {
    return dataBase[this.nomeModelo].findAll();
  }
  async retornaUmRegistro(id) {
    return dataBase[this.nomeModelo].findOne({
      where: { id: Number(id) },
    });
  }
  async criaRegistro(dados) {
    dataBase[this.nomeModelo].create(dados);
  }
  async atualizaRegistro(dados, id, trnasacao = {}) {
    return dataBase[this.nomeModelo].update(
      dados,
      { where: { id: Number(id) } },
      trnasacao
    );
  }
  async apagaRegistro(id) {
    return dataBase[this.nomeModelo].destroy({ where: { id: Number(id) } });
  }
  async restaurarRegistro(where) {
    return dataBase[this.nomeModelo].restore({where});
  }
}

module.exports = Services;
