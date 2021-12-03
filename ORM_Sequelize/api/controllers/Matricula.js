const dataBase = require("../models");

const Services =  require('../services/Services');
const servicesMatriculas = new Services('Matriculas')

class Matricula {
    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
          await dataBase.Matriculas.restore({
            where: {
              id: Number(matriculaId),
              estudante_id: Number(estudanteId),
            },
          });
          return res.status(200).json({ mensagem: `id ${id} restaurado` });
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
      static async pegaMatriculas(req, res) {
        try {
          const { estudante_id } = req.params;
          console.log(estudante_id, estudante_id);
          const pessoa = await dataBase.Pessoas.findOne({
            where: { id: Number(estudante_id) },
          });
    
          const matriculas = await pessoa.getAulasMatriculadas();
    
          console.log("matricula encontrada id:", matriculas);
          return res.status(200).json(matriculas);
        } catch (error) {
          return res.status(500).send(`Erro: ${error.message}`);
        }
      }
      static async pegaMatriculasPorTurmas(req, res) {
        try {
          const { turma_id } = req.params;
          const matriculas = await dataBase.Matriculas.findAndCountAll({
            where: { turma_id: Number(turma_id), status: "confirmado" },
            limit: 20,
            order: [["estudante_id", "DESC"]],
          });
          return res.status(200).json(matriculas);
        } catch (error) {
          return res.status(500).send(`Erro: ${error.message}`);
        }
      }
      static async pegaTurmasLotadas(req, res) {
        try {
          const lotacao = 2;
          const turmasLotadas = await dataBase.Matriculas.findAndCountAll({
            where: { status: "confirmado" },
            attributes: ["turma_id"],
            group: ["turma_id"],
            having: Sequelize.literal(`count (turma_id) >= ${lotacao}`),
          });
          return res.status(200).json(turmasLotadas);
        } catch (error) {
          return res.status(500).send(`Erro: ${error.message}`);
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
          const newMatricula = await servicesMatriculas.criaRegistro(matricula);
          console.log("matricula criada id:", newMatricula.id);
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
  
}

module.exports = Matricula;