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
            schema.create(dados, err => err ? res.status(501).json(err) : res.status(201).json(dados) )
        }
        else
            //res.send('usuario já existe');
            res.status(409).json(dados);
            
    }

}
module.exports = new adicionarAtendimento;