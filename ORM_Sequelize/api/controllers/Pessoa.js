const { Pessoas } = require("../services");
const servicesPessoas = new Pessoas();

class Pessoa {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await servicesPessoas.todosRegistros();

      console.log("pessoas encontradas");
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getAllPeopleFull(req, res) {
    try {
      const allPeople = await servicesPessoas.todosRegistrosFull();

      console.log("pessoas full encontradas");
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getOnePerson(req, res) {
    try {
      const { id } = req.params;
      const person = await servicesPessoas.retornaUmRegistro(id);
      console.log("pessoa encontrada id:", person.id);
      return res.status(200).json(person);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async createPerson(req, res) {
    try {
      const person = req.body;
      const newPerson = await servicesPessoas.criaRegistro(person);
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
      const updatePerson = await servicesPessoas.atualizaRegistros(dados,id);
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
      const deletePerson = await servicesPessoas.apagaRegistro(id);
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
  static async restauraPessoa(req, res) {
    try {
      const { id } = req.params;
      await servicesPessoas.retornaUmRegistro({id:Number(id)} );
      return res.status(200).json({ msg: `pessoa restaurada id: ${id}` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async cancelaPessoa(req, res) {
    try {
      const { estudante_id } = req.params;
      await servicesPessoas.cancelapessoasMatriculas(estudante_id);
      return res
        .status(200)
        .json({ msg: `Matriculas estundante id: ${estudante_id} cancelado` });
    } catch (error) {
      return res.status(500).send(`Erro: ${error.message}`);
    }
  }
}
module.exports = Pessoa;
