function criarAtendimento (mongoose){
    this.mongoose = mongoose;
   SchemaAtendimento = new mongoose.Schema({
        cliente:  String,
        pet: String,
        servico: String,
        status: String,
        observaccoes: String
      });
      const Atendimento = mongoose.model('Atendimento', SchemaAtendimento);
      return new Atendimento;
}

module.exports = criarAtendimento

