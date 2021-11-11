const dataBase = require("../models");

class Pessoa {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await dataBase.Pessoas.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
        return res.status(500).json(error.message);
    }
  }
}

module.exports = Pessoa;