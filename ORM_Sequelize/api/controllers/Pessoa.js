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
      const updatePerson = await dataBase.Pessoas.update(dados, {
        where: { id: Number(id) },
      });
      if (updatePerson) {
        console.log("pessoa atualizada id:", id);
        return res.status(200).send(`pessoa atualizada id: ${id}`);
      } else {
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
      const deletePerson = await dataBase.Pessoas.destroy({
        where: { id: Number(id) },
      });
      if (deletePerson) {
        console.log("pessoa deletada id:", id);
        return res.status(200).send(`pessoa deletada id: ${id}`);
      } else {
        console.log("pessoa não deletada id:", id);
        return res.status(203).send("Não deletada");
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getOneMatricula(req, res) {
    try {
      const { estudante_id, matricula_id } = req.params;
      console.log(estudante_id, matricula_id);
      const matricula = await dataBase.Matriculas.findOne({
        where: { id: Number(matricula_id), estudante_id: Number(estudante_id) },
      });
      console.log("matricula encontrada id:", matricula);
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).send(`Erro: ${error.message}`);
    }
  }
  static async createMatricula(req, res) {
    try {
      const { estudante_id } = req.params;
      const matricula = { ...req.body, estudante_id: Number(estudante_id) };
      console.log("matricula:", matricula);
      const newMatricula = await dataBase.Matriculas.create(matricula);
      console.log("pessoa criada id:", newMatricula.id);
      return res.status(200).json(newMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async updateMatricula(req, res) {
    try {
      const { estudante_id, matricula_id } = req.params;
      const dados = req.body;
      console.log("matricula dados:", dados);
      await dataBase.Matriculas.update(dados, {
        where: { id: Number(matricula_id), estudante_id: Number(estudante_id) },
      });

      const matricula = await dataBase.Matriculas.findOne({
        where: { id: Number(matricula_id) },
      });
      console.log("matricula atualizada id:", matricula);
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).send(`Erro: ${error.message}`);
    }
  }
  static async deleteMatricula(req, res) {
    try {
      const { estudante_id, matricula_id } = req.params;
      console.log("estudante_id, matricula_id:", estudante_id, matricula_id);

      const deleteMatricula = await dataBase.Matriculas.destroy({
        where: { id: Number(matricula_id), estudante_id: Number(estudante_id) },
      });
      if (deleteMatricula) {
        console.log("matricula deletada id:", matricula_id);
        return res.status(200).send(`matricula deletada id: ${matricula_id}`);
      } else {
        console.log("matricula não deletada id:", matricula_id);
        return res.status(203).send("Não deletada");
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async restauraPessoa(req, res) {
    try {
      const { id } = req.params;
      await dataBase.Pessoas.restore({where: { id: Number(id) }})
      return res.status(200).json({msg: `pessoa restaurada id: ${id}`})
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params
    try {
      await dataBase.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json({ mensagem: `id ${id} restaurado`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = Pessoa;
