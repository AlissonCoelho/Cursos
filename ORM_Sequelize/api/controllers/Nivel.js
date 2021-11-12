const dataBase = require("../models");

class Nivel {
  static async getAllNiveis(req, res) {
    try {
      const allNiveis = await dataBase.Niveis.findAll();

      console.log("niveis encontradas");
      return res.status(200).json(allNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOneNivel(req, res) {
    try {
      const { id } = req.params;
      const nivel = await dataBase.Niveis.findOne({
        where: { id: Number(id) },
      });
      console.log("nivel encontrada id:", nivel.id);
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createNivel(req, res) {
    try {
      const nivel = req.body;
      const newNivel = await dataBase.Niveis.create(nivel);
      console.log("nivel criada id:", newNivel.id);
      return res.status(200).json(newNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async updataNivel(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      const updateNivel = await dataBase.Niveis.update(dados, {where: {id: Number(id)}});
      if(updateNivel)
      {
        console.log("nivel atualizada id:", id);
        return res.status(200).send(`nivel atualizada id: ${id}`);
      }
      else
      {
        console.log("nivel não atualizada id:", id);
        return res.status(203).send("Não atualizado");
      }
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deleteNivel(req, res) {
    try {
      const { id } = req.params;
      const deleteNivel = await dataBase.Niveis.destroy({where: {id: Number(id)}});
      if(deleteNivel)
      {
        console.log("nivel deletada id:", id);
        return res.status(200).send(`nivel deletada id: ${id}`);
      }
      else
      {
        console.log("nivel não deletada id:", id);
        return res.status(203).send("Não deletada");
      }
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Nivel;
