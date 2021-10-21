function criarTabela (mongoose){
    this.mongoose = mongoose;
   SchemaAtendimento = new mongoose.Schema({
        cliente:  String,
        pet: String,
        servico: String,
        status: String,
        observacoes: String
      });
      const Atendimento = mongoose.model('Atendimento', SchemaAtendimento);
      return Atendimento;
}

module.exports = criarTabela

