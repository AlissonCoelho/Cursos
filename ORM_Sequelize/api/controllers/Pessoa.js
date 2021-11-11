const dataBase = require("../models");

class Pessoa {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await dataBase.Pessoas.findAll();

      console.log("pessoas encontradas");
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOnePerson(req, res) {
    try {
      const { id } = req.params;
      const person = await dataBase.Pessoas.findOne({
        where: { id: Number(id) },
      });
      console.log("pessoa encontrada id:", person.id);
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPerson(req, res) {
    try {
      const person = req.body;
      const newPerson = await dataBase.Pessoas.create(person);
      console.log("pessoa criada id:", newPerson.id);
      return res.status(200).json(newPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async updataPerson(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const updatePerson = await dataBase.Pessoas.update(dados, {where: {id: Number(id)}});
      if(updatePerson)
      {
        console.log("pessoa atualizada id:", id);
        return res.status(200).send(`pessoa atualizada id: ${id}`);
      }
      else
      {
        console.log("pessoa não atualizada id:", id);
        return res.status(203).send("Não atualizado");
      }
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deletePerson(req, res) {
    try {
      const { id } = req.params;
      const deletePerson = await dataBase.Pessoas.destroy({where: {id: Number(id)}});
      if(deletePerson)
      {
        console.log("pessoa deletada id:", id);
        return res.status(200).send(`pessoa deletada id: ${id}`);
      }
      else
      {
        console.log("pessoa não deletada id:", id);
        return res.status(203).send("Não deletada");
      }
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Pessoa;
