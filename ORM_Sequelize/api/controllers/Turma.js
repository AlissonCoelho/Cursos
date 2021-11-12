const dataBase = require("../models");

class Turma {
  static async getAllTurmas(req, res) {
    try {
      const allTurmas = await dataBase.Pessoas.findAll();

      console.log("turmas encontradas");
      return res.status(200).json(allTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneTurma(req, res) {
    try {
      const { id } = req.params;
      const Turma = await dataBase.Pessoas.findOne({
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
      const newTurma = await dataBase.Pessoas.create(Turma);
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
      const updateTurma = await dataBase.Pessoas.update(dados, {where: {id: Number(id)}});
      if(updateTurma)
      {
        console.log("turma atualizada id:", id);
        return res.status(200).send(`turma atualizada id: ${id}`);
      }
      else
      {
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
      const deleteTurma = await dataBase.Pessoas.destroy({where: {id: Number(id)}});
      if(deleteTurma)
      {
        console.log("turma deletada id:", id);
        return res.status(200).send(`turma deletada id: ${id}`);
      }
      else
      {
        console.log("turma não deletada id:", id);
        return res.status(203).send("Não deletada");
      }
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Turma;
