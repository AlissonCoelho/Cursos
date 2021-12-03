const dataBase = require("../models");
const Services = require("./Services");

class PessoasServices extends Services {
  constructor() {
    super("Pessoas");
    this.matriculas = new Services('Matriculas')
  }
  //métodos específicos do controlador pessoas
  async todosRegistrosFull(where = {}) {
    //                                              findAll({ where: {...whwre} })
    return dataBase[this.nomeModelo].scope("todos").findAll({ where });
  }
  async cancelapessoasMatriculas(estudante_id){
      return dataBase.sequelize.transaction( async transacao => {
          await super.atualizaRegistro({ativo: false}, estudante_id, {transaction:transacao });
          await this.matriculas.atualizaRegistro({status: 'cancelado'}, estudante_id, {transaction:transacao })
      })
  }

}

module.exports = PessoasServices;
