function criarTabela (mongoose){
    this.mongoose = mongoose;
   SchemaAtendimento = new mongoose.Schema({
        cliente:  String,
        pet: String,
        servico: String,
        status: String,
        observacoes: String,
        dataAtendimento: Date,
        dataCriacao: Date
      });
      const Atendimento = mongoose.model('Atendimento', SchemaAtendimento);
      return Atendimento;
}

module.exports = criarTabela

