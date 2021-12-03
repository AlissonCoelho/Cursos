const {Op} = require('sequelize');

const Services =  require('../services/Services');
const servicesTurmas = new Services('Turmas')

class Turma {
  static async getAllTurmas(req, res) {
    try {
      const {dataInicio, dataFinal} = req.query
      const where = {}

      dataInicio || dataFinal ? where.data_inicio= {} : null;
      dataInicio ? where.data_inicio[Op.gte] = dataInicio : null;
      dataFinal ? where.data_inicio[Op.lte] = dataFinal : null;
      const allTurmas = await servicesTurmas.Registros({where});

      console.log("turmas encontradas");
      return res.status(200).json(allTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getOneTurma(req, res) {
    try {
      const { id } = req.params;
      const Turma = await servicesTurmas.retornaUmRegistro(id);
      console.log("turma encontrada id:", Turma.id);
      return res.status(200).json(Turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async createTurma(req, res) {
    try {
      const Turma = req.body;
      const newTurma = await servicesTurmas.criaRegistro(Turma);
      console.log("turma criada id:", newTurma.id);
      return res.status(200).json(newTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async updataTurma(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const updateTurma = await servicesTurmas.atualizaRegistro(dados,id);
      if (updateTurma) {
        console.log("turma atualizada id:", id);
        return res.status(200).send(`turma atualizada id: ${id}`);
      } else {
        console.log("turma não atualizada id:", id);
        return res.status(203).send("Não atualizado");
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deleteTurma(req, res) {
    try {
      const { id } = req.params;
      const deleteTurma = await servicesTurmas.apagaRegistro(id);
      if (deleteTurma) {
        console.log("turma deletada id:", id);
        return res.status(200).send(`turma deletada id: ${id}`);
      } else {
        console.log("turma não deletada id:", id);
        return res.status(203).send("Não deletada");
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async restauraTurma(req, res) {
    const { id } = req.params;
    try {
      await servicesTurmas.restaurarRegistro({id:Number(id)});
      return res.status(200).json({ mensagem: `id ${id} restaurado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Turma;
