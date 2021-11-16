const dataBase = require("../models");
const {Op} = require('sequelize');

class Turma {
  static async getAllTurmas(req, res) {
    try {
      const {dataInicio, dataFinal} = req.query
      const where = {}

      dataInicio || dataFinal ? where.data_inicio= {} : null;
      dataInicio ? where.data_inicio[Op.gte] = dataInicio : null;
      dataFinal ? where.data_inicio[Op.lte] = dataFinal : null;
      const allTurmas = await dataBase.Turmas.findAll({where});

      console.log("turmas encontradas");
      return res.status(200).json(allTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getOneTurma(req, res) {
    try {
      const { id } = req.params;
      const Turma = await dataBase.Turmas.findOne({
        where: { id: Number(id) },
      });
      console.log("turma encontrada id:", Turma.id);
      return res.status(200).json(Turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async createTurma(req, res) {
    try {
      const Turma = req.body;
      const newTurma = await dataBase.Turmas.create(Turma);
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
      const updateTurma = await dataBase.Turmas.update(dados, {
        where: { id: Number(id) },
      });
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
      const deleteTurma = await dataBase.Turmas.destroy({
        where: { id: Number(id) },
      });
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
      await dataBase.Turmas.restore({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} restaurado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Turma;
