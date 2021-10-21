const moment = require('moment');

class adicionarAtendimento{
   async adicionar(schema, dados, res){
        
        const existe =  await schema.findOne({cliente: dados["cliente"],pet: dados["pet"], servico: dados["servico"]}).exec();
        
        const dataCriacao = moment().format();

        // dataAtendimento = dados.dataAtendimento;
        dados.dataAtendimento = moment(dados.dataAtendimento, 'DD/MM/YYYY').format();
        //console.log(dados.dataAtendimento);

        dados.dataCriacao = dataCriacao;
        //console.log(dados);

        if (!existe)
        {
            schema.create(dados, err => err ? res.status(500).json(err) : res.status(200).json(dados) )
        }
        else
            res.status(500).json(dados);
    }

}
module.exports = new adicionarAtendimento;